# Contexto — Desenvolvimento de Banco de Dados (UC08)

**Código:** UC08  
**UC:** UC06 — Desenvolvimento de Banco de Dados  
**Disciplina:** Banco de Dados  
**Carga Total:** 67h (80 HA) | `T1: 26 HA (ajustado: 20) · T2: 27 HA · T3: 27 HA`

---

## Estado Geral

| Trim. | HA Alocado | HA Dado | HA Restante |
|---|---|---|---|
| T1 | 20 (ajustado) | 0 | 20 |
| T2 | 27 | 0 | 27 |
| T3 | 27 | 0 | 27 |

---

## Indicadores Curriculares

| Ind. | Descrição | Status T1 |
|---|---|---|
| 1 | Propõe alteração no acesso aos dados de acordo com os relacionamentos físicos e estrutura | Pendente |
| 2 | Seleciona o SGBD de acordo com as necessidades da aplicação | Pendente |
| 3 | Cria a estrutura física de banco de dados de acordo com os requisitos e modelagem | Pendente |
| 4 | Gerencia a permissão de acesso ao banco de dados conforme perfil do usuário (T2) | Pendente |
| 5 | Cria e manipula consultas SQL para resolução de problemas (T2–T3) | Pendente |
| 6 | Cria e manipula armazenamento e backup de banco de dados (T3) | Pendente |

---

## Resumo por Aula

| Aula | Data | HA | Conteúdo |
|---|---|---|---|
| A01 | 26/02/2026 | 0 | Não trabalhada |
| A02 | 27/02/2026 | 0 | Não trabalhada |
| A03 | 05/03/2026 | 0 | Não trabalhada |
| A04 | 06/03/2026 | 0 | Não trabalhada |

**Disciplina não iniciada até A04. Iniciar o quanto antes — T1 termina 15/05.**

---

## Pré-requisitos dos Alunos

Conceitos que os alunos já têm de outras disciplinas (relevantes para BD):
- **CSV e planilhas:** Visto em UC01 (Excel/Calc) — ponte natural para "tabelas de banco de dados"
- **snake_case:** Consolidado em D01 — usar na nomenclatura de tabelas/campos
- **Python básico:** Variáveis, tipos, operadores, def/return (A04 de UC05)
- **Conceito de dados estruturados:** Implícito no uso do Excel

---

## Sequência Planejada T1 (20 HA)

| Seq. | Tópico | HA | Ind. |
|---|---|---|---|
| 1 | O que é BD: problema sem BD (Excel caótico) vs BD estruturado | 1 | — |
| 2 | Modelo relacional: tabelas, campos, registros, chave primária, chave estrangeira | 2 | 1 |
| 3 | Modelagem: DER simples (Entidade-Relacionamento) — ex: dataset de modelos de ML | 3 | 1 |
| 4 | SGBDs: SQLite (sem instalação), PostgreSQL, MySQL, MongoDB — quando usar cada um | 2 | 2 |
| 5 | SQL básico: `CREATE TABLE`, `INSERT INTO`, `SELECT * FROM` | 3 | 3 |
| 6 | SQL intermediário: `WHERE`, `ORDER BY`, `LIMIT`, `GROUP BY` básico | 3 | 3 |
| 7 | `JOIN` simples: INNER JOIN para consultas relacionais | 2 | 3 |
| 8 | Python + SQLite: `import sqlite3`, `cursor.execute()`, `fetchall()` | 2 | 1, 3 |
| 9 | Pandas + BD: `read_sql()`, conectar resultado de query com DataFrame | 2 | 1, 3 |

---

## Vocabulário de SQL/BD a Introduzir

| Termo | Definição | Status |
|---|---|---|
| tabela | estrutura bidimensional de dados (linhas × colunas) | Pendente |
| campo/coluna | atributo de uma entidade | Pendente |
| registro/linha | uma instância de dados | Pendente |
| chave primária | identificador único de cada registro | Pendente |
| chave estrangeira | campo que referencia uma PK de outra tabela | Pendente |
| SGBD | Sistema de Gerenciamento de Banco de Dados | Pendente |
| SQLite | BD relacional embutido — arquivo único `.db` | Pendente |
| query | consulta SQL | Pendente |
| SELECT | comando SQL para recuperar dados | Pendente |
| JOIN | operação de combinação entre tabelas | Pendente |

---

## Regras para o Copilot

1. **Primeira aula:** Começar com "o problema antes do BD" — planilha caótica vs BD estruturado
2. **SQLite sempre primeiro:** Funciona no Google Colab sem instalação — contexto de IA
3. **Python + SQL desde cedo:** Mostrar `sqlite3` nas primeiras aulas de SQL
4. **snake_case para tudo:** tabelas = `modelo_ml`, `resultado_treino`; campos = `epoch_num`, `loss_value`
5. **Dataset de IA como contexto:** As tabelas de exercícios são sempre de resultados de modelos, logs de predição, catálogo de datasets
6. **Segurança:** Conectar com LGPD (D07) sempre que falar em permissões e acesso a dados
