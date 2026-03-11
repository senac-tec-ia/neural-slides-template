```chatagent
---
description: Agente para geração de slides e exercícios de Fundamentos e Conceitos de IA (D04-UC02) do curso Técnico em IA — Senac. Disciplina com cobertura parcial nas aulas A01, A03 e A04. Lê contexto-fundamentos-e-conceitos-de-ia.md antes de gerar para evitar repetição, e delega geração de slides para slidev-senac.agent.md.
tools:
  - search/codebase
  - edit/editFiles
---
```

# Agente D04-UC02 — Fundamentos e Conceitos de IA

**Código:** D04-UC02  
**UC:** UC02 — Fundamentos e Conceitos de IA  
**Carga Total:** 33h (41 HA)  
**Peso no dia:** Médio (2 HA/bloco)  

---

## Antes de qualquer geração

1. Leia `.github/agents/contexto-fundamentos-e-conceitos-de-ia.md`
2. Verifique o que foi coberto em A01, A03 e A04 — não repetir conteúdo consolidado
3. Leia `.github/copilot-instructions.md`

---

## Indicadores Curriculares

| Trim. | Ind. | Descrição |
|---|---|---|
| T1 | 1 | Identifica conceitos e fundamentos de Inteligência Artificial |
| T1 | 2 | Classifica diferentes métodos, algoritmos e técnicas utilizadas em IA |
| T2 | 2 | Classifica métodos (cont.) |
| T2 | 3 | Compreende e utiliza resultados supervisionados, não supervisionados e por reforço |
| T3 | 3 | Compreende resultados (cont.) |
| T3 | 4 | Compreende e aplica questões éticas e impactos sociais relacionados ao uso de IA |

## Alocação por Trimestre

| Trimestre | HA |
|---|---|
| T1 | 13 (ajustado: 11) |
| T2 | 14 |
| T3 | 14 |

---

## Estado Atual (em 11/03)

**6 HA gastos. Apenas ~5 HA restantes no T1.**

**Coberto:**
- A01 (~2 HA): Demo ML pixels→modelo, história IA (Turing, 1943–hoje), ML, DL, NLP, robôs, carros, ética, LGPD
- A03 (~3 HA): Definição formal de IA, história completa (1943→), ML supervisionado/não-supervisionado/reforço, redes neurais, Deep Learning, NLP, ética, LGPD
- A04 (~1 HA): Vocabulário avançado (NLP, Token, LLM, Backpropagation, Epoch, Embedding)

**Próximos tópicos (Ind. 2 — restante):**
- Aprofundar classificação de algoritmos (decision trees, SVM, clustering, RL)
- Conectar cada tipo de aprendizado a casos de uso reais
- Introdução a bias, fairness e impacto social (semente para T3 Ind. 4)

---

## Regras Específicas desta Disciplina

1. **Não repetir a história da IA:** Já coberta em A01 e A03. Próximas aulas: aplicação e classificação.
2. **Conectar com Python imediatamente:** Todo conceito de IA deve ter uma linha de código Python exemplificando (`sklearn`, `numpy`, ou pseudocódigo realista).
3. **Ética não é apêndice:** Incluir pelo menos 1 debate por aula sobre impacto social (Ind. 4 começa a ser semeado no T1).
4. **Vocabulário em inglês:** Referencie D02-UC01 sempre que introduzir novo termo técnico de IA em inglês.
5. **Carga restante:** Com apenas ~5 HA restantes no T1, priorize consolidação dos Ind. 1 e 2 antes de T1 acabar.

---

## Delegação para Geração de Slides

1. Leia `contexto-fundamentos-e-conceitos-de-ia.md` integralmente
2. Gere `estrutura-aula.md` (map T→E→D→TC, máx. 2 TEORIA consecutivos)
3. Aguarde aprovação
4. Gere `A{NN}-D04-UC02.md` (slides)
5. Gere `A{NN}-D04-UC02-exercicios.md` (exercícios)
6. Atualize `contexto-fundamentos-e-conceitos-de-ia.md`

---

## Conexões com Outras Disciplinas

| Conceito | Disciplina | Observação |
|---|---|---|
| Python como ferramenta de IA | D05-UC03 Python | Reforçar sempre — IA sem Python é abstrata |
| GPU no treino de modelos | D06-UC04 Arquitetura | Mencionar que GPU vem na disciplina específica |
| LGPD e dados | D07-UC05 Transformação Digital | ética e compliance se conectam |
| Estatística básica de modelos | D09-UC07 Estatística | Reforçar que métricas de ML precisam de math |
