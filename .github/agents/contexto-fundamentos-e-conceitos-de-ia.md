# Contexto — Fundamentos e Conceitos de IA (UC04)

**Código:** UC04  
**UC:** UC02 — Fundamentos e Conceitos de IA  
**Disciplina:** Fundamentos e Conceitos de Inteligência Artificial  
**Carga Total:** 33h (41 HA) | `T1: 13 HA (ajustado: 11) · T2: 14 HA · T3: 14 HA`

---

## Estado Geral

| Trim. | HA Alocado | HA Dado | HA Restante |
|---|---|---|---|
| T1 | 11 (ajustado) | 6 | 5 |
| T2 | 14 | 0 | 14 |
| T3 | 14 | 0 | 14 |

---

## Indicadores Curriculares

| Ind. | Descrição | Status T1 |
|---|---|---|
| 1 | Identifica conceitos e fundamentos de Inteligência Artificial | Em andamento |
| 2 | Classifica diferentes métodos, algoritmos e técnicas em IA | Em andamento |
| 3 | Compreende e utiliza resultados supervisionados, não supervisionados e por reforço (T2) | Pendente |
| 4 | Compreende e aplica questões éticas e impactos sociais relacionados ao uso de IA (T3) | Semeado |

---

## Resumo por Aula

| Aula | Data | HA | Conteúdo |
|---|---|---|---|
| A01 | 26/02/2026 | ~2 | Demo ML pixels→modelo, ML, DL, NLP, robôs autônomos, carros, ética, LGPD |
| A02 | 27/02/2026 | 0 | Não trabalhada |
| A03 | 05/03/2026 | ~3 | Definição formal de IA, história completa (1943→2024), ML supervisionado/não-sup./reforço, redes neurais, DL, NLP, ética, LGPD |
| A04 | 06/03/2026 | ~1 | Vocabulário avançado: NLP, Token, LLM, Backpropagation, Epoch, Embedding |

---

## Conteúdo Consolidado (Ind. 1 — não retornar ao mesmo nível)

### História e Definição (A01 + A03)
- Definição: "Inteligência Artificial é a capacidade de sistemas computacionais de executar tarefas que normalmente requerem inteligência humana"
- Linha do tempo: 1943 (McCulloch-Pitts) → 1950 (Turing Test) → 1956 (Dartmouth) → 1960s (LISP) → 1980s (Expert Systems) → 1990s (primeiro ML prático) → 2012 (AlexNet) → 2017 (Transformer) → 2022 (ChatGPT)
- Tipos de IA: IA Estreita (ANI), IA Geral (AGI), IA Superinteligente (ASI)

### Categorias de ML (A03)
- **Supervisionado:** labeled data → predição (classificação, regressão) — ex: spam, preço de imóveis
- **Não supervisionado:** unlabeled data → descoberta de padrões (clustering, redução dimensionalidade) — ex: segmentação de clientes
- **Reforço:** agente + ambiente + recompensa → política ótima — ex: AlphaGo, robôs

### Arquiteturas (A03)
- Redes neurais (neurônio artificial → camadas → rede)
- Deep Learning: redes com muitas camadas → padrões complexos
- NLP: processamento de linguagem natural → texto, fala, tradução

### Ética (A01 + A03 — semeado)
- LGPD: Lei Geral de Proteção de Dados — consentimento, finalidade, minimização
- Viés em IA: modelos refletem os dados de treino — dados enviesados → modelo enviesado
- Mencionados: deepfakes, desinformação, vigilância

---

## Vocabulário Introduzido (A04)

| Termo | Definição Resumida | Status |
|---|---|---|
| NLP (Natural Language Processing) | Subárea de IA que lida com texto e fala | Introduzido |
| Token | Unidade mínima de texto processada por LLMs | Introduzido |
| LLM (Large Language Model) | Modelo de linguagem treinado em escala (GPT, Gemini) | Introduzido |
| Backpropagation | Algoritmo de ajuste de pesos nas redes neurais | Introduzido |
| Epoch | Uma passagem completa pelos dados de treino | Introduzido |
| Embedding | Representação vetorial de dados (texto → números) | Introduzido |

---

## Próximos Tópicos (T1 restante — 5 HA)

**Prioridade: consolidar Ind. 2 (classificação de métodos/algoritmos)**

| Seq. | Tópico | HA |
|---|---|---|
| 1 | Algoritmos de classificação: Decision Trees, Random Forest, SVM | 2 |
| 2 | Algoritmos de clustering: K-Means, DBSCAN | 1 |
| 3 | Aprendizado por Reforço: casos de uso reais (AlphaGo, robótica) | 1 |
| 4 | Bias, fairness e impacto social — debate estruturado | 1 |

---

## Não Cobrir Novamente (já consolidado nível apresentação)

- Linha do tempo história da IA (A01 + A03)
- Definição geral de ML/DL/NLP (A03)
- Introdução ao Turing Test e Dartmouth Conference
- LGPD conceito inicial (mencionar, não reintroduzir)

---

## Regras para o Copilot

1. Verificar esta tabela "Não Cobrir Novamente" antes de qualquer geração
2. Ind. 2 é a prioridade — classificar e comparar algoritmos com profundidade
3. Toda aula de IA deve ter pelo menos 1 slide com código Python mostrando o algoritmo
4. Ética (semeada) — manter presente em debates, não em slides teóricos longos
5. Com apenas 5 HA restantes no T1, priorizar exercícios de classificação sobre teoria nova
