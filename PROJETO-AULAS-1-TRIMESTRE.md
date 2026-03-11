# Projeto de Aulas — 1º Trimestre 2026
**Curso:** Técnico em Inteligência Artificial — Senac  
**Período:** 26/02/2026 → 15/05/2026  
**Professor:** Leonardo Zanini  
**Dias de aula:** Quintas e Sextas-feiras  
**Horário:** 7h10–12h20 (intervalo 9h35–9h50)  
**Carga diária:** 6 HA × 50 min = 5h de aula efetiva  
**Última atualização:** 2026-03-11  

---

## 1. Estrutura Curricular — 9 Disciplinas × 7 UCs

### UC01 — Aprofundamento das Áreas do Conhecimento (CH: 100h | 120 HA total)

| Código | Disciplina | T1 HA | T2 HA | T3 HA | Total HA |
|---|---|---|---|---|---|
| D01-UC01 | Fundamentos de Computação | 13 | 14 | 14 | 41 |
| D02-UC01 | Inglês Instrumental aplicado à Computação | 13 | 14 | 13 | 40 |
| D03-UC01 | Fundamentos Matemáticos para Computação e IA | 13 | 14 | 13 | 40 |

### UC02 — Fundamentos e Conceitos de IA (CH: 33h | 41 HA)

| Código | Disciplina | T1 HA | T2 HA | T3 HA | Total HA |
|---|---|---|---|---|---|
| D04-UC02 | Fundamentos e Conceitos de IA | 13 | 14 | 14 | 41 |

### UC03 — Desenvolvimento de Linguagem Python (CH: 67h | 80 HA)

| Código | Disciplina | T1 HA | T2 HA | T3 HA | Total HA |
|---|---|---|---|---|---|
| D05-UC03 | Desenvolvimento de Linguagem Python | 26 | 27 | 27 | 80 |

### UC04 — Reconhecimento de Modelos de Arquitetura e GPU (CH: 33h | 40 HA)

| Código | Disciplina | T1 HA | T2 HA | T3 HA | Total HA |
|---|---|---|---|---|---|
| D06-UC04 | Reconhecimento de Modelos de Arquitetura e GPU | 13 | 14 | 13 | 40 |

### UC05 — Transformação Digital (CH: 67h | 80 HA)

| Código | Disciplina | T1 HA | T2 HA | T3 HA | Total HA |
|---|---|---|---|---|---|
| D07-UC05 | Compreensão sobre Transformação Digital e Estratégias de Informação para IA | 26 | 27 | 27 | 80 |

### UC06 — Desenvolvimento de Banco de Dados (CH: 67h | 80 HA)

| Código | Disciplina | T1 HA | T2 HA | T3 HA | Total HA |
|---|---|---|---|---|---|
| D08-UC06 | Desenvolvimento de Banco de Dados | 26 | 27 | 27 | 80 |

### UC07 — Estatística Aplicada e Lógica Matemática (CH: 33h | 40 HA)

| Código | Disciplina | T1 HA | T2 HA | T3 HA | Total HA |
|---|---|---|---|---|---|
| D09-UC07 | Utilização da Estatística Aplicada e Lógica Matemática em IA | 13 | 14 | 13 | 40 |

---

## 2. Balanço de Carga T1

| Recurso | HA |
|---|---|
| Dias de aula T1 disponíveis (21 dias × 6 HA) | 126 |
| Currículo exige T1 (soma dos 9 HA T1) | 156 |
| **GAP** | **-30 HA** |

### Redistribuição do gap (-30 HA)

As 30 HA faltantes são redistribuídas para T2. No T1, cada disciplina opera com carga ajustada:

| Código | Disciplina | HA currículo T1 | HA real T1 | Deficit → T2 |
|---|---|---|---|---|
| D01-UC01 | Fundamentos de Computação | 13 | **13** | 0 |
| D02-UC01 | Inglês Instrumental | 13 | **13** | 0 |
| D03-UC01 | Fundamentos Matemáticos | 13 | **13** | 0 |
| D04-UC02 | Fundamentos e Conceitos de IA | 13 | **11** | +2 → T2 |
| D05-UC03 | Python | 26 | **20** | +6 → T2 |
| D06-UC04 | Arquitetura e GPU | 13 | **11** | +2 → T2 |
| D07-UC05 | Transformação Digital | 26 | **20** | +6 → T2 |
| D08-UC06 | Banco de Dados | 26 | **20** | +6 → T2 |
| D09-UC07 | Estatística Aplicada | 13 | **11** | +2 → T2 |
| **TOTAL** | | **156** | **132** | **24 → T2** |

