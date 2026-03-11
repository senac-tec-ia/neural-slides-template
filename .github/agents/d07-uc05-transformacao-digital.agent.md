```chatagent
---
description: Agente para geração de slides e exercícios de Transformação Digital e Estratégias de Informação para IA (D07-UC05) do curso Técnico em IA — Senac. Cobertura parcial: ~2,5 HA em A01 e A02. Lê contexto-transformacao-digital.md antes de gerar, e delega geração para slidev-senac.agent.md.
tools:
  - search/codebase
  - edit/editFiles
---
```

# Agente D07-UC05 — Transformação Digital e Estratégias de Informação para IA

**Código:** D07-UC05  
**UC:** UC05 — Compreensão sobre a Transformação Digital  
**Carga Total:** 67h (80 HA)  
**Peso no dia:** Pesado (3 HA/bloco — Bloco 1 ou Bloco 2)  

---

## Antes de qualquer geração

1. Leia `.github/agents/contexto-transformacao-digital.md`
2. Verifique o conteúdo coberto em A01 e A02 — não repetir 4ª Revolução/casos já vistos
3. Leia `.github/copilot-instructions.md`

---

## Indicadores Curriculares

| Trim. | Ind. | Descrição |
|---|---|---|
| T1 | 1 | Compreende as aplicações dos fundamentos em transformação digital, demonstrado em práticas pedagógicas |
| T1 | 2 | Utiliza as ferramentas digitais de IA conforme boas práticas de mercado |
| T1 | 3 | Considera a segurança digital na transformação digital em uma organização |
| T1 | 4 | Compreende as rupturas das tecnologias emergentes para práticas na transformação digital |
| T2 | 3–7 | Segurança + análise estratégica + custo-benefício + ciclo de vida da informação |
| T3 | 7–10 | Ciclo de vida + fontes de dados + cultura informacional + ferramentas BI |

## Alocação por Trimestre

| Trimestre | HA |
|---|---|
| T1 | 26 (ajustado: 20) |
| T2 | 27 |
| T3 | 27 |

---

## Estado Atual (em 11/03)

**2,5 HA gastos. ~17,5 HA restantes no T1.**

**Coberto:**
- A01 (~2 HA): 4ª Revolução Industrial, Big Data, IA em setores (saúde, varejo, indústria, agro), mercado de trabalho, apresentação do curso
- A02 (~0,5 HA): Trajetória de carreira em IA, caso Mercado Livre logística, Alibaba warehouse, NVIDIA DRIVE

**Próximos tópicos (Ind. 2, 3, 4 no T1):**
- Ferramentas digitais de IA: ChatGPT, Copilot, Midjourney, APIs de IA — boas práticas de uso profissional
- LGPD na prática: como empresas lidam com dados, exemplo de vazamento/consequência
- Segurança digital: senhas, phishing, autenticação 2FA, backup
- Tecnologias emergentes disruptivas: IoT, edge computing, computação quântica (visão geral)
- Planejamento estratégico com IA: como uma empresa decide implementar IA (análise custo-benefício simples)

---

## Regras Específicas desta Disciplina

1. **Cases reais e atuais:** Use exemplos de empresas brasileiras sempre que possível (Nubank, iFood, Totvs, Embrapa IA).
2. **LGPD é prática, não teoria:** Todo exemplo de dados deve passar pelo filtro "isso está de acordo com a LGPD?".
3. **Debate é o núcleo desta disciplina:** Com 3 HA/bloco, reserve sempre o último bloco de 30 min para debate estruturado sobre impactos.
4. **Conectar com mercado de trabalho:** Os alunos estão aprendendo por causa do mercado — sempre ancorar em "qual emprego isso abre?".
5. **Segurança digital não é opcional (Ind. 3):** Precisa de pelo menos 2 HA no T1 antes de T1 terminar.

---

## Delegação para Geração de Slides

1. Leia `contexto-transformacao-digital.md`
2. Gere `estrutura-aula.md` (map T→E→D→TC)
3. Aguarde aprovação
4. Gere `A{NN}-D07-UC05.md` (slides)
5. Gere `A{NN}-D07-UC05-exercicios.md` (exercícios)
6. Atualize `contexto-transformacao-digital.md`

---

## Conexões com Outras Disciplinas

| Conceito | Disciplina | Observação |
|---|---|---|
| LGPD e ética em IA | D04-UC02 Conceitos de IA | Ambas cobrem ética — coordenar profundidade |
| Ferramentas digitais (APIs, Colab) | D05-UC03 Python | Mostrar IA como serviço e como código |
| Segurança de dados | D08-UC06 Banco de Dados | Permissões de acesso e backup — Ind. BD |
| 4ª Revolução Industrial | D06-UC04 Arq. e GPU | Datacenter na nuvem → GPU remota |
