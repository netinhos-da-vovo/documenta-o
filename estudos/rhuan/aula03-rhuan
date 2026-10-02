1.
Sim, o dado entrou no vetor. Isso é provado adicionando um `console.log(nomeDoVetor)` após o `.push()`, que mostra o array atualizado com o novo item no Console do Desenvolvedor (F12). A tela não mostra nada de novo e fica desatualizada porque a função `desenhar()`, responsável por renderizar as mudanças, foi comentada.

2.
O texto digitado nos inputs desapareceu e eles voltaram a ficar vazios. Isso acontece porque a função `desenhar()` recria a lista do zero reescrevendo o `innerHTML`; esse processo destrói os elementos antigos do DOM e cria novos do zero, limpando o estado interno que o navegador guardava e que não estava salvo no vetor do JavaScript.

3.
Foram necessários 3 trechos diferentes: o HTML (para criar as tags do contador e do aviso), o JavaScript (para calcular as tarefas feitas usando filter ou laço de repetição) e outra parte no JavaScript (para fazer o `if/else` que exibe ou esconde o aviso de lista vazia).

4.
Sim, o navegador reclama no Console do Desenvolvedor (F12). O erro aparece no momento em que a página carrega (ou ao tentar interagir com a lista), exibindo uma mensagem de `TypeError: Cannot read properties of null`, indicando que o JavaScript tentou rodar uma função em um elemento inexistente.

Registro:
O experimento 2 foi o que mais me incomodou porque a interface apaga o que o usuário digitou simplesmente por tentar atualizar a tela. Isso mostra como o JavaScript vanilla é frágil para gerenciar dados em inputs e exige muito esforço manual para não gerar bugs visuais.