> **Nota:** 132 > 126 — o buffer de 6 HA é coberto por **1 aula de reposição** agendada antes do fim do T1.  
> Aulas de reposição usam o prefixo `R`: `RA{NN}-D{NN}-UC{NN}.md`

---

## 3. Convenção de Nomes de Arquivo

| Tipo | Padrão | Exemplo |
|---|---|---|
| Slides de aula | `A{NN}-D{NN}-UC{NN}.md` | `A05-D05-UC03.md` |
| Exercícios | `A{NN}-D{NN}-UC{NN}-exercicios.md` | `A05-D05-UC03-exercicios.md` |
| Tarefa de casa | `A{NN}-tarefa.md` | `A05-tarefa.md` |
| Reposição | `RA{NN}-D{NN}-UC{NN}.md` | `RA07-D01-UC01.md` |
| Agentes | `d{NN}-uc{NN}-{slug}.agent.md` | `d05-uc03-python-para-ia.agent.md` |
| Contextos | `contexto-{slug}.md` | `contexto-python-para-ia.md` |

---

## 4. Composição Diária (Regras do Orquestrador)

```
Opção A — 3+2+1 (dia padrão):
  Bloco 1 (7h10–9h30):  3 HA → disciplina pesada  (D05, D07 ou D08)
  Bloco 2 (9h50–11h10): 2 HA → disciplina média   (D01, D04 ou D06)
  Bloco 3 (11h10–12h00):1 HA → disciplina leve    (D02, D03 ou D09)

Opção B — 3+3 (dia duplo pesado — máximo 1× por semana):
  Bloco 1 (7h10–9h30):  3 HA → disciplina pesada 1
  Bloco 2 (9h50–12h00): 3 HA → disciplina pesada 2

Opção C — 2+2+2 (revisão distribuída — dias de avaliação):
  Cada bloco de 2 HA para três disciplinas diferentes
```

Peso de cada disciplina:

| Peso | Disciplinas | HA/bloco |
|---|---|---|
| Pesada | D05-UC03, D07-UC05, D08-UC06 | 3 |
| Média | D01-UC01, D04-UC02, D06-UC04 | 2 |
| Leve | D02-UC01, D03-UC01, D09-UC07 | 1 |

---

## 5. Calendário T1 — Dias de Aula + Conteúdo Real

### A01 — 26/02 (Qui) ✅ Ministrada

| Disciplina | Conteúdo | HA |
|---|---|---|
| D04-UC02 | Demo ML (pixels→modelo), Parts 4 completa: Turing, história IA, ML, DL, NLP, robôs, carros autônomos, ética, LGPD | ~2 |
| D07-UC05 | 4ª Revolução Industrial, Big Data, IA em setores (saúde, varejo, indústria, agro), mercado de trabalho, apresentação do curso | ~2 |
| D01-UC01 | E→P→S, hardware vs software, CPU/GPU/RAM/SSD/SO, Windows, arquivos, atalhos, EX01–10, Calc 01–06 | ~1,5 |
| D02-UC01 | Vocabulário técnico básico (keyboard, file, save, folder…), ING 01–06, oral com objetos reais | ~0,5 |

### A02 — 27/02 (Sex) ✅ Ministrada

| Disciplina | Conteúdo | HA |
|---|---|---|
| D01-UC01 | Organização de arquivos, nomenclatura profissional, método 4 passos, pesquisa técnica, troubleshooting real, Calc (validação, formato condicional, planilha coletiva) | ~3 |
| D02-UC01 | ING 07–10 (completar comandos, quiz velocidade, nomear pastas, glossário funcional), 10 novos termos | ~2 |
| D05-UC03 | Menção às ferramentas: VS Code, Colab, GitHub, Jupyter — ambiente de trabalho do curso | ~0,5 |
| D07-UC05 | Trajetória de carreira, caso Mercado Livre logística, Alibaba warehouse, NVIDIA DRIVE | ~0,5 |

