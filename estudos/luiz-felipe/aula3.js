/*
HTML necessario

<p id="contador"></p>
<p id="contador-coletados"></p>
<div id="aviso-vazio"></div>
<ul id="lista"></ul>
<input id="novo" placeholder="novo material">
<button id="add">Adicionar</button>

colocar os scripts depois do elemento no html
*/

let materiais = [
	{ id: 1, texto: "Fragmento de rocha", coletado: false },
	{ id: 2, texto: "Minerio", coletado: true }
];

function desenhar() {
	const lista = document.getElementById("lista");
   const avisoVazio = document.getElementById("aviso-vazio");
	lista.innerHTML = "";
   let coletados = 0;

	for (const material of materiais) {
		const item = document.createElement("li");
      const campo = document.createElement("input");
      campo.value = material.texto;
      item.appendChild(campo);

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = material.coletado;
      checkbox.addEventListener("change", () => {
         material.coletado = checkbox.checked;
         desenhar();
      });
      item.appendChild(checkbox);

      if (material.coletado) {
         coletados++;
      }

		lista.appendChild(item);
	}

	document.getElementById("contador").textContent = materiais.length + " materiais";
   document.getElementById("contador-coletados").textContent = coletados + " materiais coletados";
   avisoVazio.textContent = materiais.length === 0 ? "Nenhum material cadastrado." : "";
}

document.getElementById("add").addEventListener("click", () => {
	const input = document.getElementById("novo");
   const texto = input.value.trim();
   if (texto === "") return;

   materiais.push({ id: Date.now(), texto, coletado: false });
	input.value = "";
	desenhar();
});

desenhar();

// Teste 1: sem desenhar(), o vetor muda, mas a lista e os contadores ficam iguais.
// Teste 4: trocar o id da lista para listaMateriais causa TypeError ao acessar lista.innerHTML.

/*
Registro (3 linhas)
O experimento que mais me incomodou foi esquecer de chamar desenhar().
O vetor pode estar correto enquanto a tela mostra informacoes antigas.
Isso me chamou a atencao porque o usuario ve a tela, nao o vetor no codigo.

para diego: prof, eu não entendi direito como era pra fazer a aula e
em que tipo de arquivo era pra ser criado, se era html ou js, mas tentei fazer do jeito
que entendi, com auxilio da IA (copilot incluso no codespace) para tentar fazer,
então no feedback, se puder deixar detalhado algum erro que cometi em relação a forma de
realização do exercicio, deixe por favor, pois estou fazendo atrasado, e sozinho como o
senhor me permitiu realizar atrasado, como conversamos na aula de hoje(26), e provavelmente
erros parecidos serao vistos nas aulas seguintes (4 e 5), obrigado.
*/
