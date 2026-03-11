#!/usr/bin/env node
/**
 * sync-to-template.mjs
 * Empurra a infraestrutura do agente para um repo do senac-tec-ia
 * via GitHub API (sem clonar o repo). Roda a partir do diretório de qualquer aula.
 *
 * Usage:
 *   node .github/scripts/sync-to-template.mjs              → destino: neural-slides-template
 *   node .github/scripts/sync-to-template.mjs --repo A05   → destino: A05 (só infra, sem stubs de conteúdo)
 *
 * Requires: gh CLI autenticado com acesso ao senac-tec-ia
 */

import { execSync } from "child_process"
import { readFileSync } from "fs"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

const __dir   = dirname(fileURLToPath(import.meta.url))
const ROOT    = resolve(__dir, "../..")
const OWNER   = "senac-tec-ia"
const BRANCH  = "master"

// Resolve --repo argument (default: template)
const repoArg = process.argv.indexOf("--repo")
const REPO    = repoArg !== -1 ? process.argv[repoArg + 1] : "neural-slides-template"
const IS_TEMPLATE = REPO === "neural-slides-template"

if (!IS_TEMPLATE) {
  console.log(`\n📦 Modo: sync de infra para aula (${REPO}) — stubs de conteúdo ignorados.`)
}

const GREEN  = "\x1b[32m"
const YELLOW = "\x1b[33m"
const RED    = "\x1b[31m"
const RESET  = "\x1b[0m"

// ─── helpers ─────────────────────────────────────────────────────────────────

function gh(endpoint, method = "GET", body = null) {
  const bodyArg = body ? `--input -` : ""
  const cmd = `gh api ${bodyArg} --method ${method} "${endpoint}"`
  const input = body ? JSON.stringify(body) : undefined
  const out = execSync(cmd, { encoding: "utf-8", input, stdio: ["pipe", "pipe", "pipe"] })
  return JSON.parse(out || "{}")
}

function readLocal(relativePath) {
  return readFileSync(resolve(ROOT, relativePath), "utf-8")
}

// ─── files to sync ───────────────────────────────────────────────────────────

const files = []

// 1. Orchestrator instructions
files.push({
  remote: ".github/copilot-instructions.md",
  content: readLocal(".github/copilot-instructions.md"),
})

// 1b. Operational workflow guide
files.push({
  remote: ".github/FLUXO-AULA.md",
  content: readLocal(".github/FLUXO-AULA.md"),
})

// 1c. Commands reference
files.push({
  remote: ".github/COMANDOS-AULAS.md",
  content: readLocal(".github/COMANDOS-AULAS.md"),
})

// 2. Agent skill files
files.push({
  remote: ".github/agents/verificador-estrutura-aula.agent.md",
  content: readLocal(".github/agents/verificador-estrutura-aula.agent.md"),
})

// 2b. Orchestrator agent
files.push({
  remote: ".github/agents/orquestrador-1ano.agent.md",
  content: readLocal(".github/agents/orquestrador-1ano.agent.md"),
})

// 2c. Specialist writer agents (Fase 1 split)
files.push({
  remote: ".github/agents/slidev-writer.agent.md",
  content: readLocal(".github/agents/slidev-writer.agent.md"),
})
files.push({
  remote: ".github/agents/exercise-builder.agent.md",
  content: readLocal(".github/agents/exercise-builder.agent.md"),
})

// 2d. Per-UC discipline agents (D01-D09)
files.push({
  remote: ".github/agents/d01-uc01-fundamentos-computacao.agent.md",
  content: readLocal(".github/agents/d01-uc01-fundamentos-computacao.agent.md"),
})
files.push({
  remote: ".github/agents/d02-uc01-ingles-instrumental.agent.md",
  content: readLocal(".github/agents/d02-uc01-ingles-instrumental.agent.md"),
})
files.push({
  remote: ".github/agents/d03-uc01-fundamentos-matematicos.agent.md",
  content: readLocal(".github/agents/d03-uc01-fundamentos-matematicos.agent.md"),
})
files.push({
  remote: ".github/agents/d04-uc02-fundamentos-e-conceitos-de-ia.agent.md",
  content: readLocal(".github/agents/d04-uc02-fundamentos-e-conceitos-de-ia.agent.md"),
})
files.push({
  remote: ".github/agents/d05-uc03-python-para-ia.agent.md",
  content: readLocal(".github/agents/d05-uc03-python-para-ia.agent.md"),
})
files.push({
  remote: ".github/agents/d06-uc04-arquitetura-computadores-gpu.agent.md",
  content: readLocal(".github/agents/d06-uc04-arquitetura-computadores-gpu.agent.md"),
})
files.push({
  remote: ".github/agents/d07-uc05-transformacao-digital.agent.md",
  content: readLocal(".github/agents/d07-uc05-transformacao-digital.agent.md"),
})
files.push({
  remote: ".github/agents/d08-uc06-banco-de-dados.agent.md",
  content: readLocal(".github/agents/d08-uc06-banco-de-dados.agent.md"),
})
files.push({
  remote: ".github/agents/d09-uc07-estatistica-aplicada.agent.md",
  content: readLocal(".github/agents/d09-uc07-estatistica-aplicada.agent.md"),
})

