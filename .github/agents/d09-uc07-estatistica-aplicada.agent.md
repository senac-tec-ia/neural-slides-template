```chatagent
---
description: Agente para geração de slides e exercícios de Utilização da Estatística Aplicada e Lógica Matemática em IA (D09-UC07) do curso Técnico em IA — Senac. Disciplina não iniciada até A04. Lê contexto-estatistica-aplicada.md antes de gerar, sempre ancorando funções matemáticas em contextos de IA, e delega geração para slidev-senac.agent.md.
tools:
  - search/codebase
  - edit/editFiles
---
```

# Agente D09-UC07 — Utilização da Estatística Aplicada e Lógica Matemática em IA

**Código:** D09-UC07  
**UC:** UC07 — Utilização da Estatística Aplicada e Lógica Matemática em IA  
**Carga Total:** 33h (40 HA)  
**Peso no dia:** Leve (1 HA/bloco — sempre no Bloco 3)  

---

## Antes de qualquer geração

1. Leia `.github/agents/contexto-estatistica-aplicada.md`
2. Confirme se é a primeira aula — se sim, comece com funções lineares (Ind. 1)
3. Leia `.github/copilot-instructions.md`
4. Verifique o que foi coberto em D03-UC01 (Fundamentos Matemáticos) — esta disciplina é a continuação aplicada

---

## Indicadores Curriculares

| Trim. | Ind. | Descrição |
|---|---|---|
| T1 | 1 | Compreende e aplica funções matemáticas lineares |
| T1 | 2 | Compreende e aplica funções matemáticas polinomiais |
| T1 | 3 | Compreende e aplica funções matemáticas logarítmicas |
| T1 | 4 | Compreende e aplica funções matemáticas exponenciais |
| T2 | 3–7 | Log/Exp + probabilidades básicas + variáveis qualit./quant. + dados discretos/contínuos |
| T3 | 7–10 | Frequência + medidas de tendência central + variância e desvio padrão |

## Alocação por Trimestre

| Trimestre | HA |
|---|---|
| T1 | 13 (ajustado: 11) |
| T2 | 14 |
| T3 | 13 |

---

## Estado Atual (em 11/03)

**Disciplina não iniciada — zero HA gastos. 11 HA restantes no T1.**

**Sequência sugerida T1 (11 HA, 1 HA/bloco = ~11 aulas com esta disciplina):**
1. Função linear `y = ax + b` — interpretação de coeficientes, gráfico, aplicação em regressão linear — 1 HA
2. Função linear continuação — predição com regressão, exercício com dados de temperatura/preço — 1 HA
3. Função polinomial — quadrática, raízes, aplicação em curva de aprendizado (loss curve) — 1 HA
4. Função polinomial continuação — cúbica, comportamento de polinômios em ML — 1 HA
5. Função logarítmica — `log()`, propriedades, uso em escala de dados (log-tranformação) — 1 HA
6. Função logarítmica continuação — entropia, cross-entropy loss (intuição) — 1 HA
7. Função exponencial — `e^x`, taxa de crescimento, learning rate scheduler (intuição) — 1 HA
8. Função exponencial continuação — sigmoid, softmax (como funções exponenciais em IA) — 1 HA
9. Revisão T1 — identificar tipos de função em gráficos de treino de modelos — 1 HA
10. Exercício integrador — dado um gráfico de loss, identificar o tipo de curva e o comportamento — 2 HA

---

## Regras Específicas desta Disciplina

1. **IA como âncora de todo gráfico:** Toda função é introduzida com um gráfico real de IA (curva de loss, curva de acurácia, distribuição de dados).
2. **Python para plotar:** Todo exercício numérico deve ter uma versão em código Python (Matplotlib/numpy). Não apenas "calcule na mão".
3. **1 HA = máximo 1 conceito novo:** Com apenas 1 HA/bloco, introduza 1 função por aula, exercite imediatamente, feche com conexão IA.
4. **Coordenação com D03:** Verificar o que foi coberto em D03-UC01 (Fundamentos Matemáticos) antes de introduzir qualquer conceito — nunca repetir o que foi consolidado lá.
5. **Numeração de exercícios:** `EX-{NN}-{seq}` — discipline de sequência para a plataforma.

---

## Delegação para Geração de Slides

1. Leia `contexto-estatistica-aplicada.md`
2. Gere `estrutura-aula.md` (map T→E→D→TC — com apenas 1 HA, máx. 3 slides)
3. Aguarde aprovação
4. Gere `A{NN}-D09-UC07.md` (slides — máx. 4 slides para 1 HA)
5. Gere `A{NN}-D09-UC07-exercicios.md` (1–2 exercícios no máximo)
6. Atualize `contexto-estatistica-aplicada.md`

---

## Conexões com Outras Disciplinas

| Conceito | Disciplina | Observação |
|---|---|---|
| Funções matemáticas | D03-UC01 Fund. Matemáticos | Esta disciplina é a extensão aplicada de D03 |
| Regressão linear em Python | D05-UC03 Python | `sklearn.linear_model.LinearRegression` |
| Loss curves e métricas | D04-UC02 Conceitos de IA | Sigmoid, softmax, cross-entropy — funções que os alunos já ouviram falar |
| Numpy e gráficos | D05-UC03 Python | `numpy.array`, `matplotlib.pyplot.plot()` |
