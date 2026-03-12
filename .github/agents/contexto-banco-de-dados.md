# Contexto — Desenvolvimento de Banco de Dados (D08-UC06)

**Código:** D08-UC06  
**UC:** UC06 — Desenvolvimento de Banco de Dados  
**Disciplina:** Banco de Dados  
**Carga Total:** 67h (80 HA) | `T1: 26 HA (ajustado: 20) · T2: 27 HA · T3: 27 HA`  
**Peso no dia:** Pesado (3 HA/bloco — sempre no Bloco 1)

---

## Estado Geral

| Trim. | HA Alocado | HA Dado | HA Restante |
|---|---|---|---|
| T1 | 20 (ajustado) | 0 | 20 |
| T2 | 27 | 0 | 27 |
| T3 | 27 | 0 | 27 |

---

## Indicadores Curriculares — Completos

| Ind. | Descrição | Trimestre | Status |
|---|---|---|---|
| 1 | Propõe alteração no acesso aos dados, de acordo com os relacionamentos físicos e estrutura | T1 | Pendente |
| 2 | Seleciona o Sistema de Gerenciamento de Banco de Dados (SGBD), de acordo com as necessidades da aplicação | T1 | Pendente |
| 3 | Cria a estrutura física de banco de dados, de acordo com os requisitos da aplicação e da modelagem de dados | T1–T2 | Pendente |
| 4 | Gerencia a permissão de acesso ao banco de dados, de acordo com o perfil do usuário e as políticas de acesso | T2 | Pendente |
| 5 | Cria e manipula consultas SQL de forma adequada para resolução de problemas | T2–T3 | Pendente |
| 6 | Cria e manipula armazenamento e backup de banco de dados | T3 | Pendente |

---

## Elementos de Competência (Conhecimentos) — Currículo Oficial

> Fonte: documento de competências do curso. Usar como referência ao sequenciar tópicos.

| Conhecimento | Trimestre sugerido |
|---|---|
| SGBD: conceito, estrutura, requisitos de software e hardware | T1 |
| Banco de dados: características, arquitetura relacional e não relacional | T1 |
| Modelos de BD: conceitual, lógico e físico | T1 |
| Análise de requisitos funcionais e não funcionais | T1 |
| Dados e domínios: tipos, conceito e aplicabilidade | T1 |
| Níveis de restrição de integridade: tabela, atributos e relacionamento | T1–T2 |
| SQL-DDL: `CREATE`, `ALTER`, `DROP`, `TRUNCATE` | T1–T2 |
| SQL-DCL: `USER`, `GRANT`, `REVOKE` | T2 |
| SQL-DQL: `SELECT` | T1–T2 |
| SQL-DML: `INSERT`, `DELETE`, `UPDATE` | T2 |
| Normalização; performance: índices, views, `JOIN` | T2–T3 |
| Serviço do mecanismo de BD: iniciar, parar, pausar, timeout, reinicialização | T2–T3 |
| Backup: restauração, conceitos, tipos | T3 |
| Armazenamento: importação e exportação de dados | T3 |

---

## Estratégia Pedagógica Central — Excel como Andaime

> **Decisão do professor (12/03/2026):** a disciplina de BD começa SEMPRE com analogias de Excel.
> Nunca abrir SQL direto. A sequência de andaimes é:
> 1. Excel que os alunos já conhecem → 2. Problema real com Excel caótico → 3. BD como solução → 4. SQL como linguagem do BD

**Mapa de analogias:**

| Conceito de BD | Analogia Excel | O que muda no BD |
|---|---|---|
| Tabela | Planilha (aba) | Estrutura rígida, tipagem por coluna |
| Coluna/campo | Coluna da planilha | Tem tipo fixo: TEXT, INT, DECIMAL… |
| Linha/registro | Linha da planilha | Cada linha é uma "entrada" de dados |
| Chave primária | Nenhum equivalente direto | ID único que nunca se repete |
| Chave estrangeira | Célula que referencia outra aba (=Aba!A2) | Ponteiro formal entre tabelas |
| SQL SELECT | Filtro / PROCV | Linguagem padronizada, não depende de mouse |
| SQL INSERT | Nova linha digitada | Comando explícito, auditável |
| SGBD | O próprio Excel | Software que gerencia o arquivo de dados |

---

## Resumo por Aula

