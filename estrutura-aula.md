# Estrutura da Aula — Mapeamento Completo
**Arquivo:** `slides.md` | **Última revisão:** 2026-03-04
**Total estimado de slides Slidev:** ~183

> Este arquivo é o PRÉ-DOCUMENTO de geração. Deve ser revisado e aprovado antes de qualquer modificação no `slides.md`.
> Cada linha representa uma unidade lógica de slide (pares 1/2 + 2/2 são agrupados em uma única entrada quando faz sentido).

---

## Legenda de Tags

| Tag | Significado |
|---|---|
| `[TEORIA]` | Slide expositivo de conteúdo teórico |
| `[DEBATE]` | Pergunta aberta para debate coletivo ou brainstorming |
| `[EXERCICIO]` | Atividade individual ou em dupla com entrega ou resposta |
| `[DINAMICA]` | Atividade interativa, jogo, roleplay ou dinâmica de grupo |
| `[ATIV AVALIATIVA]` | Atividade com critério de avaliação formal (Kahoot, entrega, etc.) |
| `[TAREFA DE CASA]` | Atividade para fazer fora da aula |

---

## SECAO 1 — Fundamentos de Inteligência Artificial
**Slides: ~2 a ~58** | Tópico principal: Conceitos, história e técnicas de IA