// 3. UC context files — memory of what has been taught so far
files.push({
  remote: ".github/agents/contexto-fundamentos-de-computacao.md",
  content: readLocal(".github/agents/contexto-fundamentos-de-computacao.md"),
})
files.push({
  remote: ".github/agents/contexto-python-para-ia.md",
  content: readLocal(".github/agents/contexto-python-para-ia.md"),
})
files.push({
  remote: ".github/agents/contexto-ingles-instrumental.md",
  content: readLocal(".github/agents/contexto-ingles-instrumental.md"),
})
files.push({
  remote: ".github/agents/contexto-fundamentos-matematicos.md",
  content: readLocal(".github/agents/contexto-fundamentos-matematicos.md"),
})
files.push({
  remote: ".github/agents/contexto-fundamentos-e-conceitos-de-ia.md",
  content: readLocal(".github/agents/contexto-fundamentos-e-conceitos-de-ia.md"),
})
files.push({
  remote: ".github/agents/contexto-arquitetura-computadores-gpu.md",
  content: readLocal(".github/agents/contexto-arquitetura-computadores-gpu.md"),
})
files.push({
  remote: ".github/agents/contexto-transformacao-digital.md",
  content: readLocal(".github/agents/contexto-transformacao-digital.md"),
})
files.push({
  remote: ".github/agents/contexto-banco-de-dados.md",
  content: readLocal(".github/agents/contexto-banco-de-dados.md"),
})
files.push({
  remote: ".github/agents/contexto-estatistica-aplicada.md",
  content: readLocal(".github/agents/contexto-estatistica-aplicada.md"),
})

// 4. publish.mjs script
files.push({
  remote: ".github/scripts/publish.mjs",
  content: readLocal(".github/scripts/publish.mjs"),
})

// 5. GitHub Action workflow
files.push({
  remote: ".github/workflows/publish-aula.yml",
  content: readLocal(".github/workflows/publish-aula.yml"),
})

// 6. meta.yaml — blank template stub (NOT aula-04 content)
files.push({
  remote: "meta.yaml",
  templateOnly: true,
  content: `# Metadados da Aula — Neural Slides
# Preenchido pelo CLI ao rodar \`course new\`

aula: null
slug: ""
title: ""
author: "Leonardo Zanini"
courseTitle: "Técnico em Inteligência Artificial"

disciplines: []

date: ""

# draft | ready | published
status: draft

deployUrl: ""

slideCount: 0

agentsUsed: []
`,
})

// 7. exercicios.md — blank template stub (schema documentation only)
files.push({
  remote: "exercicios.md",
  templateOnly: true,
  content: `# Exercícios — Aula [N]: [Título]

> **Para o agente (@slidev-senac):** Cada exercício começa com um bloco \`---\` de
> frontmatter YAML seguido do enunciado em Markdown.
> Os testes do frontmatter são usados pela plataforma para correção automática (Pyodide).
> O bloco de código starter é obrigatório em exercícios do tipo \`python\`.

---

## Schema de Frontmatter por Exercício

\`\`\`yaml
id: EX-00-01            # identificador único: EX-{aula}-{seq}
aula: 0                 # número da aula
uc: "UC00"              # UC desta disciplina (ex: UC02, UC03)
tipo: python            # python | texto | multipla-escolha
nivel: 1                # 1=compreensão | 2=ap.guiada | 3=ap.independente | 4=desafio
titulo: "..."           # título curto exibido na plataforma
pontuacao: 10           # pontuação máxima do exercício
dupla: false            # true = exercício em dupla, false = individual
testes:                 # casos de teste para correção automática
  - input: ""
    expected: ""
\`\`\`

---
<!-- Insira os exercícios abaixo seguindo o schema acima. Mínimo 3, máximo 8. -->
<!-- Níveis devem escalar: 1 → 2 → 3 → 4. Nunca pular níveis. -->
<!-- Todo exercício python precisa de código starter com assinatura da função pronta. -->
`,
})

