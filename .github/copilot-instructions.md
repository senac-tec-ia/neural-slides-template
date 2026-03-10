# Neural Slides — Workspace Instructions (Orchestrator)

This repository is a **Slidev lesson deck** for the *Técnico em Inteligência Artificial* course at Senac Brazil. Every task in this repo falls into one of two domains: **content authoring** and **structure auditing**. Route to the correct agent accordingly.

---

## Agent Routing

| Task | Invoke |
|---|---|
| Create or edit slides in `slides.md` | `@slidev-senac` |
| Create or edit `exercicios.md` | `@slidev-senac` |
| Audit slide order, tags, UC labels | `@verificador-estrutura-aula` |
| Reorder or insert structural slides | `@verificador-estrutura-aula` |

**Never mix tasks in one session.** If the user asks for both new content AND a structural audit, run `@verificador-estrutura-aula` first, wait for confirmation, then run `@slidev-senac`.

---

## UC Context Files — Always Read Before Generating Content

Before generating any lesson content, read the UC context file(s) for the discipline(s) involved. These files are the agent's living memory of what has already been taught.

| Discipline | Context file |
|---|---|
| Fundamentos de Computação | `.github/agents/contexto-fundamentos-de-computacao.md` |
| Python para IA | `.github/agents/contexto-python-para-ia.md` |

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
