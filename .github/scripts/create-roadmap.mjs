#!/usr/bin/env node
/**
 * create-roadmap.mjs
 * Cria milestones, labels e issues do roadmap no senac-tec-ia/neural-slides-template
 * via gh CLI. Issues já executados hoje são criados e imediatamente fechados.
 *
 * Usage: node .github/scripts/create-roadmap.mjs
 */

import { execSync } from "child_process"

const OWNER = "senac-tec-ia"
const REPO  = "neural-slides-template"
const R     = `${OWNER}/${REPO}`

const GREEN  = "\x1b[32m"
const YELLOW = "\x1b[33m"
const CYAN   = "\x1b[36m"
const RESET  = "\x1b[0m"

function gh(args, input) {
  return execSync(`gh ${args}`, {
    encoding: "utf-8",
    stdio: ["pipe", "pipe", "pipe"],
    input,
  }).trim()
}

function log(icon, msg) { console.log(`  ${icon} ${msg}`) }

// ── Labels ────────────────────────────────────────────────────────────────────
const LABELS = [
  { name: "agents",   color: "0075ca", description: "Copilot instructions, skills, UC memory files" },
  { name: "cli",      color: "2ea44f", description: "course new / publish / refine CLI" },
  { name: "platform", color: "8250df", description: "Nuxt 4 course-platform for students" },
  { name: "infra",    color: "e4612f", description: "GitHub Actions, scripts, repo setup" },
  { name: "content",  color: "f9c513", description: "Slide content, exercises, tasks" },
]

// ── Milestones ────────────────────────────────────────────────────────────────
const MILESTONES = [
  { title: "Sprint 1 — Template + Agents",  description: "Infra base, copilot instructions, sub-agents, UC memory files" },
  { title: "Sprint 2 — CLI + Repos",        description: "course-infra CLI, course-lessons monorepo, course new/publish/refine" },
  { title: "Sprint 3 — Platform",           description: "Nuxt 4 + NuxtHub, auth, exercicios Monaco+Pyodide, dashboard" },
]

