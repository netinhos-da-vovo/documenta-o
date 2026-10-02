

Aula 03

## 1. Esqueça de propósito
- O dado entrou no vetor? Como você prova isso?
Sim, o dado entrou no vetor. Isso pode ser provado adicionando um `console.log(nomeDoVetor)` logo após a inserção (como o `.push()`); ao abrir o Console do Desenvolvedor (F12), o array aparece atualizado a cada clique.
- E a tela, o que mostra?
A tela não mostra nada de novo e permanece inalterada, pois a função `desenhar()`, que atualiza a interface com os dados do vetor, foi comentada.

## 2. Perca o que foi digitado
- O que aconteceu com o que você digitou?
O texto digitado nos inputs dos itens anteriores desapareceu completamente assim que o novo item foi adicionado.
- Explique a causa:
A função `desenhar()` recria a lista do zero limpando e reescrevendo o `innerHTML`. Ao fazer isso, o navegador destrói os elementos antigos e renderiza novos inputs zerados, perdendo o estado temporário que estava na memória do navegador e não no vetor.

## 3. Conte quantos lugares
- Quantos trechos diferentes do código você precisou tocar?
Precisei tocar em 3 trechos: no HTML (para criar as tags do contador e do aviso), no JavaScript dentro do `desenhar()` (para calcular as tarefas feitas com filter/loop) e em outra condicional no JavaScript (para exibir ou esconder o aviso de lista vazia).

## 4. Quebre a cola
- O navegador reclama? Onde e quando o erro aparece?
Sim. O erro aparece no Console do Desenvolvedor (F12) assim que a página carrega (ou no primeiro clique, dependendo de onde o elemento é buscado). A mensagem diz `TypeError: Cannot read properties of null`, pois o JavaScript tenta acessar um ID que não existe mais.

## Registro PessoalAula 03

## 1. Esqueça de propósito
- O dado entrou no vetor? Como você prova isso?
Sim, o dado entrou no vetor. Isso pode ser provado adicionando um `console.log(nomeDoVetor)` logo após a inserção (como o `.push()`); ao abrir o Console do Desenvolvedor (F12), o array aparece atualizado a cada clique.
- E a tela, o que mostra?
A tela não mostra nada de novo e permanece inalterada, pois a função `desenhar()`, que atualiza a interface com os dados do vetor, foi comentada.

## 2. Perca o que foi digitado
- O que aconteceu com o que você digitou?
O texto digitado nos inputs dos itens anteriores desapareceu completamente assim que o novo item foi adicionado.
- Explique a causa:
A função `desenhar()` recria a lista do zero limpando e reescrevendo o `innerHTML`. Ao fazer isso, o navegador destrói os elementos antigos e renderiza novos inputs zerados, perdendo o estado temporário que estava na memória do navegador e não no vetor.

## 3. Conte quantos lugares
- Quantos trechos diferentes do código você precisou tocar?
Precisei tocar em 3 trechos: no HTML (para criar as tags do contador e do aviso), no JavaScript dentro do `desenhar()` (para calcular as tarefas feitas com filter/loop) e em outra condicional no JavaScript (para exibir ou esconder o aviso de lista vazia).

## 4. Quebre a cola
- O navegador reclama? Onde e quando o erro aparece?
Sim. O erro aparece no Console do Desenvolvedor (F12) assim que a página carrega (ou no primeiro clique, dependendo de onde o elemento é buscado). A mensagem diz `TypeError: Cannot read properties of null`, pois o JavaScript tenta acessar um ID que não existe mais.

## Registro Pessoal
O experimento 2 foi o que mais me incomodou porque a interface destrói dados do usuário de forma destrutiva ao tentar se atualizar. Isso prova como é difícil e frágil gerenciar o estado da tela manualmente no JavaScript vanilla, exigindo muito código para não perder dados simples.
