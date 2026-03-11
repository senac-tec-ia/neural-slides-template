# Comandos — Criar Repositório de Nova Aula

Execute estes comandos para criar o repositório de cada aula nova no GitHub e abrir localmente.

## Template: criar repo AXX

```powershell
$AULA = "A06"   # <-- mude aqui

$env:GH_TOKEN = "SEU_TOKEN_AQUI"   # cole seu token pessoal do GitHub
$env:PATH = "C:\Users\leozn\AppData\Local\Temp\gh_cli\bin;" + $env:PATH

gh repo create senac-tec-ia/$AULA --template senac-tec-ia/neural-slides-template --public
cd "C:\Users\leozn\Documents\Projeto Coder 3.0"
git clone https://github.com/senac-tec-ia/$AULA
cd $AULA ; npm install ; code .
```

## Aulas criadas até agora

| Aula | Repo | Data |
|------|------|------|
| A05 | [senac-tec-ia/A05](https://github.com/senac-tec-ia/A05) | 2026-03-11 |
| A06 | — | — |

## Sincronizar infraestrutura do template para um repo de aula existente

> Depois de atualizar agentes/contextos no template, use este comando para propagar
> para uma aula específica. **Nunca** sobrescreve `slides.md`, `exercicios.md`,
> `meta.yaml` ou `tarefa.md` — só arquivos de `.github/`.

```powershell
# De dentro do neural-slides-template:
cd "C:\Users\leozn\Documents\Projeto Coder 3.0\neural-slides-template"
node .github/scripts/sync-to-template.mjs --repo A05
node .github/scripts/sync-to-template.mjs --repo A06
```

> Ou para atualizar só o template (sem `--repo`):
```powershell
node .github/scripts/sync-to-template.mjs
```