| Slide(s) | Título | Tag | Resumo |
|---|---|---|---|
| 2 | Parte 4 — Fundamentos de IA (divisor) | `[TEORIA]` | Slide de transição, abertura do bloco de IA |
| 3 | O Que é Inteligência Artificial? | `[TEORIA]` | Definição de IA, IA Fraca vs IA Forte, tabela comparativa |
| 4 | IA Fraca vs IA Forte | `[TEORIA]` | Aprofundamento visual com imagem: Narrow AI x AGI, exemplos cotidianos |
| 5 | Alan Turing: O Pai da IA | `[TEORIA]` | Biografia condensada: Bombe, Enigma, artigo de 1950, perseguição e legado |
| 6–7 | O Teste de Turing (1/2 e 2/2) | `[TEORIA]` | Mecanismo do teste (3 participantes) + casos reais: Eugene Goostman, Google Duplex, ChatGPT |
| 8 | O Cérebro e a Máquina | `[TEORIA]` | McCulloch e Pitts (1943): neurônio como função matemática, origem das redes neurais |
| 9 | Marco 1943 — McCulloch e Pitts | `[TEORIA]` | Card cronológico: primeiro modelo matemático do neurônio |
| 10 | Marco 1950 — Alan Turing | `[TEORIA]` | Card cronológico: "Podem as Máquinas Pensar?" e o Teste de Turing |
| 11 | Marco 1956 — Dartmouth | `[TEORIA]` | Card cronológico: nascimento oficial do termo "Inteligência Artificial" |
| 12 | Marco 1959 — Arthur Samuel | `[TEORIA]` | Card cronológico: primeiro programa de Machine Learning (jogo de damas) |
| 13 | Marco 1961 — Unimate | `[TEORIA]` | Card cronológico: primeiro robô industrial na General Motors |
| 14 | Marco 1965 — ELIZA | `[TEORIA]` | Card cronológico: primeiro chatbot da história (MIT) |
| 15 | Marco 1966 — Visão Computacional | `[TEORIA]` | Card cronológico: primeiras experiências de visão computacional no MIT |
| 16 | Marco 1969 — Stanford Cart | `[TEORIA]` | Card cronológico: primeiro carro controlado por computador (McCarthy) |
| 17 | Dartmouth 1956: O Nascimento da IA | `[TEORIA]` | Contexto histórico expandido: objetivo declarado, Logic Theorist |
| 18 | O Inverno da IA: Por Que Falhou? | `[TEORIA]` | Queda dos financiamentos, promessas excessivas, lições aprendidas |
| 19 | Geoffrey Hinton: O Homem que Nao Desistiu | `[TEORIA]` | Persistência durante o inverno da IA; biografia e impacto de longo prazo |
| 20 | Como uma Rede Neural Aprende a Acertar | `[TEORIA]` | Backpropagation explicado por analogia (dardos de olhos vendados) |
| 21–22 | 1986: O Artigo que Ninguém Ouviu (1/2 e 2/2) | `[TEORIA]` | Problema da época + solução de Hinton + virada de 2012 com AlexNet |
| 23 | 2018: O Nobel da Computação | `[TEORIA]` | Prêmio Turing para Hinton, LeCun e Bengio; lição de perseverança |
| 24 | GPUs: O Hardware que Mudou a IA | `[TEORIA]` | CPU vs GPU: núcleos, paralelismo, papel essencial no treino de redes neurais |
| 25 | Linha do Tempo 1986 a 2012 | `[TEORIA]` | Backpropagation, Deep Blue, Watson, AlexNet em ordem cronológica |
| 26 | Linha do Tempo 2016 a Hoje | `[TEORIA]` | AlphaGo, ChatGPT, IA generativa transformando indústrias |
| 27 | Onde Estamos Hoje | `[TEORIA]` | IA ubíqua mas ainda Fraca; Google, Meta, Apple, chip neural em smartphones |
| 28 | O Que Sao Dados para a IA? | `[TEORIA]` | Dados como matéria-prima; unidades de medida (bit ao ZB) com equivalentes práticos |
| 29 | Dados Estruturados vs Nao Estruturados | `[TEORIA]` | 20% estruturado x 80% não estruturado; exemplos de cada tipo |
| 30 | Big Data no Dia a Dia | `[TEORIA]` | Tipos de dados gerados por ações digitais cotidianas; escala em minutos |
| 31 | A Jornada dos Dados em um Projeto de IA | `[TEORIA]` | CRISP-DM simplificado em 6 etapas; "garbage in, garbage out" |
| 32 | Como as Máquinas Aprendem? | `[TEORIA]` | Introdução ao Machine Learning: aprender com experiência sem regras explícitas |
| 33 | O Jogo de Damas de Arthur Samuel | `[TEORIA]` | História do primeiro programa de ML (1959): aprender jogando |
| 34 | Aprendizado Supervisionado | `[TEORIA]` | Aprende com rótulos (gabarito); exemplos: Gmail, Face ID, score de crédito |
| 35 | Aprendizado Nao Supervisionado | `[TEORIA]` | Sem rótulos, descobre padrões sozinho; clustering; segmentação de clientes |
| 36 | Aprendizado por Reforco | `[TEORIA]` | Tentativa, erro e recompensas; AlphaGo, OpenAI Five, robótica |
| 37 | Os Três Tipos de Machine Learning | `[TEORIA]` | Tabela comparativa: quando usar supervisionado, não supervisionado e por reforço |
| 38 | O Que é uma Rede Neural? | `[TEORIA]` | Introdução: inspiração no cérebro, 86 bilhões de neurônios, aprendizado de padrões |
| 39 | Do Neurônio Biológico ao Artificial | `[TEORIA]` | Dendrites → corpo celular → axônio vs entradas → pesos → saída; Perceptron (Rosenblatt, 1957) |
| 40 | Camadas: Entrada, Oculta e Saida | `[TEORIA]` | Estrutura em camadas, hierarquia de percepção, o que é "Deep" Learning |
| 41 | Deep Learning: Aprendizado Profundo | `[TEORIA]` | Por que é revolucionário: feature learning automático, AlexNet 2012 |
| 42 | Diferentes Redes para Diferentes Problemas | `[TEORIA]` | CNN para imagens (Face ID, diagnóstico) vs RNN para texto/fala (Translate, ChatGPT) |
| 43 | Deep Learning em Acao | `[TEORIA]` | Casos reais: Alzheimer 6 anos antes, câncer de pele, energia eólica (DeepMind) |
| 44 | IA e Linguagem: NLP | `[TEORIA]` | Introdução ao NLP: entender, interpretar e gerar linguagem humana |
| 45 | O Que é NLP? | `[TEORIA]` | Complexidade da linguagem humana; ambiguidade, ironia; tarefas do NLP |
| 46 | Siri, Alexa e ChatGPT | `[TEORIA]` | Assistentes de voz vs modelos generativos: diferenças de arquitetura e escala |
| 47 | Como os Chatbots Funcionam | `[TEORIA]` | Pipeline básico de chatbot: intenção, resposta, aprendizado com feedback |
| 48 | GPT: Geracao de Texto pela IA | `[TEORIA]` | GPT-2 (2019) e ChatGPT/GPT-4: previsão de próxima palavra, escala e impacto |
| 49 | IA e Robos Fisicos | `[TEORIA]` | Transição: IA do digital para o mundo físico com robôs |
| 50 | Robos com IA: De Unimate ao Cobot | `[TEORIA]` | Evolução: Unimate (1961), Flippy (2019), Cobots; logística Amazon |
| 51 | Carros Autonomos: Os 5 Niveis | `[TEORIA]` | Tabela SAE de autonomia do nível 0 ao 5; exemplos reais em cada nível |
| 52 | Tesla e Waymo | `[TEORIA]` | Dados reais de frota coletiva (Tesla) e táxi autônomo em Phoenix (Waymo) |
| 53 | Ética na Inteligência Artificial | `[TEORIA]` | Slide de transição: IA é poderosa e perigosa se mal usada |
| 54 | Viés Algorítmico: Quando a IA Erra | `[TEORIA]` | Exemplos Pinterest e Target; por que viés acontece; impacto em rostos negros |
| 55 | Privacidade e LGPD | `[TEORIA]` | Lei 13.709/2018: princípios de finalidade, necessidade, consentimento, segurança; Cambridge Analytica |
| 56 | IA Responsável: Os 5 Princípios | `[TEORIA]` | Transparência, justiça, privacidade, responsabilidade, robustez; ética como competência técnica |
| 57 | IA e o Futuro dos Empregos | `[TEORIA]` | 97 milhões de novos empregos (WEF); paradoxo: IA elimina e cria funções |
| 58 | Humanos + IA: A Parceria que Vence | `[TEORIA]` | O profissional como ponte; o que IA faz melhor x o que humano mantém |

