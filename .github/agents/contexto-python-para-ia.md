# Contexto — Desenvolvimento de Linguagem Python (D05-UC03)

**Código:** D05-UC03  
**UC:** UC03 — Desenvolvimento de Linguagem Python  
**Disciplina:** Python para IA  
**Carga Total:** 67h (80 HA) | `T1: 26 HA (ajustado: 20) · T2: 27 HA · T3: 27 HA`  
**Peso no dia:** Pesado (3 HA/bloco — sempre no Bloco 1)

---

## Estado Geral

| Trim. | HA Alocado | HA Dado | HA Restante |
|---|---|---|---|
| T1 | 20 (ajustado) | 2,5 | 17,5 |
| T2 | 27 | 0 | 27 |
| T3 | 27 | 0 | 27 |

---

## Indicadores Curriculares

| Ind. | Descrição | Status T1 |
|---|---|---|
| 1 | Elabora código conforme funcionalidades e características do aplicativo, na linguagem Python | Em andamento |
| 2 | Utiliza comandos de integração dos códigos construídos em Python, conforme estrutura projetada | Pendente |
| 3 | Realiza a depuração, verificando e corrigindo erros na programação, de acordo com recomendação técnica (T2) | Pendente |
| 4 | Utiliza bibliotecas de manipulação de dados para aplicações de IA (T3) | Pendente |

---

## Aulas Realizadas

| Aula | Data | HA (D05) | Tópicos Principais | Status |
|---|---|---|---|---|
| A01 | 26/02/2026 | 0 | Não trabalhada | - |
| A02 | 27/02/2026 | ~0,5 | Reconhecimento do ambiente: VS Code, Google Colab, GitHub, Jupyter Notebook — onde rodar Python | Ministrada |
| A03 | 05/03/2026 | 0 | Não trabalhada | - |
| A04 | 06/03/2026 | ~2 | Variáveis, tipos (str/int/float/bool), `print()`, `input()`, operadores aritmeticos, `if/elif/else`, `def/return`, ecossistema Python (Jupyter/Colab, pip, SQL, Markdown, JSON, YAML) | Ministrada |

---

## Conceitos Consolidados (não reintroduzir no mesmo nível)

---

## Conceitos Consolidados (não reintroduzir no mesmo nível)

| Conceito | Aula | Nível de Profundidade |
|---|---|---|
| Ambientes Python (VS Code, Colab, Jupyter) | A02 | Reconhecimento |
| Variáveis e atribuição | A04 | Introdutório |
| Tipos de dados: str, int, float, bool | A04 | Introdutório |
| `print()` e `input()` | A04 | Introdutório |
| Operadores aritméticos (+, -, *, /, //, %, **) | A04 | Introdutório |
| Condicionais: `if/elif/else` | A04 | Introdutório |
| Funções: `def`, parâmetros, `return` | A04 | Introdutório |
| Ecossistema Python (pip, Jupyter, SQL, Markdown, JSON) | A04 | Reconhecimento |

---

## Tópicos Pendentes no T1 (17,5 HA restantes)

**Ponto de partida obrigatório: não rever variáveis, tipos, print, input, operadores, condicionais, def/return — já consolidados em A04.**

| Seq. | Tópico | HA | Ind. |
|---|---|---|---|
| 1 | Loops: `for`, `while`, `break`, `continue` | 3 | 1 |
| 2 | Listas e dicionários: criação, indexação, `append`, `for` sobre listas | 3 | 1 |
| 3 | Funções avançadas: parâmetros default, `*args`, docstrings, escopo | 2 | 1 |
| 4 | Módulos e importações: `import`, `random`, `math`, `os` | 2 | 2 |
| 5 | Leitura e escrita de arquivos: `open()`, `read()`, `write()`, `.csv` | 2 | 2 |
| 6 | Tratamento de erros: `try/except` | 2 | 1 |
| 7 | Exercício integrador: mini-projeto com lista de dados de IA | 3 | 1, 2 |

---

## Recomendações para o Próximo Encontro

> A04 consolidou: variáveis, tipos, print, input, operadores, condicionais, def/return, ecossistema.
> A05 (próxima aula com D05) deve começar diretamente em loops (for/while).
> Contexto IA: iterar sobre lista de tokens, notas de modelos, resultados de classificação.
> Não rever condicionais — incorporar if/else dentro dos loops como uso natural.
> Manter padrão: 1 slide teoria + exercício imediato. Dinâmicas em dupla para código.

---

## Feedback de Campo

| Data | Observacao | Acao tomada |
|---|---|---|
| 2026-03-05 | Alunos sem nenhuma experiencia previa em programacao | Introducao ao Python iniciada em Fundamentos de Computacao com ritmo bem lento |
| 2026-03-05 | Dinamicas em dupla funcionam melhor do que exercicios individuais para programacao | Estrutura de pares adotada como padrao para exercicios de codigo |

---

## Conexoes com Outras Disciplinas

| Conceito | Disciplina Relacionada | Observacao |
|---|---|---|
| GPU para treino | Arquitetura de Computadores e GPU | Python usa PyTorch/TF que dependem de GPU |
| CSV como formato de dados | Fundamentos de Computacao | Base para Pandas e leitura de datasets |
| Estatistica descritiva | Estatistica Aplicada a IA | Pandas describe() vai precisar desse embasamento |
