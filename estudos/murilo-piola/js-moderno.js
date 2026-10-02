1) nums.map(n => n * 2)

2) nums.filter(n => n % 2 === 0)

3) map transforma cada elemento e devolve um array do mesmo tamanho, enquanto filter seleciona apenas os elementos que se encaixam no que o filter pede e pode devolver um array menor.

4)const { titulo, preco } = p;

5)const ehCaro = n => n > 100;

6)const cores2 = [...cores, "vermelho"];

7)const pEmPromocao = { ...p, preco: 20 };

8)produtos.filter(p => p.estoque > 0).map(p => p.nome)

9)O problema é que a função de callback usa chaves {} sem o return. O correto seria: const total = precos.map(p => p * 2); ou const total = precos.map(p => { return p * 2; });

10)import Botao from "./Botao.js" importa o export default do arquivo. import { Botao } from "./Botao.js" importa um named export (export nomeado).

11)Porque push muta o array original. No React o estado deve ser tratado de forma imutável; alterar diretamente o array não dispara a re-renderização corretamente.

12)produtos.filter(p => p.estoque > 5).map(p => p.nome)