---

## SECAO 2 — Fundamentos de Computação (Teoria)
**Slides: ~59 a ~76** | Tópico principal: Hardware, software e ambiente computacional

| Slide(s) | Título | Tag | Resumo |
|---|---|---|---|
| 59 | Parte 5 — Fundamentos de Computação (divisor) | `[TEORIA]` | Abertura do bloco: base que todo profissional de tecnologia precisa dominar |
| 60 | O Computador é Como um Escritório | `[TEORIA]` | Analogia: mesa=RAM, gavetas=SSD, funcionário=CPU, manual=SO |
| 61 | A Regra de Ouro da Computação | `[TEORIA]` | Modelo Entrada, Processamento e Saída com exemplos em tabela |
| 62 | O Que é Hardware? | `[TEORIA]` | Definição, exemplos e analogia com o corpo humano |
| 63 | O Que é Software? | `[TEORIA]` | Definição, exemplos e analogia da partitura musical |
| 64 | Hardware vs Software: Comparacao Direta | `[TEORIA]` | Tabela comparativa completa: pode ser tocado, peso, alteração, exemplos |
| 65 | O Processador: CPU | `[TEORIA]` | Clock, núcleos, cache, fabricantes Intel/AMD; analogia do gerente |
| 66 | A GPU: O Motor da IA | `[TEORIA]` | Tabela CPU vs GPU; analogia artesão vs linha de produção; papel no treino de IA |
| 67 | Memória RAM | `[TEORIA]` | Mesa de trabalho temporária: volatilidade, velocidade, quantidades por uso em IA |
| 68 | Armazenamento: HD vs SSD | `[TEORIA]` | Tabela comparativa: velocidade, resistência, custo; analogia gaveta vs post-it |
| 69 | Periféricos: Entrada e Saída | `[TEORIA]` | Classificação em três colunas: entrada, saída, entrada/saída |
| 70 | O Sistema Operacional | `[TEORIA]` | Gerente geral do escritório; tabela SO por uso: Windows, Linux, macOS, Android |
| 71 | Windows: Como um Profissional | `[TEORIA]` | Elementos essenciais com v-clicks: área de trabalho, terminal, explorador |
| 72 | Organização de Arquivos e Pastas | `[TEORIA]` | Boas práticas: snake_case, sem acentos, organizar por projeto; tabela errado vs certo |
| 73 | Extensões de Arquivo | `[TEORIA]` | Tabela: .py, .ipynb, .csv, .json, .pkl, .xlsx, .zip e quando usar cada uma |
| 74 | Atalhos de Teclado Essenciais | `[TEORIA]` | Dois grupos: operações básicas e navegação no Windows |
| 75 | Ferramentas do Profissional de IA | `[TEORIA]` | No laboratório (VS Code, Python, LibreOffice, Git) e online (Colab, GitHub, Kaggle, Hugging Face) |
| 76 | Python e o Ambiente de Desenvolvimento | `[TEORIA]` | Por que Python; tabela de ferramentas e para que serve cada uma |

