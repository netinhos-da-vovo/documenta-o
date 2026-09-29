# Comedor de Montanhas

Jogo 2D de plataforma feito em Godot 4.6. Você quebra a montanha, junta o que cai dela e
usa esse material para reconstruir o seu lar.

> **Status:** preparando o MVP para a EXPOCEEP, dia 09/10. A meta é **uma fase só**, que
> dá para jogar do começo ao fim em no máximo 15 minutos. O resto a gente coda depois da
> feira.

## Onde a gente conversa

💬 **Discord da EXPOCEEP:** https://discord.gg/S3HyaNr3X

É lá que sai o briefing de segunda, o horário de dúvida e o "peguei essa issue". Dúvida no
canal, não no direct: a resposta serve pros outros também.

---

## Por que mexer no repositório agora

O jogo já saiu do `.zip`: cada cena e cada script estão versionados um a um. Enquanto
estava lá dentro, o Git via só um arquivo binário trocado por outro a cada versão — não
dava para ver o que mudou, nem para juntar o trabalho de duas pessoas. Agora dá, e é por
isso que a partir daqui todo mundo trabalha em branch e PR.

Na feira, quem apresenta são vocês, e a banca pode perguntar para qualquer um da equipe
"o que você fez nesse jogo?". A resposta tem que estar no histórico do Git, com o nome de
cada um.

E tem a segunda razão. Abre o `scripts/item_1.gd` e olha o que acontece quando o jogador pega um
item: um `print` e o item some. Não soma em lugar nenhum, não tem para onde levar, o jogo
não acaba. A mecânica de quebrar a montanha está boa, o que falta é o jogo ter começo, meio
e fim.

---

## Progresso

`█░░░░░░░░░░░░░░░░░░░` **5%** · 1/21 issues concluídas

| Fase | Foco | Prazo | Progresso |
|---|---|---|---|
| 0 | Arrumar o repositório | 30/09 | 20% (1/5) |
| 1 | Fechar o loop do jogo | 04/10 | 0% (0/8) |
| 2 | Som, build e playtest | 06/10 | 0% (0/5) |
| 3 | Preparar a feira | 08/10 | 0% (0/3) |

> O progresso fica nos **Milestones** do GitHub, a barra sobe sozinha quando a issue
> fecha. A tabela acima é um retrato, atualizado de vez em quando.

---

## As fases

| Fase | O que entra | O que você aprende |
|---|---|---|
| **0** | Tirar o projeto do zip, `.gitignore` do Godot, renomear o projeto, tirar os exercícios de aula daqui | Por que o Git precisa ver o código, e o que não se versiona |
| **1** | Contador de material na tela, coleta somando no contador, o lar que recebe material, o lar sendo reconstruído, tela de vitória | Sinais do Godot, cenas conversando entre si, estado do jogo |
| **2** | Sons, build para Windows testada no PC do laboratório, playtest com 20 pessoas | Exportar um jogo, testar fora da sua máquina, ouvir quem joga |
| **3** | Banner, texto ABNT, ensaio do pitch | Explicar o que você fez para quem nunca viu |

A ordem importa: a Fase 1 só dá para começar com o projeto fora do zip, porque é a partir
dela que cada um trabalha na sua branch. E não dá para fazer playtest de um jogo que não
acaba.

### O que já funciona

- Andar, pular e dash, com aceleração e atrito
- Quebrar bloco com o mouse, com alcance máximo e o bloco destacado
- Material caindo quando o bloco quebra
- Tela de início
- Ciclo de dia e noite, fogueira animada

### Fica para depois da feira

Novas fases, história, mais tipos de material, login e cadastro.

---

## Como jogar

| Ação | Controle |
|---|---|
| Andar | A / D ou setas |
| Pular | Espaço |
| Dash | Shift |
| Quebrar bloco | Clique esquerdo no bloco destacado |

**Objetivo:** juntar material quebrando a montanha e levar até o lar para reconstruir.

---

## Como contribuir

1. Escolha uma **issue aberta** e se atribua a ela, para ninguém pegar a mesma.
2. Avise no Discord que pegou.
3. Atualize a `main` (`git pull`) e crie sua branch a partir dela: `git checkout -b assunto-da-issue`.
   Nunca commite direto na `main`.
4. Implemente e **teste rodando o jogo**, do começo ao fim, não só a parte que você mexeu.
5. Abra o PR fechando a issue. Cada uma que fecha empurra a barra de progresso.

---

## Como rodar

1. Instale o [Godot 4.6](https://godotengine.org/download)
2. Clone o repositório
3. No Godot, clique em **Importar** e escolha o `project.godot`
4. Aperte **F5**

Na feira a gente usa a build exportada para Windows, que roda sem internet.

---

## Validação

**Primeira rodada:** 11 pessoas testaram. O principal pedido foi melhorar a movimentação na
montanha, e foi isso que entrou: dash, aceleração e atrito.

**Segunda rodada:** entra aqui o resultado do playtest da Fase 2.

---

## Equipe

| Nome | GitHub |
|---|---|
| Rhuan Pietro Toigo | |
| Pietro Henrique Merlo | |
| Luiz Felipe Joay | |
| Murilo Zimmermann Gomes | |
| Murilo Piola Alves Braga | |

Orientador: Prof. Diego da Silva
