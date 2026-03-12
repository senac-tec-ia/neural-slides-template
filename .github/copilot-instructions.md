# Neural Slides — Workspace Instructions (Orchestrator)

This repository is a **Slidev lesson deck** for the *Técnico em Inteligência Artificial* course at Senac Brazil. Every task in this repo falls into one of two domains: **content authoring** and **structure auditing**. Route to the correct agent accordingly.

> **Workflow reference:** See `.github/FLUXO-AULA.md` for the full step-by-step guide on producing a lesson from scratch.

---

## Agent Routing

| Task | Invoke |
|---|---|
| Planejar composição do dia ou calcular HA restantes | `@planejador-trimestre` |
| Gerar aula completa (slides + exercícios) | `@produtor-aula` |
| Gerar **apenas slides** (teoria, debate, dinâmica) | `@autor-slides` |
| Gerar **apenas exercicios.md + tarefa.md** | `@autor-exercicios` |
| Revisar/refinar slides gerados (modo plan, slide a slide) | `@editor-slides --mode=review` |
| Editar slides por instrução explcícita | `@editor-slides --mode=edit` |
| Audit slide order, tags, UC labels | `@auditor-estrutura` |
| UC01 Fundamentos de Computação | `@uc01-fundamentos-computacao` |
| UC02 Inglês Instrumental | `@uc02-ingles-instrumental` |
| UC03 Fundamentos Matemáticos | `@uc03-fundamentos-matematicos` |
| UC04 Fundamentos e Conceitos de IA | `@uc04-fundamentos-e-conceitos-de-ia` |
| UC05 Python para IA | `@uc05-python-para-ia` |
| UC06 Arquitetura de Computadores e GPU | `@uc06-arquitetura-computadores-gpu` |
| UC07 Transformação Digital | `@uc07-transformacao-digital` |
| UC08 Banco de Dados | `@uc08-banco-de-dados` |
| UC09 Estatística Aplicada | `@uc09-estatistica-aplicada` |

**Regra de separação:** `@autor-slides` NUNCA toca `exercicios.md`. `@autor-exercicios` NUNCA toca `slides.md`. `@editor-slides` NUNCA age por regras automáticas (isso é papél do `@auditor-estrutura`). Sempre seguir o Handoff Card como contrato entre as camadas.

**Sequência obrigatória de refinamento:** `@editor-slides` → `@auditor-estrutura`. Nunca o inverso.

**Never mix tasks in one session.** If the user asks for both new content AND a structural audit, run `@auditor-estrutura` first, wait for confirmation, then run `@produtor-aula`.

---

## Handoff Card — Contrato entre Camadas

O Handoff Card é o output de cada agente disciplinar (`@d01`–`@d09`) e o input de `@autor-slides` e `@autor-exercicios`. Sempre solicitar um Handoff Card antes de gerar conteúdo.

```markdown
## Handoff Card: D0X-UC0X / A0N / N HA
**Disciplina:** [nome] | **Indicadores:** T[N]-Ind.[N]

### Consolidado (NÃO reintroduzir)
- conceito A, conceito B

### Ensinar hoje
1. tópico — contexto: [exemplo IA/dados]

### Exercícios N1→N4
- N1: reconhecimento | N2: guiado | N3: independente | N4: desafio

### Cross-ref: D0X [conceito que conecta]
### aulaNum: "Aula NN"
```

---

## UC Context Files — Always Read Before Generating Content

Before generating any lesson content, read the UC context file(s) for the discipline(s) involved. These files are the agent's living memory of what has already been taught.

| Código | Disciplina | Context file |
|---|---|---|
| UC01 | Fundamentos de Computação | `.github/agents/contexto-fundamentos-de-computacao.md` |
| UC02 | Inglês Instrumental | `.github/agents/contexto-ingles-instrumental.md` |
| UC03 | Fundamentos Matemáticos | `.github/agents/contexto-fundamentos-matematicos.md` |
| UC04 | Fundamentos e Conceitos de IA | `.github/agents/contexto-fundamentos-e-conceitos-de-ia.md` |
| UC05 | Python para IA | `.github/agents/contexto-python-para-ia.md` |
| UC06 | Arquitetura de Computadores e GPU | `.github/agents/contexto-arquitetura-computadores-gpu.md` |
| UC07 | Transformação Digital | `.github/agents/contexto-transformacao-digital.md` |
| UC08 | Banco de Dados | `.github/agents/contexto-banco-de-dados.md` |
| UC09 | Estatística Aplicada | `.github/agents/contexto-estatistica-aplicada.md` |

