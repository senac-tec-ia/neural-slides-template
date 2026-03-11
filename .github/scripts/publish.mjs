#!/usr/bin/env node
/**
 * publish.mjs — Neural Slides publish script
 * Runs after `slidev build`. Deploys dist/ to Cloudflare Pages and
 * triggers the GitHub Action that syncs files to course-platform.
 *
 * Prerequisites:
 *   - CLOUDFLARE_API_TOKEN env var (or via wrangler login)
 *   - CLOUDFLARE_ACCOUNT_ID env var
 *   - git remote origin configured
 *
 * Usage: node .github/scripts/publish.mjs
 */

import { execSync } from "child_process"
import { readFileSync, writeFileSync } from "fs"
import { basename } from "path"

const slug = basename(process.cwd()) // e.g. "aula-04-conceitos-de-ia"
const metaPath = "meta.yaml"
let metaRaw = readFileSync(metaPath, "utf-8")

// Minimal YAML field reader (no dependency needed for simple scalar fields)
function getField(yaml, field) {
  const match = yaml.match(new RegExp(`^${field}:\\s*(.+)$`, "m"))
  return match ? match[1].trim().replace(/^["']|["']$/g, "") : null
}

const aulaNum = getField(metaRaw, "aula")
const title   = getField(metaRaw, "title")
const status  = getField(metaRaw, "status")

console.log(`\n📦 Neural Slides — Publishing`)
console.log(`   Aula ${aulaNum}: ${title}`)
console.log(`   Slug: ${slug}\n`)

if (status === "draft") {
  console.error("❌ meta.yaml status is 'draft'. Set to 'ready' before publishing.")
  process.exit(1)
}

// ── 1. Deploy to Cloudflare Pages ──────────────────────────────────────────
console.log("🚀 Deploying dist/ to Cloudflare Pages...")
let deployUrl = `https://${slug}.pages.dev`

try {
  const out = execSync(
    `npx wrangler pages deploy dist --project-name ${slug} --branch main`,
    { encoding: "utf-8", stdio: ["inherit", "pipe", "pipe"] }
  )
  const match = out.match(/https:\/\/[^\s]+\.pages\.dev/)
  if (match) deployUrl = match[0]
  console.log(`✅ Deployed: ${deployUrl}`)
} catch (err) {
  console.error("❌ Wrangler deploy failed:")
  console.error(err.stderr || err.message)
  process.exit(1)
}

// ── 2. Update meta.yaml ────────────────────────────────────────────────────
metaRaw = metaRaw
  .replace(/^deployUrl:.*$/m, `deployUrl: "${deployUrl}"`)
  .replace(/^status:.*$/m, `status: published`)
writeFileSync(metaPath, metaRaw)
console.log("📝 meta.yaml updated with deployUrl and status: published")

// ── 3. Git commit + tag ────────────────────────────────────────────────────
const tagName = `v1.0.0`
const commitMsg = `[publish] aula-${aulaNum} → ${deployUrl}`

try {
  execSync("git add meta.yaml")
  execSync(`git commit -m "${commitMsg}"`)
  execSync(`git tag -f ${tagName} -m "${commitMsg}"`)
  execSync("git push")
  execSync("git push --tags -f")
  console.log(`🏷️  Tagged ${tagName} and pushed`)
} catch (err) {
  console.error("⚠️  Git step failed (maybe nothing to commit):")
  console.error(err.message)
}

// ── Done ────────────────────────────────────────────────────────────────────
console.log(`\n🎉 Aula ${aulaNum} published!`)
console.log(`   Slides:  ${deployUrl}`)
console.log(`   GitHub Action 'Sync to Platform' will run automatically.`)
console.log(`   Track at: https://github.com/senac-tecia/${slug}/actions\n`)