// ── Issues ────────────────────────────────────────────────────────────────────
// done: true = create and immediately close (already implemented)
const ISSUES = [
  // ── Sprint 1 ──────────────────────────────────────────────────────────────
  {
    milestone: "Sprint 1 — Template + Agents",
    labels: ["infra", "agents"],
    title: "[S1-T01] copilot-instructions.md — Orchestrator",
    body: `## Objetivo
Criar \`.github/copilot-instructions.md\` com a instrução mestre condensada do Copilot agent mode.

## Critérios de aceite
- [ ] Arquivo presente em \`.github/copilot-instructions.md\`
- [ ] Define routing para \`@slidev-senac\` e \`@verificador-estrutura-aula\`
- [ ] Lista arquivos de contexto por UC
- [ ] 8 regras invioláveis documentadas (pt-BR, T→E→D→TC, densidadade, etc.)
- [ ] Máximo 150 linhas

## Arquivos tocados
- \`.github/copilot-instructions.md\` (CREATE)`,
    done: true,
  },
  {
    milestone: "Sprint 1 — Template + Agents",
    labels: ["infra"],
    title: "[S1-T02] meta.yaml stub",
    body: `## Objetivo
Criar \`meta.yaml\` na raiz do template com todos os campos necessários.

## Critérios de aceite
- [ ] Campos: \`aula\`, \`slug\`, \`title\`, \`author\`, \`courseTitle\`, \`disciplines\`, \`date\`, \`status\`, \`deployUrl\`, \`slideCount\`, \`agentsUsed\`
- [ ] \`status\` padrão: \`draft\`
- [ ] \`deployUrl\` vazio (preenchido pelo publish)

## Arquivos tocados
- \`meta.yaml\` (CREATE)`,
    done: true,
  },
  {
    milestone: "Sprint 1 — Template + Agents",
    labels: ["content"],
    title: "[S1-T03] exercicios.md stub com schema de frontmatter",
    body: `## Objetivo
Criar \`exercicios.md\` com documentação do schema YAML por exercício.

## Critérios de aceite
- [ ] Schema documentado: \`id\`, \`aula\`, \`uc\`, \`tipo\`, \`nivel\`, \`titulo\`, \`pontuacao\`, \`dupla\`, \`testes\`
- [ ] Comentários explicando nível 1→4
- [ ] Placeholder indicando onde inserir exercícios

## Arquivos tocados
- \`exercicios.md\` (CREATE)`,
    done: true,
  },
  {
    milestone: "Sprint 1 — Template + Agents",
    labels: ["content"],
    title: "[S1-T04] tarefa.md stub com frontmatter",
    body: `## Objetivo
Criar \`tarefa.md\` com schema de frontmatter e estrutura padrão.

## Critérios de aceite
- [ ] Campos de frontmatter: \`aula\`, \`titulo\`, \`prazo\`, \`pontuacao_maxima\`, \`entrega\`, \`nome_arquivo\`
- [ ] Seções: Objetivo, Descrição, Código Starter, Critérios
- [ ] \`nome_arquivo\` com padrão snake_case documentado

## Arquivos tocados
- \`tarefa.md\` (CREATE)`,
    done: true,
  },
  {
    milestone: "Sprint 1 — Template + Agents",
    labels: ["infra"],
    title: "[S1-T05] publish.mjs — script de build + deploy",
    body: `## Objetivo
Criar \`.github/scripts/publish.mjs\` invocado por \`npm run publish\`.

## Critérios de aceite
- [ ] Valida \`status != draft\` antes de prosseguir
- [ ] Roda \`wrangler pages deploy dist/ --project-name {slug}\`
- [ ] Captura URL do deploy e escreve em \`meta.yaml\`
- [ ] Faz commit + tag \`v1.0.0\` + push
- [ ] Mensagens de erro claras em caso de falha

## Arquivos tocados
- \`.github/scripts/publish.mjs\` (CREATE)
- \`package.json\` (UPDATE: adicionar script \`publish\` e \`build --out dist\`)`,
    done: true,
  },
  {
    milestone: "Sprint 1 — Template + Agents",
    labels: ["infra"],
    title: "[S1-T06] publish-aula.yml — GitHub Action sync to platform",
    body: `## Objetivo
Criar \`.github/workflows/publish-aula.yml\` disparado no push de tag \`v*\`.

## Critérios de aceite
- [ ] Lê \`meta.yaml\` sem dependências externas (sed/grep puro)
- [ ] Aborta se \`status != published\`
- [ ] Usa \`actions/github-script\` para criar/atualizar arquivos em \`senac-tec-ia/course-platform/content/aulas/{slug}/\`
- [ ] Faz upsert: detecta SHA se arquivo existe, cria se não existe
- [ ] Gera job summary com URL do deploy
- [ ] Requer secret \`PLATFORM_REPO_TOKEN\` (PAT com escopo repo)

## Arquivos tocados
- \`.github/workflows/publish-aula.yml\` (CREATE)`,
    done: true,
  },
  {
    milestone: "Sprint 1 — Template + Agents",
    labels: ["infra", "agents"],
    title: "[S1-T07] sync-to-template.mjs — mecanismo course refine",
    body: `## Objetivo
Criar \`.github/scripts/sync-to-template.mjs\` que empurra arquivos de infraestrutura
de uma aula para o \`senac-tec-ia/neural-slides-template\` via GitHub API.

## Critérios de aceite
- [ ] Empurra: copilot-instructions, agents/*.md, scripts/*.mjs, workflows/*.yml, stubs
- [ ] Stubs empurrados são **vazios** (não conteúdo da aula atual)
- [ ] Usa upsert: detecta SHA antes de PUT
- [ ] Zero dependências além do \`gh\` CLI autenticado
- [ ] Roda de qualquer diretório de aula

## Arquivos tocados
- \`.github/scripts/sync-to-template.mjs\` (CREATE)`,
    done: true,
  },
  {
    milestone: "Sprint 1 — Template + Agents",
    labels: ["agents"],
    title: "[S1-T08] UC context files — fundamentos e python (estado aula-04)",
    body: `## Objetivo
Sincronizar os arquivos de memória de UC com o estado do curso após a aula-04.

## Critérios de aceite
- [ ] \`contexto-fundamentos-de-computacao.md\` reflete aulas 01–04
- [ ] \`contexto-python-para-ia.md\` reflete pré-requisitos cobertos em Fundamentos
- [ ] Campo "Recomendações" aponta para loops como próximo conteúdo
- [ ] Feedback de campo documentado

## Arquivos tocados
- \`.github/agents/contexto-fundamentos-de-computacao.md\` (CREATE)
- \`.github/agents/contexto-python-para-ia.md\` (CREATE)`,
    done: true,
  },
  {
    milestone: "Sprint 1 — Template + Agents",
    labels: ["agents"],
    title: "[S1-T09] Sub-agent skill files (01-planner → 06-validator)",
    body: `## Objetivo
Criar os 6 arquivos de skill em \`.github/agents/skills/\` — um por sub-agente do pipeline editorial.

## Sub-agentes a criar

### \`01-planner.md\`
- **Input:** \`topic\`, \`uc\`, \`aula_num\`, contexto UC
- **Output:** estrutura de seções com tags, contagem de slides por tipo, ordem dos blocos
- **Regras:** mín. 3 \`[EXERCICIO]\` por aula técnica, máx. 15 slides por seção, obrigatório 1 \`[DEBATE]\` e 1 \`[TAREFA DE CASA]\`

### \`02-researcher.md\`
- **Input:** \`topic\`, \`uc\`
- **Output:** 3–5 referências com fonte, trecho relevante e aplicação pedagógica
- **Regras:** priorizar documentação oficial (MDN, docs.python.org), livros técnicos, papers; contextualizar sempre em IA/dados

### \`03-writer.md\`
- **Input:** plano aprovado do planner + referências do researcher
- **Output:** \`slides.md\` válido para Slidev com todos os 11 layouts, \`bgPreset\`, \`v-click\`
- **Regras:** NUNCA criar exercícios aqui — apenas \`<Exercise id="ex-01"/>\` como placeholder; máx. 2 slides \`[TEORIA]\` consecutivos

### \`04-exercise-builder.md\`
- **Input:** \`slides.md\` do writer + contexto UC
- **Output:** \`exercicios.md\` com progressão rígida nível 1→4
- **Regras:** nível 1=compreensão, 2=aplicação guiada, 3=independente, 4=desafio; sempre código starter; testes no frontmatter; contexto de IA/dados obrigatório

### \`05-reviewer.md\`
- **Input:** \`slides.md\` + \`exercicios.md\` gerados
- **Output:** lista de issues por número de slide (densidade, progressão, exemplos ausentes)
- **Regras:** slide com >5 bullets = issue; conceito sem exemplo = issue; exercício sem starter = issue

### \`06-validator.md\`
- **Input:** \`exercicios.md\` + \`slides.md\`
- **Output:** confirmação de correctness ou lista de erros técnicos
- **Regras:** executar mentalmente todo bloco de código; verificar sintaxe Python; confirmar que outputs esperados nos \`testes\` batem com a solução

## Critérios de aceite
- [ ] 6 arquivos criados em \`.github/agents/skills/\`
- [ ] Cada arquivo tem: seção Input, Output, Regras, Exemplo de prompt de invocação
- [ ] Linguagem: inglês (são instruções para o agente, não conteúdo de slide)
- [ ] Cada arquivo referenciável via \`#file:.github/agents/skills/XX.md\` no Copilot

## Arquivos tocados
- \`.github/agents/skills/01-planner.md\` (CREATE)
- \`.github/agents/skills/02-researcher.md\` (CREATE)
- \`.github/agents/skills/03-writer.md\` (CREATE)
- \`.github/agents/skills/04-exercise-builder.md\` (CREATE)
- \`.github/agents/skills/05-reviewer.md\` (CREATE)
- \`.github/agents/skills/06-validator.md\` (CREATE)`,
    done: false,
  },
  {
    milestone: "Sprint 1 — Template + Agents",
    labels: ["agents"],
    title: "[S1-T10] UC context stubs para 7 UCs restantes (UC01, UC04–UC09)",
    body: `## Objetivo
Criar os 7 arquivos de contexto UC faltantes com o estado inicial (zero aulas ministradas).

## UCs a criar

| UC | Arquivo | Disciplina |
|---|---|---|
| UC01 | \`contexto-ingles-tecnico.md\` | Inglês Técnico |
| UC04 | \`contexto-fundamentos-e-conceitos-de-ia.md\` | Fundamentos e Conceitos de IA |
| UC05 | \`contexto-computacao-nuvem-e-gpu.md\` | Computação em Nuvem e GPU |
| UC06 | \`contexto-matematica-para-ia.md\` | Matemática para IA |
| UC07 | \`contexto-etica-em-ia.md\` | Ética em IA e Sociedade |
| UC08 | \`contexto-visao-computacional.md\` | Visão Computacional |
| UC09 | \`contexto-nlp-e-llms.md\` | NLP e LLMs |

## Para cada arquivo, incluir
- Carga horária e estrutura (2 blocos × 3 aulas)
- Tabela de aulas (todas como ⏳ Pendente)
- Seção "Conexões com Outras Disciplinas" pré-preenchida
- Seção "Recomendações para o Primeiro Encontro"
- Para UC01 (Inglês Técnico): incluir vocabulário já coberto nas aulas 01–04 de Fundamentos (os termos introduzidos como pontapé)

## Critérios de aceite
- [ ] 7 arquivos criados em \`.github/agents/\`
- [ ] Todos seguem o schema definido em \`slidev-senac.agent.md § 10\`
- [ ] UC01 já lista vocabulário técnico coberto em Fundamentos aulas 01–02
- [ ] Sincronizados para \`senac-tec-ia/neural-slides-template\` via \`sync-to-template.mjs\`

## Arquivos tocados
- \`.github/agents/contexto-ingles-tecnico.md\` (CREATE)
- \`.github/agents/contexto-fundamentos-e-conceitos-de-ia.md\` (CREATE)
- \`.github/agents/contexto-computacao-nuvem-e-gpu.md\` (CREATE)
- \`.github/agents/contexto-matematica-para-ia.md\` (CREATE)
- \`.github/agents/contexto-etica-em-ia.md\` (CREATE)
- \`.github/agents/contexto-visao-computacional.md\` (CREATE)
- \`.github/agents/contexto-nlp-e-llms.md\` (CREATE)`,
    done: false,
  },

  // ── Sprint 2 ──────────────────────────────────────────────────────────────
  {
    milestone: "Sprint 2 — CLI + Repos",
    labels: ["cli", "infra"],
    title: "[S2-T01] Criar repo course-infra + scaffold CLI Commander",
    body: `## Objetivo
Criar o repo \`senac-tec-ia/course-infra\` e fazer o scaffold do CLI \`neural-slides-cli\`.

## Estrutura alvo
\`\`\`
course-infra/
├── cli/
│   ├── src/
│   │   ├── commands/
│   │   │   ├── new.ts
│   │   │   ├── publish.ts
│   │   │   └── refine.ts
│   │   ├── lib/
│   │   │   ├── github.ts      # wrapper Octokit
│   │   │   └── config.ts      # lê ~/.neural-slides/config.json
│   │   └── index.ts           # Commander entry point
│   ├── package.json
│   └── tsconfig.json
└── README.md
\`\`\`

## Critérios de aceite
- [ ] Repo criado em \`senac-tec-ia/course-infra\` (public ou private)
- [ ] \`package.json\` com name \`neural-slides-cli\`, bin \`course\`
- [ ] Commander instalado, \`course --help\` exibe os 3 comandos
- [ ] \`course init\` cria \`~/.neural-slides/config.json\` pedindo \`githubToken\` e \`org\`
- [ ] TypeScript compilando sem erros

## Pré-requisitos
- nenhum (primeiro item do Sprint 2)

## Comandos para criar o repo
\`\`\`bash
gh repo create senac-tec-ia/course-infra --private --description "CLI para criação e publicação de aulas Neural Slides"
\`\`\``,
    done: false,
  },
  {
    milestone: "Sprint 2 — CLI + Repos",
    labels: ["cli"],
    title: "[S2-T02] `course new` — GitHub Template API + clone + submodule",
    body: `## Objetivo
Implementar o comando \`course new <slug>\` que cria uma nova aula do template.

## Fluxo
1. Lê \`~/.neural-slides/config.json\` (\`githubToken\`, \`org\`)
2. \`POST /repos/senac-tec-ia/neural-slides-template/generate\` → cria \`senac-tec-ia/{slug}\`
3. \`git clone\` local em \`./{slug}\`
4. Injeta \`aula\` e \`slug\` em \`meta.yaml\` e no frontmatter global de \`slides.md\`
5. Adiciona submodule em \`course-lessons\`: \`git submodule add ... {slug}\`
6. Commit em \`course-lessons\`: \`chore: add {slug} submodule\`
7. Abre VS Code com \`code ./{slug}\`

## Critérios de aceite
- [ ] \`course new aula-05-loops\` cria repo em \`senac-tec-ia/aula-05-loops\`
- [ ] Clone local contém todos os arquivos do template (\`.github/\`, layouts, etc.)
- [ ] \`meta.yaml\` tem \`aula: 5\` e \`slug: "05-loops"\` pré-preenchidos
- [ ] Submodule registrado em \`course-lessons\`
- [ ] VS Code abre na pasta da nova aula

## Pré-requisitos
- S2-T01 (CLI scaffold)`,
    done: false,
  },
  {
    milestone: "Sprint 2 — CLI + Repos",
    labels: ["cli"],
    title: "[S2-T03] `course publish` — wrapper para npm run publish",
    body: `## Objetivo
Implementar \`course publish [slug]\` que dispara o publish da aula.

## Fluxo
1. Se \`slug\` não fornecido, detecta pelo \`package.json\` no cwd
2. Valida que \`meta.yaml\` tem \`status: ready\` ou \`published\`
3. Roda \`npm run publish\` no diretório da aula
4. Atualiza submodule pointer em \`course-lessons\` para o novo commit
5. Exibe URL final do deploy

## Critérios de aceite
- [ ] \`course publish\` no diretório da aula roda o pipeline completo
- [ ] Erro claro se \`status: draft\`
- [ ] Submodule em \`course-lessons\` atualizado após publicação
- [ ] URL de deploy exibida no terminal

## Pré-requisitos
- S2-T01, S2-T02`,
    done: false,
  },
  {
    milestone: "Sprint 2 — CLI + Repos",
    labels: ["cli", "agents"],
    title: "[S2-T04] `course refine` — sync infra + UC context ao template",
    body: `## Objetivo
Implementar \`course refine\` que empurra infraestrutura e memória UC atualizada de volta ao template.

## Fluxo
1. Roda \`node .github/scripts/sync-to-template.mjs\`
2. Cria uma tarefa de revisão: lista o diff dos arquivos \`.github/agents/contexto-*.md\` modificados
3. Abre PR (não commit direto) no \`neural-slides-template\` com as alterações

## Critérios de aceite
- [ ] \`course refine\` empurra agents + skills + context files ao template
- [ ] Cria PR (não commit direto) para revisão consciente
- [ ] Lista no terminal quais context files foram alterados e o diff resumido
- [ ] PR tem título padronizado: \`refine(agents): pós aula-{N} — {slug}\`

## Pré-requisitos
- S2-T01, S1-T07`,
    done: false,
  },
  {
    milestone: "Sprint 2 — CLI + Repos",
    labels: ["infra"],
    title: "[S2-T05] Criar course-lessons + add aula-04 como submodule",
    body: `## Objetivo
Criar o repo \`senac-tec-ia/course-lessons\` e registrar a aula-04 como primeiro submodule.

## Estrutura alvo
\`\`\`
course-lessons/
├── .gitmodules
├── aula-04-conceitos-de-ia/   → submodule → LeoZanini/aula-04-conceitos-de-ia
└── scripts/
    └── update-all.sh          → git submodule update --remote --merge
\`\`\`

## Critérios de aceite
- [ ] Repo \`senac-tec-ia/course-lessons\` criado
- [ ] Submodule \`aula-04-conceitos-de-ia\` apontando para \`LeoZanini/aula-04-conceitos-de-ia@master\`
- [ ] \`.gitmodules\` commitado
- [ ] \`scripts/update-all.sh\` criado e executável

## Comandos
\`\`\`bash
gh repo create senac-tec-ia/course-lessons --private
git submodule add https://github.com/LeoZanini/aula-04-conceitos-de-ia aula-04-conceitos-de-ia
\`\`\`

## Pré-requisitos
- nenhum (independente do CLI)`,
    done: false,
  },

  // ── Sprint 3 ──────────────────────────────────────────────────────────────
  {
    milestone: "Sprint 3 — Platform",
    labels: ["platform", "infra"],
    title: "[S3-T01] Scaffold Nuxt 4 + NuxtHub + D1 schema",
    body: `## Objetivo
Criar o repo \`senac-tec-ia/course-platform\` com Nuxt 4 + NuxtHub configurado.

## Stack
- Nuxt 4 + \`@nuxthub/core\`
- \`@nuxt/content\` v3 para ingestão dos \`.md\` das aulas
- Cloudflare D1 via NuxtHub binding
- Cloudflare KV para sessões

## D1 Schema
\`\`\`sql
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  nome TEXT NOT NULL,
  turma TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE aulas_liberadas (
  aula_num INTEGER PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  titulo TEXT NOT NULL,
  deploy_url TEXT,
  liberada_em DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE exercicio_tentativas (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  ex_id TEXT NOT NULL,
  aula_num INTEGER NOT NULL,
  codigo TEXT,
  passou INTEGER DEFAULT 0,
  pts INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tarefas_entregas (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  aula_num INTEGER NOT NULL,
  conteudo TEXT,
  status TEXT DEFAULT 'pendente',
  pts INTEGER,
  feedback TEXT,
  entregue_em DATETIME DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

## Critérios de aceite
- [ ] Repo \`senac-tec-ia/course-platform\` criado
- [ ] \`npx nuxi init\` com template NuxtHub
- [ ] \`hub.config.ts\` com bindings D1 e KV
- [ ] Migrations D1 em \`server/database/migrations/0001_init.sql\`
- [ ] \`content/aulas/\` diretório criado com \`04-conceitos-de-ia/\` de exemplo
- [ ] \`npm run dev\` sobe sem erros`,
    done: false,
  },
  {
    milestone: "Sprint 3 — Platform",
    labels: ["platform"],
    title: "[S3-T02] Rota `/` — listagem de aulas publicadas",
    body: `## Objetivo
Página inicial que lista aulas com \`status: published\` (lidas de \`aulas_liberadas\` no D1).

## Critérios de aceite
- [ ] Listagem em cards: número, título, data, link para \`/aulas/[slug]\`
- [ ] Aulas ordenadas por \`aula_num\`
- [ ] Cards mostram se o aluno já completou os exercícios (query D1 por user_id)
- [ ] Loading state enquanto busca
- [ ] Design usa paleta Neural Slides (slate-900 bg, green accent)

## Pré-requisitos
- S3-T01`,
    done: false,
  },
  {
    milestone: "Sprint 3 — Platform",
    labels: ["platform"],
    title: "[S3-T03] Rota `/aulas/[slug]` — iframe do Slidev deploy",
    body: `## Objetivo
Página que exibe os slides da aula em iframe apontando para o deploy no Cloudflare Pages.

## Critérios de aceite
- [ ] \`deployUrl\` lido de \`content/aulas/[slug]/meta.yaml\` via \`@nuxt/content\`
- [ ] \`<iframe src="{deployUrl}" />\` responsivo, fullscreen
- [ ] Header com breadcrumb: Início > Aula N > Slides
- [ ] Links para Exercícios e Tarefa na mesma página
- [ ] Fallback se \`deployUrl\` vazio: mensagem "Slides em breve"

## Pré-requisitos
- S3-T01`,
    done: false,
  },
  {
    milestone: "Sprint 3 — Platform",
    labels: ["platform"],
    title: "[S3-T04] Rota `/aulas/[slug]/exercicios` — Monaco + Pyodide",
    body: `## Objetivo
Ambiente de exercícios com editor de código Python e execução no browser via Pyodide.

## Stack
- \`@guolao/vue-monaco-editor\` — editor Monaco
- Pyodide (WebAssembly Python 3.11) carregado via CDN e cacheado no SW

## Fluxo por exercício
1. Carrega \`exercicios.md\` via \`@nuxt/content\` — lê frontmatter YAML
2. Exibe enunciado + código starter no Monaco
3. Botão "Executar": roda código + testes via Pyodide no browser
4. Resultado: ✅ passou / ❌ falhou com diff esperado vs obtido
5. \`POST /api/tentativas\` salva resultado no D1

## Critérios de aceite
- [ ] Monaco abre com linguagem Python, tema escuro (slate-900)
- [ ] Pyodide executa sem backend (100% browser)
- [ ] Testes do frontmatter rodam automaticamente após "Executar"
- [ ] Resultado salvo no D1 via \`/api/tentativas\`
- [ ] Progresso por exercício persistido (aluno vê o que já passou)
- [ ] Exercícios exibidos em ordem de nível (1→4)

## Pré-requisitos
- S3-T01, S3-T05 (auth)`,
    done: false,
  },
  {
    milestone: "Sprint 3 — Platform",
    labels: ["platform"],
    title: "[S3-T05] Auth Google + sessão KV (nuxt-auth-utils)",
    body: `## Objetivo
Autenticação OAuth Google com sessão armazenada no Cloudflare KV via NuxtHub.

## Critérios de aceite
- [ ] \`nuxt-auth-utils\` instalado e configurado
- [ ] OAuth Google funcional (redirect → callback → sessão)
- [ ] Sessão persiste no KV binding do NuxtHub
- [ ] Middleware protege \`/aulas/*\` — redireciona para \`/login\` se não autenticado
- [ ] Primeiro login cria registro em \`users\` no D1
- [ ] Dados mínimos: \`email\`, \`nome\` (do Google profile)

## Secrets necessários
- \`NUXT_OAUTH_GOOGLE_CLIENT_ID\`
- \`NUXT_OAUTH_GOOGLE_CLIENT_SECRET\`
- \`NUXT_SESSION_PASSWORD\` (32+ chars)

## Pré-requisitos
- S3-T01`,
    done: false,
  },
  {
    milestone: "Sprint 3 — Platform",
    labels: ["platform"],
    title: "[S3-T06] Dashboard `/dashboard` — visão professor",
    body: `## Objetivo
Painel do professor com progresso de todos os alunos por aula.

## Views necessárias
1. **Visão geral:** tabela \`aluno × aula\` com % de exercícios completados
2. **Por aula:** lista de alunos com status de cada exercício (passou/falhou/não tentou)
3. **Por aluno:** histórico completo com código das tentativas e pontuação total
4. **Tarefas:** lista de entregas com status (pendente / entregue / avaliado)

## Critérios de aceite
- [ ] Rota \`/dashboard\` protegida por role \`professor\` (campo em \`users\`)
- [ ] Query D1 agregando \`exercicio_tentativas\` por aluno e aula
- [ ] Tabela exportável para CSV (botão "Exportar")
- [ ] Filtro por turma
- [ ] Feedback de tarefa pode ser escrito inline e salvo (\`PATCH /api/tarefas/[id]\`)

## Pré-requisitos
- S3-T01, S3-T04, S3-T05`,
    done: false,
  },
]