// 8. tarefa.md — blank template stub
files.push({
  remote: "tarefa.md",
  templateOnly: true,
  content: `# Tarefa de Casa — Aula [N]: [Título]

---
aula: 0
titulo: ""
prazo: "próxima aula"
pontuacao_maxima: 30
entrega: "arquivo .py salvo em SENAC-TecIA/Aula-00/tarefa/"
nome_arquivo: "tarefa_00_slug.py"
---

## Objetivo

<!-- Descreva o objetivo pedagógico da tarefa em 1-2 frases. -->

---

## Descrição

<!-- Enunciado completo da tarefa. -->

---

## Código Starter

\`\`\`python
# tarefa_00_slug.py
# Técnico em IA — Aula 00
# Nome:

# Escreva sua solução abaixo:

\`\`\`

---

## Critérios de Avaliação

| Critério | Pontos |
|---|---|
| Arquivo salvo no caminho correto com nome correto | 5 |
| ... | ... |
`,
})

// 9. package.json — add the publish script
const pkgRaw = JSON.parse(
  execSync(`gh api repos/${OWNER}/${REPO}/contents/package.json --jq ".content"`, {
    encoding: "utf-8",
  }).trim()
    .split("\n")
    .map((l) => Buffer.from(l, "base64").toString("utf-8"))
    .join("")
)

if (!pkgRaw.scripts?.publish) {
  pkgRaw.scripts.build  = "slidev build slides.md --out dist"
  pkgRaw.scripts.publish = "npm run build && node .github/scripts/publish.mjs"
  files.push({
    remote: "package.json",
    content: JSON.stringify(pkgRaw, null, 2) + "\n",
  })
} else {
  console.log(`  ${YELLOW}~${RESET} Skipped: package.json already has publish script`)
}

// ─── filter ──────────────────────────────────────────────────────────────────
// When targeting a lesson repo, skip content stubs (meta.yaml, exercicios.md, tarefa.md)
// to avoid overwriting the actual lesson content.
const syncFiles = IS_TEMPLATE ? files : files.filter(f => !f.templateOnly)

// ─── execute ─────────────────────────────────────────────────────────────────

console.log(`\n🚀 Syncing ${syncFiles.length} files → ${OWNER}/${REPO} (single commit)\n`)

try {
  // Step 1: resolve current HEAD
  const { object: { sha: headSha } } = gh(`repos/${OWNER}/${REPO}/git/refs/heads/${BRANCH}`)

  // Step 2: get base tree SHA
  const { tree: { sha: baseTreeSha } } = gh(`repos/${OWNER}/${REPO}/git/commits/${headSha}`)

  // Step 3: create one blob per file
  const treeItems = []
  for (const { remote, content } of syncFiles) {
    const { sha } = gh(`repos/${OWNER}/${REPO}/git/blobs`, "POST", {
      content: Buffer.from(content).toString("base64"),
      encoding: "base64",
    })
    treeItems.push({ path: remote, mode: "100644", type: "blob", sha })
    process.stdout.write(`  ${GREEN}✓${RESET} ${remote}\n`)
  }

  // Step 4: create new tree
  const { sha: newTreeSha } = gh(`repos/${OWNER}/${REPO}/git/trees`, "POST", {
    base_tree: baseTreeSha,
    tree: treeItems,
  })

  // Step 5: bail out if content didn't change
  if (newTreeSha === baseTreeSha) {
    console.log(`\n✅ Sem alterações — nada a commitar.\n`)
    process.exit(0)
  }

  // Step 6: create commit
  const { sha: newCommitSha } = gh(`repos/${OWNER}/${REPO}/git/commits`, "POST", {
    message: `feat(sync): update ${syncFiles.length} infrastructure files [skip ci]`,
    tree: newTreeSha,
    parents: [headSha],
  })

  // Step 7: advance branch ref
  gh(`repos/${OWNER}/${REPO}/git/refs/heads/${BRANCH}`, "PATCH", { sha: newCommitSha })

  console.log(`\n✅ Done. ${syncFiles.length} files → commit ${newCommitSha.slice(0, 7)}`)
  console.log(`   https://github.com/${OWNER}/${REPO}\n`)
} catch (err) {
  console.error(`\n${RED}✗ Sync failed:${RESET}`, err.stderr?.trim() || err.message)
  process.exit(1)
}

// Quando rodando localmente, faz rebase automático para evitar divergência
// (o sync usa a API diretamente, criando commits no remote sem passar pelo git local)
if (!process.env.CI) {
  try {
    console.log("🔄 Rebasing local branch against remote (evita conflito no próximo commit)...")
    const hasDirty = execSync("git status --porcelain", { encoding: "utf-8", cwd: ROOT }).trim()
    if (hasDirty) {
      execSync("git stash --include-untracked", { stdio: "inherit", cwd: ROOT })
    }
    execSync("git pull --rebase", { stdio: "inherit", cwd: ROOT })
    if (hasDirty) {
      execSync("git stash pop", { stdio: "inherit", cwd: ROOT })
    }
    console.log("✅ Rebase concluído.\n")
  } catch {
    console.warn("⚠️  Rebase falhou — rode 'git pull --rebase' manualmente antes do próximo commit.\n")
  }
}
