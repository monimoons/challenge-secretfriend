// array para armazenar os nomes
let amigos =[];

//função para adicionar nomes
function adicionarNomes() {
    const input = document.querySelector("#amigo");
    const nome = (input.value || "").trim();

//validar a entrada
    if(!nome) {
        alert("Por favor, insira um nome válido");
        return;
    }
//evitar nomes duplicadas    
if (amigos.includes(nome)) {
    alert("Atenção! Esse nome ja foi adicionado!");
    return;
    }

//adiciona na lista
    amigos.push(nome);

//limpar campo após adicionar o nome e uma string vazia
    input.value = "";
    atualizarLista();
}

//adicionar nomes com tecla enter
document.querySelector("#amigo").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        adicionarNomes();
    }
});

//função para atualiar a lista
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //limpar antes de recriar

    amigos.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });

}

//função para sortear
function sortearAmigo(){
    if (amigos.length < 2 ){
        alert("Adicione pelo menos dois nomes para sortear.");
        return;
    }
    const indice =Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];

    mostrarResultado(sorteado);
}

//mostrar resultado na tela 
function mostrarResultado(nome) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: <strong>${nome}</strong>`; 
}

//função para riniciar o jogo
function recriar() {
    amigos =[];

    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

}