// ── main ──────────────────────────────────────────────────────────────────────

console.log(`\n${CYAN}🗺  Neural Slides Roadmap Setup${RESET}`)
console.log(`   Repo: ${OWNER}/${REPO}\n`)

// 1. Labels
console.log(`${CYAN}── Labels${RESET}`)
for (const label of LABELS) {
  try {
    gh(`label create "${label.name}" --repo ${R} --color "${label.color}" --description "${label.description}" --force`)
    log(`${GREEN}✓${RESET}`, `Label: ${label.name}`)
  } catch {
    log(`${YELLOW}~${RESET}`, `Label exists: ${label.name}`)
  }
}

// 2. Milestones — capture numbers
console.log(`\n${CYAN}── Milestones${RESET}`)
const milestoneNums = {}
for (const ms of MILESTONES) {
  try {
    const out = gh(
      `api repos/${R}/milestones --method POST --field title="${ms.title}" --field description="${ms.description}" --jq .number`
    )
    milestoneNums[ms.title] = out.trim()
    log(`${GREEN}✓${RESET}`, `Milestone #${milestoneNums[ms.title]}: ${ms.title}`)
  } catch (err) {
    // already exists — get number
    const list = JSON.parse(gh(`api repos/${R}/milestones --jq "[.[] | {title,number}]"`))
    const found = list.find((m) => m.title === ms.title)
    if (found) {
      milestoneNums[ms.title] = String(found.number)
      log(`${YELLOW}~${RESET}`, `Milestone exists #${found.number}: ${ms.title}`)
    }
  }
}