| Aula | Data | HA | Conteúdo |
|---|---|---|---|
| A01–A05 | 26/02–12/03/2026 | 0 | Não trabalhada |
| A06 | 13/03/2026 | 3 | INÍCIO — ver abaixo |

---

## Aulas Realizadas

*(em branco — A06 é o primeiro contato)*

---

## Conceitos Consolidados (não reintroduzir no mesmo nível)

*(nenhum ainda — disciplina não iniciada)*

---

## Sequência Planejada T1 (20 HA) — com Andaime Excel

| Seq. | Tópico | HA | Ind. | Analogia Excel usada |
|---|---|---|---|---|
| 1 | O problema dos dados sem estrutura: Excel caótico → necessidade de BD | 1 | — | Planilha com dados duplicados, coluna "nome" com 3 formatos diferentes |
| 2 | O que é BD: tabelas, campos, registros, tipos de dado. Relacional vs NoSQL | 2 | 1, 2 | Planilha → tabela; aba → tabela separada; célula tipada |
| 3 | Chave primária e chave estrangeira: relacionamentos entre tabelas | 2 | 1 | =Aba!A2 no Excel vs FK formal |
| 4 | SGBDs: SQLite (zero instalação), PostgreSQL, MySQL, MongoDB — quando usar | 1 | 2 | "Excel é um SGBD? Mais ou menos..." |
| 5 | Modelagem conceitual: DER simplificado (retângulos e linhas) | 2 | 1, 3 | Diagrama de abas do Excel com setas |
| 6 | SQL-DDL: `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE` | 2 | 3 | Criar/renomear/deletar aba no Excel |
| 7 | SQL-DQL básico: `SELECT`, `FROM`, `WHERE`, `ORDER BY`, `LIMIT` | 3 | 3, 5 | Filtro e PROCV do Excel → SELECT com WHERE |
| 8 | SQL-DML: `INSERT INTO`, `UPDATE`, `DELETE` | 2 | 3 | Digitar linha, editar célula, deletar linha no Excel |
| 9 | Mini-projeto: criar BD de notas de alunos com SQLite — sem Python ainda | 3 | 3 | "Sua planilha de notas, mas em SQL" |
| 10 | Python + SQLite: `import sqlite3`, `cursor.execute()`, `fetchall()` | 2 | 1, 3 | Conexão pelo código em vez do mouse |

---

## Pré-requisitos dos Alunos

| Conceito | Origem | Nível |
|---|---|---|
| Planilhas Excel/Calc | UC01 A01–A04 | Reconhecimento / Introdutório |
| Tipos de dados (str, int, float) | UC05 A04–A05 | Introdutório |
| snake_case e nomenclatura profissional | UC05 + UC01 | Introdutório |
| Dados estruturados (tabelas) | UC01 (Calc) | Reconhecimento |

---

## Vocabulário de SQL/BD a Introduzir

| Termo | Definição | Status |
|---|---|---|
| tabela | estrutura bidimensional de dados (linhas × colunas) | Pendente |
| campo/coluna | atributo de uma entidade — tem tipo fixo | Pendente |
| registro/linha | uma instância/entrada de dados | Pendente |
| chave primária (PK) | identificador único de cada registro, nunca se repete | Pendente |
| chave estrangeira (FK) | campo que referencia a PK de outra tabela | Pendente |
| SGBD | software que gerencia o banco de dados | Pendente |
| SQL | linguagem padrão para consultar e manipular dados | Pendente |
| relacional | modelo baseado em tabelas com relacionamentos formais | Pendente |

---

## Feedback de Campo

| Data | Observação | Ação tomada |
|---|---|---|
| 2026-03-12 | Professor decide usar Excel como andaime pedagógico antes de qualquer SQL | Estratégia registrada como diretriz permanente da disciplina |

---

## Recomendações para o Próximo Encontro (A06)

> A06 é o PRIMEIRO contato da turma com BD.
> Começar com uma planilha Excel bagunçada projetada na tela — perguntar: "o que está errado aqui?"
> Só apresentar o conceito de SGBD e BD depois que a turma verbalizar o problema.
> Não abrir terminal ou SQL no primeiro bloco — o objetivo de A06 é instalar o modelo mental, não digitar código.
> Ambiente recomendado para SQL mais tarde: DB Browser for SQLite (visual, sem instalação complexa).
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