### A03 — 05/03 (Qui) ✅ Ministrada

| Disciplina | Conteúdo | HA |
|---|---|---|
| D04-UC02 | Definição IA, história (1943–hoje), ML (3 tipos: supervisionado/não-supervisionado/reforço), redes neurais, Deep Learning, NLP, robôs, carros autônomos, ética, LGPD | ~3 |
| D01-UC01 | Hardware vs software, SO, organização de arquivos, extensões de arquivo, atalhos, ferramentas do curso, Windows profissional | ~2 |
| D06-UC04 | CPU vs GPU (paralelismo vs IA), RAM, HD vs SSD, periféricos, comparativo de componentes | ~1 |

### A04 — 06/03 (Sex) ✅ Ministrada

| Disciplina | Conteúdo | HA |
|---|---|---|
| D05-UC03 | Python: variáveis, tipos (str/int/float/bool), print(), input(), operadores aritméticos, condicionais (if/elif/else), def/return, ecossistema Python (VS Code, Colab, GitHub, Jupyter) | ~2 |
| D01-UC01 | Continuação Windows profissional + terminal básico | ~1,5 |
| D02-UC01 | Vocab avançado de IA em inglês: NLP, Token, LLM, Backpropagation, Epoch, Embedding + 10 termos | ~1,5 |
| D04-UC02 | Vocabulário avançado de IA (conexão com Python) | ~1 |

### A05 — 12/03 (Qui) ⏳ Amanhã — Orquestrador decide

> Consultar `orquestrador-1ano.agent.md` com o pedido: "A05 12/03 — qual a composição ideal?"
> Sugestão provisória: D05-UC03 (3 HA, loops/listas), D03-UC01 (2 HA, início), D09-UC07 (1 HA, início)

### A06 — 13/03 (Sex) ⏳ A definir
### A07 — 19/03 (Qui) ⏳ A definir
### A08 — 20/03 (Sex) ⏳ A definir
### A09 — 26/03 (Qui) ⏳ A definir
### A10 — 27/03 (Sex) ⏳ A definir

---

### ❌ 02/04 (Qui) — Quinta-Feira Santa (feriado nacional)
### ❌ 03/04 (Sex) — Sexta-Feira da Paixão (feriado nacional)

---

### A11 — 09/04 (Qui) ⏳ A definir
### A12 — 10/04 (Sex) ⏳ A definir
### A13 — 16/04 (Qui) ⏳ A definir
### A14 — 17/04 (Sex) ⏳ A definir
### A15 — 23/04 (Qui) ⏳ A definir
### A16 — 24/04 (Sex) ⏳ A definir
### A17 — 30/04 (Qui) ⏳ A definir

---

### ❌ 01/05 (Sex) — Dia do Trabalho (feriado nacional)

---

### A18 — 07/05 (Qui) ⏳ A definir
### A19 — 08/05 (Sex) ⏳ A definir
### A20 — 14/05 (Qui) ⏳ A definir
### A21 — 15/05 (Sex) ⏳ FIM DO 1º TRIMESTRE

**Total: 21 dias de aula × 6 HA = 126 HA efetivos**

---

## 6. HA Consumido e Restante (estado em 11/03/2026)

| Código | Disciplina | HA real T1 | Gasto A01–A04 | Restante T1 | Urgência |
|---|---|---|---|---|---|
| D01-UC01 | Fundamentos de Computação | 13 | 8 | **5** | 🟡 Atenção |
| D02-UC01 | Inglês Instrumental | 13 | 4,5 | **8,5** | 🟢 OK |
| D03-UC01 | Fundamentos Matemáticos | 13 | 0 | **13** | 🔴 Não iniciou |
| D04-UC02 | Fundamentos e Conceitos de IA | 11 | 6 | **5** | 🟡 Atenção |
| D05-UC03 | Python | 20 | 2,5 | **17,5** | 🟢 OK |
| D06-UC04 | Arquitetura e GPU | 11 | 1 | **10** | 🟡 Atenção |
| D07-UC05 | Transformação Digital | 20 | 2,5 | **17,5** | 🟢 OK |
| D08-UC06 | Banco de Dados | 20 | 0 | **20** | 🔴 Não iniciou |
| D09-UC07 | Estatística Aplicada | 11 | 0 | **11** | 🔴 Não iniciou |
| **TOTAL** | | **132** | **24,5** | **107,5** | |

