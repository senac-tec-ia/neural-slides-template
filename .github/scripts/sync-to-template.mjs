#!/usr/bin/env node
/**
 * sync-to-template.mjs
 * Empurra a infraestrutura do agente para o senac-tec-ia/neural-slides-template
 * via GitHub API (sem clonar o repo). Roda a partir do diretório de qualquer aula.
 *
 * Usage: node .github/scripts/sync-to-template.mjs
 * Requires: gh CLI autenticado com acesso ao senac-tec-ia
 */

import { execSync } from "child_process"
import { readFileSync } from "fs"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

const __dir   = dirname(fileURLToPath(import.meta.url))
const ROOT    = resolve(__dir, "../..")
const OWNER   = "senac-tec-ia"
const REPO    = "neural-slides-template"
const BRANCH  = "master"

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

function getSha(path) {
  try {
    const res = gh(`repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`)
    return res.sha
  } catch {
    return null // file doesn't exist yet
  }
}

function push(remotePath, content, message) {
  const sha = getSha(remotePath)
  const body = {
    message,
    content: Buffer.from(content).toString("base64"),
    branch: BRANCH,
    ...(sha ? { sha } : {}),
  }
  gh(`repos/${OWNER}/${REPO}/contents/${remotePath}`, "PUT", body)
  const action = sha ? "Updated" : "Created"
  console.log(`  ${GREEN}✓${RESET} ${action}: ${remotePath}`)
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
  msg: "feat(agents): add Copilot Orchestrator instructions",
})

// 2. Agent skill files (full content from aula-04)
files.push({
  remote: ".github/agents/verificador-estrutura-aula.agent.md",
  content: readLocal(".github/agents/verificador-estrutura-aula.agent.md"),
  msg: "feat(agents): add verificador-estrutura-aula agent",
})

// 3. UC context files — memory of what has been taught so far
//    These are the source of truth; refined after each aula via `course refine`
files.push({
  remote: ".github/agents/contexto-fundamentos-de-computacao.md",
  content: readLocal(".github/agents/contexto-fundamentos-de-computacao.md"),
  msg: "feat(agents): sync contexto-fundamentos-de-computacao (aula-04)",
})
files.push({
  remote: ".github/agents/contexto-python-para-ia.md",
  content: readLocal(".github/agents/contexto-python-para-ia.md"),
  msg: "feat(agents): sync contexto-python-para-ia (aula-04)",
})

// 4. publish.mjs script
files.push({
  remote: ".github/scripts/publish.mjs",
  content: readLocal(".github/scripts/publish.mjs"),
  msg: "feat(publish): add publish.mjs deploy script",
})

// 5. GitHub Action workflow
files.push({
  remote: ".github/workflows/publish-aula.yml",
  content: readLocal(".github/workflows/publish-aula.yml"),
  msg: "feat(publish): add publish-aula GitHub Action",
})

// 6. meta.yaml — blank template stub (NOT aula-04 content)
files.push({
  remote: "meta.yaml",
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
  msg: "feat(schema): add meta.yaml stub",
})

// 7. exercicios.md — blank template stub (schema documentation only)
files.push({
  remote: "exercicios.md",
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
  msg: "feat(schema): add exercicios.md stub",
})

// 8. tarefa.md — blank template stub
files.push({
  remote: "tarefa.md",
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
  msg: "feat(schema): add tarefa.md stub",
})

// 9. package.json — add the publish script
const pkgRaw = JSON.parse(
  execSync(`gh api repos/${OWNER}/${REPO}/contents/package.json --jq '.content'`, {
    encoding: "utf-8",
  }).trim()
    .split("\n")
    .map((l) => Buffer.from(l, "base64").toString("utf-8"))
    .join("") ||
  execSync(`gh api "repos/${OWNER}/${REPO}/contents/package.json" --jq '.content | @base64d'`, {
    encoding: "utf-8",
  })
)

if (!pkgRaw.scripts?.publish) {
  pkgRaw.scripts.build  = "slidev build slides.md --out dist"
  pkgRaw.scripts.publish = "npm run build && node .github/scripts/publish.mjs"
  files.push({
    remote: "package.json",
    content: JSON.stringify(pkgRaw, null, 2) + "\n",
    msg: "feat(publish): add build --out dist and publish script to package.json",
  })
} else {
  console.log(`  ${YELLOW}~${RESET} Skipped: package.json already has publish script`)
}

// ─── execute ─────────────────────────────────────────────────────────────────

console.log(`\n🚀 Syncing infrastructure to ${OWNER}/${REPO}\n`)

for (const { remote, content, msg } of files) {
  try {
    push(remote, content, msg)
  } catch (err) {
    console.error(`  ${RED}✗${RESET} Failed: ${remote}`)
    console.error("   ", err.stderr?.trim() || err.message)
    process.exit(1)
  }
}

console.log(`\n✅ Done. ${files.length} files synced.`)
console.log(`   https://github.com/${OWNER}/${REPO}\n`)