---

## SECAO 3 — Conectando os Dois Tópicos
**Slides: ~77 a ~104** | Tópico principal: Síntese IA + Computação + Exercícios iniciais

| Slide(s) | Título | Tag | Resumo |
|---|---|---|---|
| 77 | Parte 6 — Conectando Tudo (divisor) | `[TEORIA]` | Abertura de síntese: de onde viemos e para onde vamos |
| 78 | Por Que Fundamentos Importam para a IA? | `[TEORIA]` | Cadeia de dependência: hardware → SO → terminal → Python → ML → Deep Learning → IA |
| 79 | Hardware e IA: A Relacao Direta | `[TEORIA]` | Tabela: CPU, GPU, RAM e SSD com papel específico em projeto de IA |
| 80 | A Cadeia Completa do Técnico em IA | `[TEORIA]` | Imagem + narração da cadeia fundamentos → solução real de IA |
| 81 | O Caminho Pela Frente | `[TEORIA]` | Primeiros passos agora + próximas etapas do curso (sequência pedagógica) |
| 82 | Recapitulando | `[DEBATE]` | Brainstorm de fechamento: 8 pontos-chave da aula em formato de lista |
| 83 | Recursos para Continuar Aprendendo | `[TEORIA]` | Links YouTube e plataformas (Kaggle, Scikit-learn, Pandas) |
| 84 | Referências e Recursos | `[TEORIA]` | Documentação, ferramentas do curso e leitura recomendada (Russell & Norvig, Geron) |
| 85 | AULA 01: Divisor de Exercícios Práticos | `[TEORIA]` | Divisor de bloco: Fundamentos da Computação + Nivelamento |
| 86–87 | Exercício 01: Hardware ou Software? | `[EXERCICIO]` | Classificar 10 itens como H ou S; nível 1 (reconhecimento) |
| 88 | Exercício 02: Identificar Hardware do Computador | `[EXERCICIO]` | Abrir Gerenciador de Dispositivos e preencher tabela com dados reais; nível 2 |
| 89 | Conceito: Entrada, Processamento e Saída | `[TEORIA]` | Revisão visual do modelo E→P→S com tabela de exemplos |
| 90 | Exercício 03: E→P→S | `[EXERCICIO]` | Completar tabela de 5 sistemas digitais com Entrada, Processamento e Saída; nível 3 |
| 91 | Debate 01: E→P→S ao Redor de Você | `[DEBATE]` | Pergunta: existe sistema digital que NAO siga E→P→S? |
| 92–93 | Exercício 04: Crie a Estrutura do Projeto | `[EXERCICIO]` | Criar pasta SENAC-TecIA com subpastas e README.txt; nível 2 |
| 94–95 | Exercício 05: Por Que snake_case Importa? | `[EXERCICIO]` | Demo terminal: arquivo com espaço vs snake_case; nível 4 (raciocínio) |
| 96 | Exercício 06: RAM ou Armazenamento? | `[EXERCICIO]` | Editar README sem salvar e responder perguntas sobre RAM vs SSD; nível 4 |
| 97 | Debate 02: RAM, SSD e Nomenclatura Profissional | `[DEBATE]` | Reflexão sobre ações práticas nos exercícios 04 a 06 |
| 98 | Exercício 07: Você é a CPU! | `[DINAMICA]` | Professor dá instruções como programa; alunos executam sequencialmente como CPUs |
| 99–100 | Exercício 08: Análise em Dupla | `[EXERCICIO]` | 5 perguntas com justificativa técnica obrigatória; nível 4 e 5 |
| 101 | Exercício 09: Monte o Computador Ideal para IA | `[EXERCICIO]` | Especificar CPU, GPU, RAM, armazenamento e SO com justificativa técnica; nível 5 |
| 102 | Debate 03: Hardware para IA — O Que Importa? | `[DEBATE]` | Comparar configurações das duplas; discutir Linux em servidores de IA |
| 103–104 | Exercício 10: Especificações do Laboratório | `[EXERCICIO]` | Abrir Gerenciador de Tarefas e registrar especificações reais em arquivo TXT |

