1. Uma Promise é um objeto que representa o sucesso ou a falha futura de uma operação assíncrona.

2. Os três estados são: Pending (Pendente), Fulfilled (Realizada) e Rejected (Rejeitada).

3.
try {
  const produto = await buscarProduto(3);
  console.log(produto);
} catch (erro) {
  console.log(erro);
}

4. O await pausa apenas a execução da função assíncrona onde ele está, liberando o restante do programa para continuar rodando.

5. Porque o await depende da estrutura interna que o JavaScript só cria para funções declaradas como async. Sem isso, a engine não sabe como pausar e retomar a função.

6.
async function buscarProduto(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nome: "Produto " + id });
    }, 1000);
  });
}

7. O erro é tentar usar await dentro de uma função síncrona comum. Falta a palavra-chave async antes de function.
Correção:
async function carregarDados() {
  const dados = await fetch("https://exemplo.com");
  console.log(dados);
}

8.
async function carregar() {
  const resposta = await fetch("https://exemplo.com");
  const dados = await resposta.json();
  console.log(dados);
}

9. Se a requisição falhar (sem internet), a Promise é rejeitada. Se o servidor responder com erro (404), a requisição HTTP foi concluída com sucesso (houve resposta), por isso o fetch não lança erro sozinho; ele apenas considera que a comunicação aconteceu.

10. Porque o método .map é síncrono e não espera o await terminar. Ele executa a função para todos os itens imediatamente e devolve um array de Promises pendentes.
