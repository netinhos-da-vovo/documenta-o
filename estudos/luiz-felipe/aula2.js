1- Uma Promise é um objeto que simboliza o resultado futuro (sucesso ou fracasso) de uma operação assíncrona.

2- Os três estados possíveis são: Pending (pendente), Fulfilled (cumprida/realizada) e Rejected (rejeitada).

3-
try {
    const produto = await buscarProduto(3);
    console.log(produto);
} catch (erro) {
    console.log(erro);
}
4- O await interrompe somente a execução da função async em que está inserido, permitindo que o restante do código continue rodando normalmente.

5- Porque o await só funciona dentro de funções que possuem a estrutura especial criada pelo JavaScript quando elas são declaradas com async. Sem essa palavra-chave, a engine não consegue pausar e retomar a execução da função.

6-
async function buscarProduto(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, nome: "Produto " + id });
        }, 1000);
    });
}

7- O erro ocorre porque se está tentando usar await dentro de uma função síncrona comum. Falta a palavra-chave async na declaração da função.
Correção:
async function carregarDados() {
    const dados = await fetch("https://exemplo.com");
    console.log(dados);
}

8-
async function carregar() {
    const resposta = await fetch("https://exemplo.com");
    const dados = await resposta.json();
    console.log(dados);
}

9- Se a requisição falhar (por exemplo, sem internet), a Promise é rejeitada. Já se o servidor responder com um erro HTTP (como 404), a comunicação em si foi bem-sucedida (houve resposta), por isso o fetch não lança erro automaticamente — ele só indica que a requisição foi concluída.

10- Porque o método .map é síncrono e não aguarda a conclusão do await. Ele executa a função em todos os elementos imediatamente e retorna um array contendo Promises ainda pendentes.