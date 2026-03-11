# Contexto — Fundamentos Matemáticos para Computação e IA (UC03)

**Código:** UC03  
**UC:** UC01 — Aprofundamento das Áreas do Conhecimento  
**Disciplina:** Fundamentos Matemáticos para Computação e IA  
**Carga Total:** 33h (40 HA) | `T1: 13 HA · T2: 14 HA · T3: 13 HA`

---

## Estado Geral

| Trim. | HA Alocado | HA Dado | HA Restante |
|---|---|---|---|
| T1 | 13 | 2 | 11 |
| T2 | 14 | 0 | 14 |
| T3 | 13 | 0 | 13 |

---

## Indicadores Curriculares

| Ind. | Descrição | Status T1 |
|---|---|---|
| 1 | Aplica operações fundamentais da aritmética e álgebra em problemas de computação | Pendente |
| 2 | Utiliza conceitos de lógica matemática para estruturar raciocínios e algoritmos | Pendente |
| 3 | Emprega noções de conjuntos, funções e matrizes na organização de informações | Pendente |
| 4 | Reconhece padrões e sequências numéricas para construção de algoritmos básicos | Pendente |
| 5 | Aplica conceitos de probabilidade em situações cotidianas (T2) | Pendente |
| 6 | Resolve situações-problema usando matemática com clareza lógica (T2–T3) | Pendente |

---

## Resumo por Aula

| Aula | Data | HA | Conteúdo |
|---|---|---|---|
| A01 | 26/02/2026 | 0 | Não trabalhada |
| A02 | 27/02/2026 | 0 | Não trabalhada |
| A03 | 05/03/2026 | 0 | Não trabalhada |
| A04 | 06/03/2026 | 0 | Não trabalhada |
| A05 | 12/03/2026 | ~2 | **INICIO:** Aritmética computacional (int, float, `//`, `%`, `**`, PEMDAS), Álgebra: variável vs incognita, equação linear `y = 2x + 5`, função `calcular_y(x)` em Python |

---

## Pré-requisitos dos Alunos (estimativa)

- **Operações básicas:** Provavelmente consolidadas (adição, subtração, multiplicação, divisão)
- **Álgebra básica:** Lacunas esperadas — equações do 1º grau podem precisar de revisão rápida
- **Frações e porcentagem:** Lacunas esperadas — importante para estatística e pesos de modelos
- **Funções:** Conceito provavelmente visto, mas não consolidado
- **Matrizes:** Provavelmente não visto ainda

---

## Sequência Planejada T1 (13 HA)

| Seq. | Tópico | HA | Conexão com IA/Python |
|---|---|---|---|
| 1 | Aritmética básica + notação computacional (int, float, operadores Python) | 2 | Operadores `+, -, *, /, //, %, **` já vistos em A04 |
| 2 | Álgebra: variáveis, equações lineares, substituição | 2 | `x = 10; y = 2*x + 5` em Python |
| 3 | Lógica matemática: AND, OR, NOT, tabela verdade → `if/elif/else` | 2 | Direto para condicional Python |
| 4 | Conjuntos e funções: domínio, imagem, bijeção | 2 | `set()` em Python; função matemática = `def f(x)` |
| 5 | Matrizes: linha × coluna, operações básicas | 2 | `numpy.array` e produto matricial |
| 6 | Padrões e sequências: PA, PG, Fibonacci | 2 | Loop Python gerando a sequência |
| 7 | Revisão integrada + exercícios com datasets de IA | 1 | Parâmetros de tabela de dados |

---

## Vocabulário Matemático Introduzido

| `int` | Número inteiro em Python | A05 |
| `float` | Número decimal em Python | A05 |
| divisão inteira | `//` descarta a vírgula | A05 |
| resto (módulo) | `%` retorna o sobra da divisão | A05 |
| potência | `**` eleva à potência | A05 |
| PEMDAS | ordem de operações: potência, mult, div, adição, subtração | A05 |
| variável (matemática) | incógnita em álgebra, diferente de atribuição Python | A05 |
| equação linear | `y = ax + b` | A05 |

---

## Conexões Identificadas com Outras Disciplinas

| Conceito | Quando Usar | Disciplina Relacionada |
|---|---|---|
| Operadores aritméticos | Na primeira aula — alunos já viram em Python A04 | UC05 Python |
| Lógica booleana | Após operadores | UC05 Python (`and`, `or`, `not`) |
| Funções matemáticas | Após conjuntos | UC09 Estatística (pré-req. para funções lin/exp/log) |
| Matrizes | Após funções | UC05 Python (numpy), D08 (tabelas SQL) |
| Probabilidade (T2) | Início do T2 | UC04 (modelos probabilísticos de IA) |

---

## Regras para o Copilot

1. **Primeira aula:** Começar pelo tópico 1 da sequência acima — verificar se D05 A04 já aconteceu (sim) para referenciar os operadores já vistos
2. **Todo conceito matemático tem código Python** ao lado — é inviolável para esta disciplina neste contexto
3. **Contexto IA always:** datasets, pixels, scores, pesos de modelos — nunca exercícios sem contexto tecnológico
4. **Verificar UC09** antes de avançar para funções — coordenar para não repetir
