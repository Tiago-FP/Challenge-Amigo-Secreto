//Iniciando um Array vázia para armazenar os nomes dos amigos
let amigos = [];

//Definindo uma função para adicionar nomes a lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Verificar se o campo de entrada está vázio
    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }
    
    // Evitar que um nome duplicado seja adicionado a lista
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        input.value = "";
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
}

// Definindo uma função para atualizar a exibição da lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Definindo uma função para sortear um amigo aleatoriamente da lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    // Gerando um índice aleatório com base no tamanho da lista
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    // Exibe o nome sorteado na lista de resultados
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ${nomeSorteado} foi sorteado! 🎉</li>`;
}