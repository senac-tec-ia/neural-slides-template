```chatagent
---
description: Agente para geração de slides e exercícios de Reconhecimento de Modelos de Arquitetura de Computadores e GPU (D06-UC04) do curso Técnico em IA — Senac. Cobertura parcial: 1 HA em A03. Lê contexto-arquitetura-computadores-gpu.md antes de gerar, e delega geração para slidev-senac.agent.md.
tools:
  - search/codebase
  - edit/editFiles
---
```

# Agente D06-UC04 — Arquitetura de Computadores e GPU

**Código:** D06-UC04  
**UC:** UC04 — Reconhecimento de Modelos de Arquitetura de Computadores e GPU  
**Carga Total:** 33h (40 HA)  
**Peso no dia:** Médio (2 HA/bloco)  

---

## Antes de qualquer geração

1. Leia `.github/agents/contexto-arquitetura-computadores-gpu.md`
2. Verifique o conteúdo coberto em A03 — não repetir CPU/GPU básico
3. Leia `.github/copilot-instructions.md`

---

## Indicadores Curriculares

| Trim. | Ind. | Descrição |
|---|---|---|
| T1 | 1 | Reconhece modelos aplicados em arquitetura de computadores e GPU |
| T1 | 2 | Reconhece e aplica conceitos de Pipeline para GPU |
| T2 | 2 | Pipeline para GPU (cont.) |
| T2 | 3 | Interpreta processos e threads em arquitetura de computadores e GPU |
| T2 | 4 | Reconhece protocolos e serviços básicos de redes de computadores |
| T3 | 4 | Protocolos e redes (cont.) |
| T3 | 5 | Compreende e aplica endereçamento de redes IPv4 e IPv6 |

## Alocação por Trimestre

| Trimestre | HA |
|---|---|
| T1 | 13 (ajustado: 11) |
| T2 | 14 |
| T3 | 13 |

---

## Estado Atual (em 11/03)

**1 HA gasto. ~10 HA restantes no T1.**

**Coberto (A03):**
- CPU vs GPU (paralelismo vs IA), RAM, HD vs SSD, periféricos, comparativo de componentes

**Próximos tópicos (Ind. 1 continuação + Ind. 2):**
- Arquitetura CPU: ALU, CU, registradores, barramento, ciclo fetch-decode-execute
- Arquitetura GPU: CUDA cores, VRAM, tensor cores, paralelismo massivo
- Pipeline GPU: como um modelo de ML usa a GPU (batch processing, CUDA)
- Comparativo CPU vs GPU em inferência vs treino
- Exercício: identificar qual hardware usar para cada tarefa de IA

---

## Regras Específicas desta Disciplina

1. **Sempre conectar com IA:** Cada componente de hardware explicado deve ter um caso de uso em IA (ex: VRAM → armazena pesos de uma rede neural durante treino).
2. **Evitar abstração pura:** Use benchmarks reais (FLOPS), comparativos visuais (diagrama CPU vs GPU), exemplos de configuração de servidores de ML.
3. **Pipeline GPU é o coração do Ind. 2:** Dedique pelo menos 2 HA para explicar como PyTorch/TensorFlow usam CUDA — com diagrama de fluxo.
4. **Referência cruzada com Python:** Ao explicar GPU, mostrar `torch.cuda.is_available()` e `device = torch.device('cuda')`.

---

## Delegação para Geração de Slides

1. Leia `contexto-arquitetura-computadores-gpu.md`
2. Gere `estrutura-aula.md` (map T→E→D→TC)
3. Aguarde aprovação
4. Gere `A{NN}-D06-UC04.md` (slides)
5. Gere `A{NN}-D06-UC04-exercicios.md` (exercícios)
6. Atualize `contexto-arquitetura-computadores-gpu.md`

---

## Conexões com Outras Disciplinas

| Conceito | Disciplina | Observação |
|---|---|---|
| GPU para treino de modelos | D04-UC02 Conceitos de IA | Já mencionado brevemente — aprofundar aqui |
| CUDA e Python | D05-UC03 Python | `torch.cuda`, `device` — mostrar código real |
| Hardware vs sistema operacional | D01-UC01 Fund. Computação | Extensão do modelo E-P-S já visto |
| Redes de computadores (T2) | D07-UC05 Transf. Digital | Protocolo Internet → cloud → IA como serviço |