---

## SECAO 4 — Prática com LibreOffice Calc
**Slides: ~105 a ~126** | Tópico principal: Planilhas, dados e organização profissional

| Slide(s) | Título | Tag | Resumo |
|---|---|---|---|
| 105 | LibreOffice Calc: Bloco de Prática (header) | `[TEORIA]` | Divisor do bloco B: 10 exercícios Calc em arquivo único de projeto |
| 106–107 | Calc 01: A Primeira Planilha do Projeto | `[EXERCICIO]` | Criar aba Turma com dados reais; negrito no cabeçalho; salvar .xlsx; nível 1 |
| 108–109 | Calc 02: Classificacao de Dispositivos | `[EXERCICIO]` | Adicionar aba Dispositivos com coloração H=azul e S=verde; nível 2 |
| 110–111 | Calc 03: Hardware do Laboratório | `[EXERCICIO]` | Adicionar aba Hardware-Lab com dados do Exercício 02; coluna "Suficiente para IA?"; nível 2 |
| 112 | Debate Calc 01 | `[DEBATE]` | Por que dividir em abas? O que dados desorganizados causam em modelos? |
| 113–114 | Calc 04: Exportar como CSV | `[EXERCICIO]` | Exportar aba como .csv; abrir no Bloco de Notas; perguntas sobre diferença .xlsx vs .csv; nível 3 |
| 115–116 | Calc 05: Softwares do Dia a Dia | `[EXERCICIO]` | Aba com 10+ softwares, categorias, hardware necessário, ordenar por categoria; nível 2 |
| 117–118 | Calc 06: Inventário do Laboratório | `[EXERCICIO]` | Aba com dados reais da sala coletados com o professor; coluna "Suficiente para IA?"; nível 3 |
| 119 | Debate Calc 02 | `[DEBATE]` | Dados reais vs inventados; "garbage in, garbage out"; primeira etapa do CRISP-DM |
| 120–121 | Calc 07: Classificar e Filtrar | `[EXERCICIO]` | Ordenar por Estado; AutoFiltro por critério; congelar cabeçalho; nível 2 |
| 122 | Calc 08: Auditoria de Dados em Dupla | `[EXERCICIO]` | Comparar planilha com colega; identificar 3 divergências; consensuar versão correta; nível 4 |
| 123 | Calc 09: Planilha Coletiva da Turma | `[DINAMICA]` | Secretário cria arquivo compartilhado; todos colam dados; discutir padronização de colunas |
| 124 | Debate Calc 03 | `[DEBATE]` | Por que padronizar nomes de colunas antes de juntar dados? Diferença entre decisao por dados vs chute |
| 125–126 | Calc 10: Formatacao Profissional | `[EXERCICIO]` | Cabeçalho azul escuro, linhas zebra, bordas, largura ideal; apresentação com dados corretos; nível 3 |

---

## SECAO 5 — Inglês Técnico
**Slides: ~127 a ~163** | Tópico principal: Vocabulário técnico em inglês (3 estágios progressivos)