// 3. Issues
console.log(`\n${CYAN}── Issues${RESET}`)
for (const issue of ISSUES) {
  const msNum = milestoneNums[issue.milestone]
  const labelArg = issue.labels.map((l) => `--label "${l}"`).join(" ")
  const bodyEscaped = issue.body.replace(/'/g, `'"'"'`)

  // Create issue
  let issueNum
  try {
    const out = gh(
      `issue create --repo ${R} --title '${issue.title.replace(/'/g, `'"'"'`)}' --body '${bodyEscaped}' ${labelArg} --milestone "${issue.milestone}"`
    )
    issueNum = out.match(/#(\d+)/)?.[1] || out.split("/").pop()?.trim()
    log(`${GREEN}✓${RESET}`, `#${issueNum} ${issue.title}`)
  } catch (err) {
    log(`${YELLOW}!${RESET}`, `Failed to create: ${issue.title}`)
    console.error("   ", err.stderr?.slice(0, 120) || err.message?.slice(0, 120))
    continue
  }

  // Close if done
  if (issue.done && issueNum) {
    try {
      gh(`issue close ${issueNum} --repo ${R} --comment "✅ Implemented on 2026-03-10 in LeoZanini/aula-04-conceitos-de-ia and synced to template."`)
      log(`${GREEN}✓${RESET}`, `  closed #${issueNum} (already done)`)
    } catch {
      log(`${YELLOW}~${RESET}`, `  could not close #${issueNum}`)
    }
  }
}

console.log(`\n${GREEN}✅ Roadmap created!${RESET}`)
console.log(`   https://github.com/${OWNER}/${REPO}/issues\n`)
console.log(`${CYAN}Next open tasks:${RESET}`)
console.log(`   gh issue list --repo ${R} --state open --milestone "Sprint 1 — Template + Agents"`)