If a context file does not yet exist for a UC, create it using the standard format defined in `.github/agents/referencia-tecnica.md § 9`.

**Rules when using context files:**
- Never introduce a concept at the same depth it was previously introduced — deepen or apply it.
- Never re-explain vocabulary already listed as "Consolidado" unless the user explicitly asks for a review.
- After generating content, update the relevant context file(s) to reflect what was covered.

---

## Inviolable Rules (apply everywhere, override everything)

1. **Language:** All slide-visible text is always **pt-BR** — no exceptions. This instructions file is in English; the slides are always Portuguese.
2. **Slide order within each class (aulaNum):** `[TEORIA]` → `[EXERCICIO]` → `[DINAMICA]` → `[TAREFA DE CASA]`. Never place homework before exercises or exercises before theory.
3. **Theory density limit:** Never generate more than **2 consecutive theory slides** without an exercise, debate, or dynamic in between.
4. **Pre-generation gate:** Before writing any slide, generate `estrutura-aula.md` and wait for explicit user approval. Never touch `slides.md` before approval.
5. **Em-dash prohibition:** Never use `—` anywhere: not in slide titles, bullets, body text, code comments, or any generated prose. In pt-BR use `:` for enumerations, `,` for continuations in prose, and `-` only in list bullets. This applies to ALL output, not just slides.
6. **Exercise progression:** Exercises within a class must escalate: level 1 (comprehension) → level 2 (guided application) → level 3 (independent application) → level 4 (challenge). Do not skip levels.
7. **Starter code:** Every coding exercise must include a starter code block with the function signature already written. Students never start from a blank file.
8. **Context-first rule:** Every coding example in this course should use AI/data themes (tokens, model outputs, datasets) — not generic math calculators or unrelated domains.
9. **Table-code separation:** A table and a code block must NEVER appear on the same slide. If both are needed, split into two slides: one with the table, one with the code. Two tables on the same slide are also forbidden. Two code blocks on the same slide (`default` layout) are forbidden — use `two-cols-text` only if each column genuinely has its own independent block.
11. **Scope guard for non-Python disciplines:** When adding Python code examples to Matemática, Estatística, or any non-UC05 discipline, use only constructs already listed under `Conceitos Consolidados` in `.github/agents/contexto-python-para-ia.md`. Never use `for`, `while`, lists, or dictionaries in slides of other disciplines before those topics are taught in UC05.
12. **Tool and agent transparency:** At the end of every response, include a `## Ferramentas e Agentes Usados` section listing: (a) every agent invoked (e.g., `@autor-slides`, `@auditor-estrutura`) and (b) every tool used (e.g., `edit/editFiles`, `search/codebase`). Tool identifiers stay in English as technical names; the section title and explanations are in pt-BR.

---

## Repository File Schema

| File | Purpose |
|---|---|
| `slides.md` | Slidev deck — the lesson itself |
| `exercicios.md` | Structured exercise file with per-exercise frontmatter |
| `tarefa.md` | Homework assignment with due date and criteria |
| `meta.yaml` | Lesson metadata — aula number, slug, status, discipline |
| `estrutura-aula.md` | Slide map — generated before slides, approved before execution |
| `.github/agents/contexto-*.md` | Per-UC memory files — read before generating, updated after |

---

## Output Quality Checklist

Before ending any content-generation session, verify:

- [ ] Every class block (`aulaNum`) follows the T→E→D→TC order
- [ ] No more than 2 consecutive `[TEORIA]` slides without interaction
- [ ] All coding exercises have starter code
- [ ] No Python constructs used in non-UC05 slides that haven't been taught yet
- [ ] UC context file(s) updated with what was covered today
- [ ] `estrutura-aula.md` synced to the final slide count
- [ ] No em-dash anywhere in slide content
- [ ] `meta.yaml` `status` field updated to `ready` or `published`
- [ ] Response ends with a `## Ferramentas e Agentes Usados` section
