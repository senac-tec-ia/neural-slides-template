# Neural Slides — Workspace Instructions (Orchestrator)

This repository is a **Slidev lesson deck** for the *Técnico em Inteligência Artificial* course at Senac Brazil. Every task in this repo falls into one of two domains: **content authoring** and **structure auditing**. Route to the correct agent accordingly.

> **Workflow reference:** See `.github/FLUXO-AULA.md` for the full step-by-step guide on producing a lesson from scratch.

---

## Agent Routing

| Task | Invoke |
|---|---|
| Planejar composição do dia ou calcular HA restantes | `@orquestrador-1ano` |
| Gerar aula completa (slides + exercícios) | `@slidev-senac` |
| Gerar **apenas slides** (teoria, debate, dinâmica) | `@slidev-writer` |
| Gerar **apenas exercicios.md + tarefa.md** | `@exercise-builder` |
| Audit slide order, tags, UC labels | `@verificador-estrutura-aula` |
| Reorder or insert structural slides | `@verificador-estrutura-aula` |
| D01-UC01 Fundamentos de Computação | `@d01-uc01-fundamentos-computacao` |
| D02-UC01 Inglês Instrumental | `@d02-uc01-ingles-instrumental` |
| D03-UC01 Fundamentos Matemáticos | `@d03-uc01-fundamentos-matematicos` |
| D04-UC02 Fundamentos e Conceitos de IA | `@d04-uc02-fundamentos-e-conceitos-de-ia` |
| D05-UC03 Python para IA | `@d05-uc03-python-para-ia` |
| D06-UC04 Arquitetura de Computadores e GPU | `@d06-uc04-arquitetura-computadores-gpu` |
| D07-UC05 Transformação Digital | `@d07-uc05-transformacao-digital` |
| D08-UC06 Banco de Dados | `@d08-uc06-banco-de-dados` |
| D09-UC07 Estatística Aplicada | `@d09-uc07-estatistica-aplicada` |

**Regra de separação:** `@slidev-writer` NUNCA toca `exercicios.md`. `@exercise-builder` NUNCA toca `slides.md`. Sempre seguir o Handoff Card como contrato entre as camadas.

**Never mix tasks in one session.** If the user asks for both new content AND a structural audit, run `@verificador-estrutura-aula` first, wait for confirmation, then run `@slidev-senac`.

---

## Handoff Card — Contrato entre Camadas

O Handoff Card é o output de cada agente disciplinar (`@d01`–`@d09`) e o input de `@slidev-writer` e `@exercise-builder`. Sempre solicitar um Handoff Card antes de gerar conteúdo.

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
| D01-UC01 | Fundamentos de Computação | `.github/agents/contexto-fundamentos-de-computacao.md` |
| D02-UC01 | Inglês Instrumental | `.github/agents/contexto-ingles-instrumental.md` |
| D03-UC01 | Fundamentos Matemáticos | `.github/agents/contexto-fundamentos-matematicos.md` |
| D04-UC02 | Fundamentos e Conceitos de IA | `.github/agents/contexto-fundamentos-e-conceitos-de-ia.md` |
| D05-UC03 | Python para IA | `.github/agents/contexto-python-para-ia.md` |
| D06-UC04 | Arquitetura de Computadores e GPU | `.github/agents/contexto-arquitetura-computadores-gpu.md` |
| D07-UC05 | Transformação Digital | `.github/agents/contexto-transformacao-digital.md` |
| D08-UC06 | Banco de Dados | `.github/agents/contexto-banco-de-dados.md` |
| D09-UC07 | Estatística Aplicada | `.github/agents/contexto-estatistica-aplicada.md` |

If a context file does not yet exist for a UC, create it using the standard format defined in `.github/agents/slidev-senac.agent.md § 10`.

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
5. **Em-dash prohibition:** Never use `—` in any slide title, bullet, or body text. Use `:` for enumerations, `-` in lists, comma in prose.
6. **Exercise progression:** Exercises within a class must escalate: level 1 (comprehension) → level 2 (guided application) → level 3 (independent application) → level 4 (challenge). Do not skip levels.
7. **Starter code:** Every coding exercise must include a starter code block with the function signature already written. Students never start from a blank file.
8. **Context-first rule:** Every coding example in this course should use AI/data themes (tokens, model outputs, datasets) — not generic math calculators or unrelated domains.

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
- [ ] UC context file(s) updated with what was covered today
- [ ] `estrutura-aula.md` synced to the final slide count
- [ ] No em-dash anywhere in slide content
- [ ] `meta.yaml` `status` field updated to `ready` or `published`
