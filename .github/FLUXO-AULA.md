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
@produtor-aula (coordenador)
   │  lê PROJETO-AULAS-1-TRIMESTRE.md + contexto-*.md
   │
   ├── @planejador-trimestre
   │       "Qual a composição de A05?" → calendário + HA restante
   │
   ├── @d01 a @d09 (especialistas por disciplina)
   │       "O que ensinar nessa disciplina em A05?" → Handoff Card
   │
   ├── @autor-slides
   │       Handoff Card(s) → estrutura-aula.md → (aprovação) → slides.md
   │           └── @editor-slides (refinamento pós-geração)
   │                   --mode=review: revisa slide a slide, emite relatório
   │                   --mode=edit:   executa as decisões aprovadas
   │
   ├── @autor-exercicios
   │       Handoff Card(s) → exercicios.md + tarefa.md
   │
   └── @auditor-estrutura
           slides.md → auditoria T→E→D→TC → corrige se necessário
```

### Responsabilidade de cada agente

| Agente | Produz | NÃO produz |
|---|---|---|
| `@produtor-aula` | Coordena o fluxo completo | nada diretamente |
| `@planejador-trimestre` | Composição do dia (HA por disciplina) | slides |
| `@d01` a `@d09` | Handoff Card da sua disciplina | slides, exercícios |
| `@autor-slides` | slides.md ([TEORIA][DEBATE][DINAMICA]) | exercicios.md |
| `@autor-exercicios` | exercicios.md + tarefa.md | slides.md |
| `@editor-slides` | slides.md modificado (por instrução explícita) | aulas do zero |
| `@auditor-estrutura` | audit + correção estrutural automática | conteúdo novo |

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
@planejador-trimestre
"Calcule a composição para A05 (12/03/2026, quinta-feira)"
```

O orquestrador retorna: quais disciplinas + quantos HA cada uma, com justificativa de urgência.

### Passo 2 — Gerar Handoff Cards por disciplina

Para cada disciplina na composição, invocar o agente correspondente:

```
@uc05-python-para-ia
"Gere o Handoff Card para A05 com base no contexto atual"

@uc07-transformacao-digital
"Gere o Handoff Card para A05 com base no contexto atual"

@uc02-ingles-instrumental
"Gere o Handoff Card para A05 com base no contexto atual"
```

Cada agente lê seu `contexto-*.md` e devolve um Handoff Card com: consolidado, o que ensinar hoje, exercícios N1→N4, cross-refs.

### Passo 3 — Gerar estrutura da aula (autor-slides)

```
@autor-slides
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
@autor-exercicios
"Gere os exercícios para A05 com os seguintes Handoff Cards:
[colar Handoff Cards aqui]"
```

### Passo 6b — Refinar slides (opcional)

Se quiser revisar o conteúdo gerado antes de validar a estrutura:

```
@editor-slides --mode=review
"Revise os slides de A05 — apresente opções slide a slide"
```

Após receber o relatório de decisões, executar:

```
@editor-slides --mode=edit
"Execute as decisões do relatório acima"
```

### Passo 7 — Validar estrutura final

```
@auditor-estrutura
"Valide A05 — verifique T→E→D→TC e tags"
```

Se encontrar violações, o auditor corrige automaticamente e loga as alterações no final do `estrutura-aula.md`.

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

O Handoff Card é o **output de cada agente disciplinar** e o **input de `@autor-slides` e `@autor-exercicios`**. É a peça que conecta "o que o aluno já sabe" com "o que deve ser ensinado hoje".

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
## Handoff Card: UC05 / A05 / 3 HA
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
- UC02: loop, iterate, range, index — intro vocab EN
- UC04: epoch usa loop internamente — conexão conceitual

### aulaNum: "Aula 05"
```

---

## 4. Quando usar qual agente

| Situação | Agente(s) |
|---|---|
| "O que devo ensinar amanhã?" | `@planejador-trimestre` |
| "Planeje o trimestre completo" | `@planejador-trimestre` |
| "Gere a aula completa" | `@produtor-aula` (coordenador) |
| "Só quero os slides, os exercícios eu resolvo" | `@autor-slides` diretamente |
| "Só quero os exercícios" | `@autor-exercicios` diretamente |
| "Revisar slides gerados, slide a slide" | `@editor-slides --mode=review` |
| "Editar um slide específico por instrução" | `@editor-slides --mode=edit` |
| "O que já foi dado em Python?" | `@uc05-python-para-ia` |
| "Verifique se a estrutura da aula está correta" | `@auditor-estrutura` |
| "Preciso do Handoff Card de UC04" | `@uc04-fundamentos-e-conceitos-de-ia` |
| UC01 - Fundamentos de Computação | `@uc01-fundamentos-computacao` |
| UC02 - Inglês Instrumental | `@uc02-ingles-instrumental` |
| UC03 - Fundamentos Matemáticos | `@uc03-fundamentos-matematicos` |
| UC04 - Fundamentos e Conceitos de IA | `@uc04-fundamentos-e-conceitos-de-ia` |
| UC05 - Python para IA | `@uc05-python-para-ia` |
| UC06 - Arquitetura e GPU | `@uc06-arquitetura-computadores-gpu` |
| UC07 - Transformação Digital | `@uc07-transformacao-digital` |
| UC08 - Banco de Dados | `@uc08-banco-de-dados` |
| UC09 - Estatística Aplicada | `@uc09-estatistica-aplicada` |

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

### "O auditor encontrou violações de T→E→D→TC"

O `@auditor-estrutura` corrige automaticamente. Confirme com `"Pode corrigir"` e ele executa + loga as alterações no `estrutura-aula.md`.

### "O autor gerou exercícios em slides.md"

Solicite ao autor-slides que remova os exercícios dos slides e emita o Handoff para `@autor-exercicios`. Os exercícios ficam **sempre** em `exercicios.md`, nunca como slides.

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
@planejador-trimestre
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
