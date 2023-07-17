var imagensCartas = ["imagens/4Paus.jpeg", "imagens/7Copas.png"];
var cartaAtualIndex;

function embaralharCartas() {
    cartaAtualIndex = Math.floor(Math.random() * imagensCartas.length);
    exibirCartaAtual();
}

function exibirCartaAtual() {
    var cartaElement = document.getElementById("carta");
    cartaElement.src = imagensCartas[cartaAtualIndex];
}

function escolherResposta(resposta) {
    var cartaAtual = imagensCartas[cartaAtualIndex];
    var respostaCorreta = false;

    if (cartaAtual === "imagens/4Paus.jpeg" && resposta === "faço") {
        respostaCorreta = true;
    } else if (cartaAtual === "imagens/7Copas.png" && resposta === "não faço") {
        respostaCorreta = true;
    }

    if (respostaCorreta) {
        alert("Você acertou!");
    } else {
        alert("Você errou!");
    }

    embaralharCartas();
}

embaralharCartas();
