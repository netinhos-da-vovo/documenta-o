

<p id="contador"></p>
<p id="contador-feitas"></p>
<div id="aviso-vazio" style="color: red; font-weight: bold;"></div>

<ul id="lista"></ul>

<input id="novo" placeholder="nova tarefa">
<button id="add">Adicionar</button>

<script>
let tarefas = [
    { id: 1, texto: "Estudar React", feita: false },
    { id: 2, texto: "Levar o cachorro", feita: true }
];

function desenhar() {
    const ul = document.getElementById("lista");
    const avisoVazio = document.getElementById("aviso-vazio");
    
    ul.innerHTML = "";
    
    if (tarefas.length === 0) {
        avisoVazio.textContent = "Nenhuma tarefa cadastrada. Aproveite o seu dia!";
    } else {
        avisoVazio.textContent = "";
    }

    let prontas = 0;

    for (const t of tarefas) {
        const li = document.createElement("li");
        li.textContent = t.texto + (t.feita ? " (feita)" : "");
        ul.appendChild(li);

        if (t.feita) {
            prontas++;
        }
    }

    document.getElementById("contador").textContent = tarefas.length + " tarefas no total";
    document.getElementById("contador-feitas").textContent = prontas + " tarefas feitas";
}

document.getElementById("add").addEventListener("click", () => {
    const input = document.getElementById("novo");
    
    if (input.value.trim() === "") return; 

    tarefas.push({ id: Date.now(), texto: input.value, feita: false });
    input.value = "";
    desenhar();
});

desenhar();
</script>
