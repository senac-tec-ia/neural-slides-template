# Fluxo de Produção de Aula — Técnico em IA (Senac)

Guia operacional para gerar uma aula completa usando o sistema de agentes Neural Slides. Abra este arquivo sempre que quiser relembrar o fluxo ou reabrir uma sessão.

**Última revisão:** 2026-03-11

---

## Índice

1. [Visão geral do sistema de agentes](#1-visão-geral-do-sistema-de-agentes)
2. [Workflow passo a passo](#2-workflow-passo-a-passo)
3. [O Handoff Card](#3-o-handoff-card--contrato-entre-camadas)
4. [Quando usar qual agente](#4-quando-usar-qual-agente)
5. [Naming convention](#5-naming-convention)
6. [Troubleshooting rápido](#6-troubleshooting-rápido)
7. [Checklist de publicação](#7-checklist-de-publicação)

---

## 1. Visão geral do sistema de agentes

```
USUÁRIO
   │
   ▼
@slidev-senac (coordenador)
   │  lê PROJETO-AULAS-1-TRIMESTRE.md + contexto-*.md
   │
   ├── @orquestrador-1ano
   │       "Qual a composição de A05?" → calendário + HA restante
   │
   ├── @d01 a @d09 (especialistas por disciplina)
   │       "O que ensinar nessa disciplina em A05?" → Handoff Card
   │
   ├── @slidev-writer
   │       Handoff Card(s) → estrutura-aula.md → (aprovação) → slides.md
   │
   ├── @exercise-builder
   │       Handoff Card(s) → exercicios.md + tarefa.md
   │
   └── @verificador-estrutura-aula
           slides.md → auditoria T→E→D→TC → correge se necessário
```

### Responsabilidade de cada agente

| Agente | Produz | NÃO produz |
|---|---|---|
| `@slidev-senac` | Coordena o fluxo completo | nada diretamente |
| `@orquestrador-1ano` | Composição do dia (HA por disciplina) | slides |
| `@d01` a `@d09` | Handoff Card da sua disciplina | slides, exercícios |
| `@slidev-writer` | slides.md ([TEORIA][DEBATE][DINAMICA]) | exercicios.md |
| `@exercise-builder` | exercicios.md + tarefa.md | slides.md |
| `@verificador-estrutura-aula` | audit + correção estrutural | conteúdo novo |

---

## 2. Workflow passo a passo

### Antes de começar: clonar o template

```bash
# Clone o template com o nome da aula
git clone https://github.com/senac-tec-ia/neural-slides-template A05-python-loops
cd A05-python-loops
npm install

# Abra no VS Code
code .
```

### Passo 1 — Calcular composição do dia

```
@orquestrador-1ano
"Calcule a composição para A05 (12/03/2026, quinta-feira)"
```

O orquestrador retorna: quais disciplinas + quantos HA cada uma, com justificativa de urgência.

### Passo 2 — Gerar Handoff Cards por disciplina

Para cada disciplina na composição, invocar o agente correspondente:

```
@d05-uc03-python-para-ia
"Gere o Handoff Card para A05 com base no contexto atual"

@d07-uc05-transformacao-digital
"Gere o Handoff Card para A05 com base no contexto atual"

@d02-uc01-ingles-instrumental
"Gere o Handoff Card para A05 com base no contexto atual"
```

Cada agente lê seu `contexto-*.md` e devolve um Handoff Card com: consolidado, o que ensinar hoje, exercícios N1→N4, cross-refs.

### Passo 3 — Gerar estrutura da aula (writer)

```
@slidev-writer
"Gere a estrutura-aula.md para A05 com os seguintes Handoff Cards:
[colar Handoff Cards aqui]"
```

O writer produz `estrutura-aula.md` e **aguarda aprovação antes de tocar slides.md**.

### Passo 4 — Aprovar ou ajustar a estrutura

Revisar `estrutura-aula.md`. Confirmar com:

```
"Aprovado. Pode gerar os slides."
```

Ou ajustar: `"Mude o slide 8 de [TEORIA] para [DEBATE]. Pode continuar."` 

### Passo 5 — Gerar slides.md

O writer executa e preenche `slides.md` conforme a estrutura aprovada.

### Passo 6 — Gerar exercicios.md e tarefa.md

```
@exercise-builder
"Gere os exercícios para A05 com os seguintes Handoff Cards:
[colar Handoff Cards aqui]"
```

### Passo 7 — Validar estrutura final

```
@verificador-estrutura-aula
"Valide A05 — verifique T→E→D→TC e tags"
```

Se encontrar violações, o verificador corrige automaticamente e loga as alterações no final do `estrutura-aula.md`.

### Passo 8 — Commit e sync

```bash
# Atualizar meta.yaml com status: ready
# Depois:
git add .
git commit -m "feat(A05): lesson content — Python loops + Transformação Digital"

# Sync para o template (apenas se houver mudanças em arquivos de infraestrutura):
# node .github/scripts/sync-to-template.mjs
```

---

## 3. O Handoff Card — contrato entre camadas

O Handoff Card é o **output de cada agente disciplinar** e o **input de `@slidev-writer` e `@exercise-builder`**. É a peça que conecta "o que o aluno já sabe" com "o que deve ser ensinado hoje".

### Formato completo

```markdown
## Handoff Card: [CÓDIGO] / [AULA] / [N HA]
**Disciplina:** [nome completo]
**Indicadores cobertos:** T[N]-Ind.[N]
**Posição no bloco:** Bloco [N] ([primeiros/últimos] [N] HA do dia)

### Consolidado (NÃO reintroduzir)
- [conceito 1]
- [conceito 2]

### Ensinar hoje
1. [tópico] — contexto: [exemplo com IA/dados]
2. [tópico] — contexto: [exemplo com IA/dados]
3. [tópico] — contexto: [exemplo com IA/dados]

### Exercícios N1 a N4
- N1 (reconhecimento): [descrição]
- N2 (execução guiada): [descrição]
- N3 (independente): [descrição]
- N4 (desafio): [descrição]

### Cross-ref
- [D0X]: [conceito que conecta] — [observação]

### aulaNum: "Aula NN"
```

### Exemplo real (D05 / A05)

```markdown
## Handoff Card: D05-UC03 / A05 / 3 HA
**Disciplina:** Desenvolvimento em Linguagem Python
**Indicadores cobertos:** T1-Ind.1
**Posição no bloco:** Bloco 1 (primeiros 3 HA do dia)

### Consolidado (NÃO reintroduzir)
- variáveis, tipos (int, str, float, bool), print, input
- operadores aritméticos e de comparação
- if/elif/else, def/return

### Ensinar hoje
1. for com range() — contexto: iterar epochs de treino de um modelo
2. for com enumerate() — contexto: listar tokens com seus índices
3. while — contexto: retry em chamada de API de IA
4. break, continue — contexto: filtrar tokens inválidos num dataset

### Exercícios N1 a N4
- N1: identificar a saída de um for simples com range(5)
- N2: contar tokens em uma lista usando for (starter code dado)
- N3: implementar retry com while para chamada de API (independente)
- N4: processar dataset com for + validação de tipo + break (desafio)

### Cross-ref
- D02-UC01: loop, iterate, range, index — intro vocab EN
- D04-UC02: epoch usa loop internamente — conexão conceitual

### aulaNum: "Aula 05"
```

---

## 4. Quando usar qual agente

| Situação | Agente(s) |
|---|---|
| "O que devo ensinar amanhã?" | `@orquestrador-1ano` |
| "Planeje o trimestre completo" | `@orquestrador-1ano` |
| "Gere a aula completa" | `@slidev-senac` (coordenador) |
| "Só quero os slides, os exercícios eu resolvo" | `@slidev-writer` diretamente |
| "Só quero os exercícios" | `@exercise-builder` diretamente |
| "O que já foi dado em Python?" | `@d05-uc03-python-para-ia` |
| "Verifique se a estrutura da aula está correta" | `@verificador-estrutura-aula` |
| "Preciso do Handoff Card de D04" | `@d04-uc02-fundamentos-e-conceitos-de-ia` |
| D01 - Fundamentos de Computação | `@d01-uc01-fundamentos-computacao` |
| D02 - Inglês Instrumental | `@d02-uc01-ingles-instrumental` |
| D03 - Fundamentos Matemáticos | `@d03-uc01-fundamentos-matematicos` |
| D04 - Fundamentos e Conceitos de IA | `@d04-uc02-fundamentos-e-conceitos-de-ia` |
| D05 - Python para IA | `@d05-uc03-python-para-ia` |
| D06 - Arquitetura e GPU | `@d06-uc04-arquitetura-computadores-gpu` |
| D07 - Transformação Digital | `@d07-uc05-transformacao-digital` |
| D08 - Banco de Dados | `@d08-uc06-banco-de-dados` |
| D09 - Estatística Aplicada | `@d09-uc07-estatistica-aplicada` |

---

## 5. Naming convention

### Arquivos de aula (projeto clonado)

| Arquivo | Propósito |
|---|---|
| `slides.md` | Deck da aula (Slidev) |
| `exercicios.md` | Todos os exercícios com frontmatter YAML |
| `tarefa.md` | Tarefa de casa com starter code |
| `meta.yaml` | Metadados: aula, slug, status, disciplinas |
| `estrutura-aula.md` | Mapa de slides: gerado antes, aprovado antes |

### Pasta do projeto clonado

```
A{NN}-{slug-descritivo}/
```

Exemplos:
- `A05-python-loops/`
- `A06-transformacao-digital-lgpd/`
- `RA01-reposicao-banco-dados/`   ← aula de reposição

### IDs de exercícios

```
EX-{aulaNum}-{sequência 2 dígitos}
```

Exemplos: `EX-05-01`, `EX-05-02`, `EX-06-01`

### Status de meta.yaml

| Status | Quando usar |
|---|---|
| `draft` | Slides em construção |
| `ready` | Aprovado, aguardando aula |
| `published` | Aula ministrada |

---

## 6. Troubleshooting rápido

### "O verificador encontrou violações de T→E→D→TC"

O `@verificador-estrutura-aula` corrige automaticamente. Confirme com `"Pode corrigir"` e ele executa + loga as alterações no `estrutura-aula.md`.

### "O writer gerou exercícios em slides.md"

Solicite ao writer que remova os exercícios dos slides e emita o Handoff para `@exercise-builder`. Os exercícios ficam **sempre** em `exercicios.md`, nunca como slides.

### "Conflito de merge ao fazer git push"

```bash
git pull --rebase
# ou, se houver working tree dirty:
git stash && git pull --rebase && git stash pop
```

O `sync-to-template.mjs` já faz isso automaticamente ao rodar local.

### "O agente reintroduziu um conceito já consolidado"

Copie a seção "Consolidado" do `contexto-*.md` e adicione no prompt: `"NÃO introduza: [lista]. Isso já foi consolidado na Aula NN."`.

### "Não sei qual é a composição da aula de hoje"

```
@orquestrador-1ano
"Calcule a composição para [data], considerando o estado atual em PROJETO-AULAS-1-TRIMESTRE.md"
```

### "Quero começar de uma sessão fresca sem histórico"

Releia este arquivo (`FLUXO-AULA.md`) e os `contexto-*.md` das disciplinas envolvidas. Eles são o estado completo do curso.

---

## 7. Checklist de publicação

### Antes de dar a aula

- [ ] `slides.md` roda sem erros: `npm run dev`
- [ ] Todos os slides renderizam corretamente
- [ ] Nenhum slide tem texto placeholder ("TODO", "Lorem Ipsum", "...")
- [ ] `meta.yaml` com `status: ready`
- [ ] `exercicios.md` tem todos os exercícios do dia com starter code
- [ ] `tarefa.md` tem o enunciado + starter code + critérios

### Após a aula

- [ ] Atualizar `meta.yaml` com `status: published`
- [ ] Atualizar `contexto-*.md` de cada disciplina com o que foi efetivamente dado
- [ ] Atualizar `PROJETO-AULAS-1-TRIMESTRE.md` com HA consumidos
- [ ] Commit: `git commit -m "feat(A0N): lesson content — [tema]"`

---

## Arquivos de referência

| Arquivo | Onde está | Para que serve |
|---|---|---|
| `PROJETO-AULAS-1-TRIMESTRE.md` | raiz do template | Calendário, HA, estado geral T1 |
| `contexto-*.md` | `.github/agents/` | Memória por disciplina |
| `copilot-instructions.md` | `.github/` | Routing de agentes |
| `INSTRUCOES-SENAC.md` | raiz do template | Referência técnica de componentes/layouts |
| `slides-demo.md` | raiz do template | Demo de todos os layouts |