| Slide(s) | Título | Tag | Resumo |
|---|---|---|---|
| 127–128 | Vocabulário Técnico Essencial | `[TEORIA]` | Tabela de 12 termos: hardware, software, file, folder, save, open, close, keyboard, screen, processor, memory |
| 129–130 | ING 01: Reconheca os Termos | `[EXERCICIO]` | Traduzir 10 termos sem consulta; estágio 1 (reconhecimento); nível 1 |
| 131–132 | ING 02: Una as Palavras | `[EXERCICIO]` | Ligar 10 termos em inglês ao equivalente em português; nível 1 |
| 133 | ING 03: Aponte e Diga em Inglês | `[DINAMICA]` | Oral com objetos reais; Rodada 2: aluno aponta e pergunta ao colega; nível 1 |
| 134 | Debate ING 01 | `[DEBATE]` | Por que nomes de hardware sao iguais em PT e EN? Como lida com mensagem de erro em inglês? |
| 135–136 | ING 04: Termo para Funcao | `[EXERCICIO]` | Escrever função de cada termo em no máximo 5 palavras; estágio 2; nível 2 |
| 137–138 | ING 06: Vocabulário nas Interfaces Reais | `[EXERCICIO]` | Localizar File, Save, Open, Folder, Close nos programas do laboratório; nível 3 |
| 139 | Debate ING 02 | `[DEBATE]` | Qual termo foi mais fácil de localizar? O que escrever em 5 palavras ensinou sobre documentação técnica? |
| 140–141 | ING 07: Complete o Comando (1 e 2) | `[EXERCICIO]` | 10 lacunas com banco de palavras em inglês; escolha técnica, nao tradução; nível 3 |
| 142–143 | ING 08: Quiz de Velocidade PT para EN | `[EXERCICIO]` | Traduzir 10 termos do português para o inglês sem consulta; nível 2 |
| 144–145 | ING 09: Nomeie Seu Projeto em Inglês | `[EXERCICIO]` | Equivalentes em inglês para as pastas do SENAC-TecIA; nível 3 |
| 146 | Debate ING 03 | `[DEBATE]` | Diferença entre ING01 e ING09? O projeto fala inglês? Onde mais aparece inglês no curso? |
| 147–148 | ING 10: Glossário em Inglês | `[EXERCICIO]` | Criar entradas no glossario-ing-aula01.txt com descrição funcional em inglês (3 a 6 palavras); nível 4 |

---

## SECAO 6 — Atividade Avaliativa (Kahoot)
**Slides: ~149 a ~163** | Tópico principal: Revisão gamificada dos conteúdos de Fundamentos da Computação

| Slide(s) | Título | Tag | Resumo |
|---|---|---|---|
| 149 | Quiz Kahoot! (header) | `[ATIV AVALIATIVA]` | Abertura do quiz: 15 perguntas, acesso kahoot.it, código do professor |
| 150 | Kahoot Q01: O que é hardware? | `[ATIV AVALIATIVA]` | Corrigir: hardware é parte física e tangível do computador |
| 151 | Kahoot Q02: Exemplo de software | `[ATIV AVALIATIVA]` | Google Chrome como software; contraste com monitor, teclado, RAM |
| 152 | Kahoot Q03: Modelo E→P→S — saida | `[ATIV AVALIATIVA]` | Saída = resultado entregue ao usuário |
| 153 | Kahoot Q04: RAM ao desligar | `[ATIV AVALIATIVA]` | RAM é volátil: dados apagados ao desligar |
| 154 | Kahoot Q05: O que significa CPU? | `[ATIV AVALIATIVA]` | Central Processing Unit |
| 155 | Kahoot Q06: GPU vs CPU para IA | `[ATIV AVALIATIVA]` | GPU: milhares de núcleos, processamento paralelo |
| 156 | Kahoot Q07: SO em servidores de IA | `[ATIV AVALIATIVA]` | Linux domina os data centers |
| 157 | Kahoot Q08: Extensão de dataset ML | `[ATIV AVALIATIVA]` | .csv: leve, universal, qualquer linguagem |
| 158 | Kahoot Q09: Atalho Explorer | `[ATIV AVALIATIVA]` | Win + E abre o Explorer |
| 159 | Kahoot Q10: Periférico de entrada | `[ATIV AVALIATIVA]` | Microfone é entrada; monitor, caixa, impressora sao saida |
| 160 | Kahoot Q11: SSD vs HD para IA | `[ATIV AVALIATIVA]` | SSD: 7.000 MB/s vs HD: 120 MB/s |
| 161 | Kahoot Q12: "File" em computacao | `[ATIV AVALIATIVA]` | File = arquivo |
| 162 | Kahoot Q13: "Save" em programas | `[ATIV AVALIATIVA]` | Save = salvar |
| 163 | Kahoot Q14: Nomear arquivo Python | `[ATIV AVALIATIVA]` | snake_case correto: analise_dados_final.py |
| 164 | Kahoot Q15: Analogia RAM/escritório | `[ATIV AVALIATIVA]` | RAM = mesa de trabalho |

---