> **D03, D08 e D09 precisam iniciar nas próximas 2 aulas.**

---

## 7. Vocabulário em Inglês Já Coberto (D02-UC01)

Os seguintes termos foram introduzidos nas aulas A01–A04 dentro de D01-UC01 e D02-UC01. São base para as próximas aulas de Inglês Instrumental:

### A01 — Vocab básico de hardware/interface (10 termos)
`keyboard` · `mouse` · `screen` · `file` · `folder` · `save` · `desktop` · `application` · `button` · `menu`

### A02 — Vocab de organização/internet (10 termos)
`download` · `upload` · `keyword` · `search` · `browser` · `format` · `backup` · `cloud` · `network` · `interface`

### A04 — Vocab avançado de IA (10 termos)
`token` · `epoch` · `embedding` · `loss` · `gradient` · `neural network` · `layer` · `weight` · `model` · `pipeline`

**Total: 30 termos técnicos em inglês consolidados até A04**

---

## 8. Indicadores Curriculares T1 por Disciplina

### D01-UC01 — Fundamentos de Computação
| Ind. | Descrição | Status T1 |
|---|---|---|
| 1 | Diferencia conceitos de hardware e software, operando SO Windows para organizar arquivos, pastas e configurações básicas | 🔄 Em andamento (A01–A04) |
| 2 | Cria, edita, formata e imprime documentos digitais no Word, utilizando recursos de texto, tabelas, símbolos e layout | ⏳ Pendente |
| 3 | Aplica estratégias de edição e revisão para solucionar problemas de digitação e estrutura em documentos | ⏳ Pendente |

### D02-UC01 — Inglês Instrumental
| Ind. | Descrição | Status T1 |
|---|---|---|
| 1 | Reconhece vocabulário técnico em inglês presente em softwares, interfaces digitais e ambientes de programação | 🔄 Em andamento (A01, A02, A04) |
| 2 | Interpreta instruções simples em inglês em manuais, menus e tutoriais de tecnologia | ⏳ Pendente |

### D03-UC01 — Fundamentos Matemáticos
| Ind. | Descrição | Status T1 |
|---|---|---|
| 1 | Aplica operações fundamentais da aritmética e da álgebra em problemas relacionados à computação | ⏳ Não iniciado |
| 2 | Utiliza conceitos de lógica matemática para estruturar raciocínios e algoritmos simples | ⏳ Não iniciado |
| 3 | Emprega noções de conjuntos, funções e matrizes na organização e representação de informações | ⏳ Não iniciado |
| 4 | Reconhece padrões e sequências numéricas para apoiar a construção de algoritmos básicos | ⏳ Não iniciado |

### D04-UC02 — Fundamentos e Conceitos de IA
| Ind. | Descrição | Status T1 |
|---|---|---|
| 1 | Identifica conceitos e fundamentos de Inteligência Artificial | 🔄 Em andamento (A01, A03) |
| 2 | Classifica diferentes métodos, algoritmos e técnicas utilizadas em IA | 🔄 Em andamento (A03, A04) |

### D05-UC03 — Python
| Ind. | Descrição | Status T1 |
|---|---|---|
| 1 | Elabora código conforme funcionalidades e características do aplicativo, na linguagem Python | 🔄 Em andamento (A04) |
| 2 | Utiliza comandos de integração dos códigos construídos em Python, conforme estrutura projetada | ⏳ Pendente |

### D06-UC04 — Arquitetura e GPU
| Ind. | Descrição | Status T1 |
|---|---|---|
| 1 | Reconhece modelos aplicados em arquitetura de computadores e GPU | 🔄 Em andamento (A03) |
| 2 | Reconhece e aplica conceitos de Pipeline para GPU | ⏳ Pendente |

