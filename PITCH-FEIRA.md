# Pitch da feira, uma ideia

Isso aqui é como eu acho que a gente poderia contar o Comedor de Montanhas em dois minutos
e meio. Não é roteiro fechado e não é regra, é uma proposta pra vocês discordarem e trocar
o que não combinar com a voz de vocês. A única coisa que eu não faria é decorar palavra
por palavra, porque o avaliador interrompe no meio e quem decorou trava.

## O produto

O Comedor de Montanhas é um jogo 2D de plataforma. Você quebra a montanha, junta o que cai
dela e leva até o seu lar pra reconstruir. Uma fase, do começo ao fim, em até 15 minutos.

Mas o que eu apresentaria não é "fizemos um jogo". Jogo de feira tem vários. O que vocês têm
de diferente é que colocaram o jogo na mão de 11 pessoas, ouviram o que elas reclamaram e
mudaram o jogo por causa disso. Isso é o que a iniciação científica pede: testar, medir,
mudar.

## A ordem que eu seguiria

Pra mim a ordem importa mais que as palavras exatas.

Eu começaria pelo teste, pela cena de alguém jogando a primeira versão e achando ruim. É
verdade, é meio engraçado e todo mundo que já jogou alguma coisa entende na hora. O que eu
evitaria é abrir pelo Godot ou pela lista do que o personagem faz, porque aí vira
apresentação de software e não história.

Depois eu mostraria o que vocês entenderam com aquilo: num jogo de plataforma o jogador
passa quase o tempo todo andando e pulando, então se andar é ruim, o resto não importa.
Esse é o pedaço que tira vocês do "fizemos um jogo" e põe no "entendemos o que faz um jogo
ser bom de jogar".

Só então eu contaria o jogo em si, a montanha, o material e o lar. A tecnologia eu deixaria
pro fim, entrando como prova de que vocês fizeram de verdade, nunca como lista de
ferramenta. E eu terminaria com o avaliador jogando, não ouvindo mais. Jogo se explica
melhor na mão do que na boca.

## Como eu contaria

Escrevi do jeito que sairia da minha boca, pra vocês passarem pra voz de vocês. Dividi um
pedaço por pessoa porque eu desconfio de projeto que só um sabe explicar, e o avaliador
também. Os nomes são sugestão. Eu trocaria de forma que cada um conte a parte que ele
mesmo fez, porque é sobre essa que vão perguntar.

### Rhuan, uns 30 segundos

A primeira versão do jogo a gente deu pra 11 pessoas jogarem. E quase todo mundo reclamou
da mesma coisa: andar na montanha era ruim. Não foi a arte, não foi o mapa. Foi andar.

### Murilo Braga, uns 35 segundos

E aí a gente entendeu uma coisa que não tinha pensado: num jogo de plataforma você passa
quase o tempo todo andando e pulando. Se isso é ruim, não adianta o resto ser bom.

Então a gente refez o movimento. Colocou aceleração, pro personagem ganhar velocidade aos
poucos, atrito, pra ele frear em vez de parar seco, e um dash no Shift, pra atravessar
rápido quando precisa. Foi a mudança que mais mudou o jogo.

### Luiz Felipe, uns 30 segundos

O jogo é assim: você é o comedor de montanhas. Clica no bloco da montanha e quebra, e às
vezes cai material dele. Você junta esse material e leva até o seu lar, que está destruído.
Cada vez que entrega, o lar vai sendo reconstruído, e quando ele fica de pé você ganha.

É uma fase só, de propósito. A gente preferiu uma fase que começa e termina do que três
pela metade.

### Murilo Zimmermann, uns 30 segundos

Fizemos na Godot, que é uma engine gratuita e de código aberto, programando em GDScript.
A arte é de um pacote livre, com o autor creditado, porque a gente quis gastar o tempo no
que estava aprendendo, que era programar.

E a gente trabalhou do jeito que se trabalha em empresa: cada tarefa é uma issue no GitHub,
cada um pega a sua, faz numa branch separada e abre um pull request pra ser revisado antes
de entrar. Está tudo lá, com o nome de quem fez cada parte.

### Pietro, uns 20 segundos

A gente ainda está testando, e você pode ser o próximo teste. Senta aqui, joga uns minutos
e depois diz o que te incomodou. A gente anota. Foi assim que o dash entrou no jogo, e a
próxima mudança pode ser a sua.

### Se sobrar tempo e se precisar cortar

Sobrando tempo, eu encaixaria a história do zip antes da parte do GitHub: no começo o jogo
inteiro morava dentro de um arquivo compactado, e cada versão nova era um zip trocado por
outro. Não dava pra saber o que tinha mudado nem juntar o trabalho de duas pessoas. Tirar o
jogo do zip e colocar no Git foi a primeira tarefa do projeto. Mostra que vocês aprenderam
por que versionamento existe, e não só que usaram.

Se tivesse que cortar, eu cortaria o primeiro parágrafo do Murilo Zimmermann, o da Godot e
da arte. É o pedaço que mais parece lista e o que menos vende.

Se o lar e a tela de vitória não ficarem prontos até a feira, o Luiz troca o "quando ele
fica de pé você ganha" por "o próximo passo é o lar ser reconstruído com o que você junta".
Eu não prometeria na fala o que o avaliador não vai ver na tela.

## A versão de 30 segundos

Pra quem só passa no estande, ou pra quando o avaliador está com pressa:

O Comedor de Montanhas é um jogo de plataforma em que você quebra a montanha, junta o
material e reconstrói o seu lar. A gente deu a primeira versão pra 11 pessoas jogarem, todo
mundo reclamou do movimento, e a gente refez: aceleração, atrito e dash. Fizemos na Godot,
do zero. Senta aqui e joga.

## As perguntas que eu aposto que vão fazer

Escrevi como eu responderia. A resposta de vocês pode ser melhor, desde que seja verdade.

**Vocês que desenharam?** Não, e eu falaria isso sem rodeio. A arte é de um pacote livre, o
autor está creditado, e a escolha foi gastar o tempo programando. Fingir que desenhou é a
mentira mais fácil de pegar, porque o avaliador pergunta "como você fez essa árvore?".

**Por que Godot e não Unity ou Roblox?** É gratuita, de código aberto, leve o bastante pra
rodar no PC do laboratório, e o GDScript é parecido com Python, então dava pra aprender a
linguagem e a engine ao mesmo tempo.

**Por que só uma fase?** Porque jogo que não termina não dá pra testar. Uma fase completa
deixa a gente fazer playtest de verdade, do começo ao fim. Fase nova é fácil de somar
depois, e a gente sabe o que precisa pra isso.

**O que vocês mudaram por causa do teste?** Essa é a melhor pergunta que pode aparecer, e
eu queria que todo mundo soubesse responder: aceleração, atrito e dash. E quem mexeu nisso
mostraria no código.

**O que foi mais difícil?** Eu não escreveria a resposta, porque ela tem que ser de quem
fala. Eu só evitaria "nada" e "tudo". Escolheria uma coisa só e contaria como resolveu.

**O que o professor fez e o que vocês fizeram?** Essa é a que eu mais ensaiaria, porque
aparece sempre e desmonta quem não pensou nela. Eu respondo que escrevo as issues e reviso
os pull requests, que o código é de vocês, e que o histórico do GitHub mostra quem
escreveu cada linha. Por isso é importante que o trabalho de cada um esteja lá: o que não
subiu pro Git, pra banca, não existe.