## SECAO 7 — Aula 02: Revisão e Aprofundamento (Fundamentos da Computação)
**Slides: ~165 a fim** | Tópico principal: Organização, resolução de problemas, vocabulário ampliado

| Slide(s) | Título | Tag | Resumo |
|---|---|---|---|
| 165 | AULA 02 — Divisor | `[TEORIA]` | Abertura: Fundamentos da Computação na Prática |
| 166–167 | Revisão Oral da Aula 01 | `[DEBATE]` | 8 perguntas sem consulta: hardware, software, RAM, SSD, CPU, GPU, SO, extensão, atalho, "File" |
| 168 | Organização no Windows Explorer | `[TEORIA]` | Estrutura do projeto e atalhos de navegação no Windows |
| 169–170 | Exercício: Organizando Seus Arquivos | `[EXERCICIO]` | Criar Aula-02 com subpastas; mover arquivos da Aula 01; criar README; nível 2 |
| 171–172 | Nomenclatura Profissional de Arquivos | `[TEORIA]` | Por que nomear corretamente importa; padroes snake_case, kebab-case, PascalCase, YYYY-MM-DD |
| 173–174 | Exercício Calc: Planilha de Projetos | `[EXERCICIO]` | Criar controle_projetos_aula02.xlsx; lista suspensa de status; formatação condicional; nível 3 |
| 175–176 | Como Pesquisar Tecnicamente na Internet | `[TEORIA]` | Operadores de busca ("", site:, filetype:, -); pesquisar em inglês para soluções técnicas |
| 177 | Como Resolver Problemas Técnicos | `[TEORIA]` | Método dos 4 passos: Identificar, Pesquisar, Testar, Documentar (com v-clicks) |
| 178 | Exercício: Resolva o Problema! | `[DINAMICA]` | Diagnóstico em dupla de computador lento: usar Gerenciador de Tarefas + método dos 4 passos |
| 179–180 | Vocabulário Técnico: Aula 02 | `[TEORIA]` | Desktop, install, update, browser, download, upload, network, password, settings, error |
| 181 | Dinâmica Final: Aprenda com o Real | `[DINAMICA]` | Problema real do laboratório; duplas investigam e apresentam solução em 2 minutos |
| 182–183 | Encerramento e Próxima Aula | `[TEORIA]` | Recapitulação de Aulas 01 e 02; Próxima Aula 03: Introdução à Lógica de Programação |

---

## Resumo Quantitativo por Tag

| Tag | Quantidade aproximada |
|---|---|
| `[TEORIA]` | ~88 slides |
| `[EXERCICIO]` | ~52 slides |
| `[DEBATE]` | ~18 slides |
| `[DINAMICA]` | ~6 slides |
| `[ATIV AVALIATIVA]` | ~16 slides |
| `[TAREFA DE CASA]` | 0 (a adicionar) |
| **Total** | **~183 slides** |

---

## Observacoes e Pendências

> **Problemas identificados para revisão do arquivo slides.md (NAO alterar até aprovação desta estrutura):**

1. **Tracos em dashes (—):** todos os tracos longos (em-dashes  `—`) devem ser removidos ou substituídos por hífen (`-`) ou dois pontos, conforme o contexto. Esto afeta títulos, textos e caixas de destaque.

2. **Secao 1 (IA):** conteúdo bem estruturado e progressivo. Verificar se algum slide usa o símbolo `—` em títulos ou bullets.

3. **Secao 3 (Conectando):** a Parte 6 está sólida. Os exercícios 01-10 da Aula 01 conectam bem teoria e prática.

4. **Secao 4 (Calc):** Calc 08 e Calc 09 sao dinâmicas coletivas classificadas como [EXERCICIO] mas poderiam ser [DINAMICA]. Revisar em conjunto.

5. **[TAREFA DE CASA]:** não há nenhum slide com tarefa formal de casa. Adicionar ao final das Aulas 01 e 02.

6. **Texto de inglês (Secao 5):** os exercícios ING 05 parece ausente na sequência (vai de ING 04 direto para ING 06). Verificar se é intencional ou slide faltante.

7. **Secao 7 (Aula 02):** encerramento com 183 slides. Segunda aula está incompleta em relação ao template (sem tarefa de casa, sem slide `layout: end`).