### D07-UC05 — Transformação Digital
| Ind. | Descrição | Status T1 |
|---|---|---|
| 1 | Compreende as aplicações dos fundamentos em transformação digital, demonstrado em práticas pedagógicas | 🔄 Em andamento (A01, A02) |
| 2 | Utiliza as ferramentas digitais de IA conforme boas práticas de mercado alinhadas à transformação digital | 🔄 Em andamento (A01) |
| 3 | Considera a segurança digital na transformação digital em uma organização empresarial | ⏳ Pendente |
| 4 | Compreende as rupturas das tecnologias emergentes para aplicação de práticas na transformação digital | ⏳ Pendente |

### D08-UC06 — Banco de Dados
| Ind. | Descrição | Status T1 |
|---|---|---|
| 1 | Propõe alteração no acesso aos dados, de acordo com os relacionamentos físicos e estrutura | ⏳ Não iniciado |
| 2 | Seleciona o SGBD de acordo com as necessidades da aplicação | ⏳ Não iniciado |
| 3 | Cria a estrutura física de banco de dados de acordo com os requisitos e modelagem | ⏳ Não iniciado |

### D09-UC07 — Estatística Aplicada
| Ind. | Descrição | Status T1 |
|---|---|---|
| 1 | Compreende e aplica funções matemáticas lineares | ⏳ Não iniciado |
| 2 | Compreende e aplica funções matemáticas polinomiais | ⏳ Não iniciado |
| 3 | Compreende e aplica funções matemáticas logarítmicas | ⏳ Não iniciado |
| 4 | Compreende e aplica funções matemáticas exponenciais | ⏳ Não iniciado |

---

## 9. Infraestrutura de Agentes

### Hierarquia

```
orquestrador-1ano.agent.md        ← leia primeiro: calendário + routing
│
├── d01-uc01-fundamentos-computacao.agent.md
├── d02-uc01-ingles-instrumental.agent.md
├── d03-uc01-fundamentos-matematicos.agent.md
├── d04-uc02-fundamentos-e-conceitos-de-ia.agent.md
├── d05-uc03-python-para-ia.agent.md
├── d06-uc04-arquitetura-computadores-gpu.agent.md
├── d07-uc05-transformacao-digital.agent.md
├── d08-uc06-banco-de-dados.agent.md
└── d09-uc07-estatistica-aplicada.agent.md
    │
    └── Cada um delega geração de slides para → slidev-senac.agent.md
```

### Arquivos de contexto (memória viva)

| Arquivo | Disciplina | Estado |
|---|---|---|
| `contexto-fundamentos-de-computacao.md` | D01-UC01 | ✅ A01–A04 registradas |
| `contexto-ingles-instrumental.md` | D02-UC01 | 🔄 Pré-carregado (A01–A04 via D01) |
| `contexto-fundamentos-matematicos.md` | D03-UC01 | ⏳ Zero aulas |
| `contexto-fundamentos-e-conceitos-de-ia.md` | D04-UC02 | 🔄 A01+A03+A04 registradas |
| `contexto-python-para-ia.md` | D05-UC03 | 🔄 A04 registrada |
| `contexto-arquitetura-computadores-gpu.md` | D06-UC04 | 🔄 A03 registrada |
| `contexto-transformacao-digital.md` | D07-UC05 | 🔄 A01+A02 registradas |
| `contexto-banco-de-dados.md` | D08-UC06 | ⏳ Zero aulas |
| `contexto-estatistica-aplicada.md` | D09-UC07 | ⏳ Zero aulas |

---

## 10. Issues GitHub — Sprint 1 (infraestrutura de agentes)

| Issue | Título | Status |
|---|---|---|
| #1–#8 | Sprint 1 T01–T08 (infra base) | ✅ Implementado |
| #9 | S1-T09 Sub-agent skills 01–06 | 🟡 Aberto |
| #10 | S1-T10 UC context stubs (arquitetura antiga) | ❌ Cancelado (wontfix) |
| S1-T10v2 | Orquestrador 1º Ano | 🔄 Em execução |
| S1-T11–T19 | Agentes D01–D09 | 🔄 Em execução |
| S1-T20–T28 | Contextos D01–D09 | 🔄 Em execução |
| S1-T29 | PROJETO-AULAS-1-TRIMESTRE.md | 🔄 Este arquivo |
| S1-T30 | Atualizar sync-to-template.mjs | 🔄 Em execução |
| S1-T31 | Atualizar copilot-instructions.md | 🔄 Em execução |
