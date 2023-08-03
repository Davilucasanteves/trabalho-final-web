var BotCarta;
var MinhaCarta;

var Cartas = [
    { nome: '4 de paus',        valor: '40', caminho: 'Cartas/4-de-paus.png'},
    { nome: '7 de copas',       valor: '39', caminho: 'Cartas/7-de-copas.png'},
    { nome: 'Ás de espada',     valor: '38', caminho: 'Cartas/ás-de-espadas.png'},
    { nome: '7 de ouro',        valor: '37', caminho: 'Cartas/7-de-ouros.png'},
    { nome: 'Terno de paus',    valor: '36', caminho: 'Cartas/3-de-paus.png'},
    { nome: 'Terno de copas',   valor: '35', caminho: 'Cartas/3-de-copas.png'},
    { nome: 'Terno de espada',  valor: '34', caminho: 'Cartas/3-de-espadas.png'},
    { nome: 'Terno de ouro',    valor: '33', caminho: 'Cartas/3-de-ouros.png'},
    { nome: 'duque de paus',    valor: '32', caminho: 'Cartas/2-de-paus.png'},
    { nome: 'duque de copas ',  valor: '31', caminho: 'Cartas/2-de-copas.png'},
    { nome: 'duque de espada',  valor: '30', caminho: 'Cartas/2-de-espadas.png'},
    { nome: 'duque de ouro',    valor: '29', caminho: 'Cartas/2-de-ouros.png'},
    { nome: 'Ás de paus',       valor: '28', caminho: 'Cartas/ás-de-paus.png'},
    { nome: 'Ás de copas',      valor: '27', caminho: 'Cartas/ás-de-copas.png'},
    { nome: 'Ás de ouros',      valor: '26', caminho: 'Cartas/ás-de-ouros.png'},
    { nome: 'rei de paus',      valor: '25', caminho: 'Cartas/rei-de-paus.png'},
    { nome: 'rei de copas',     valor: '24', caminho: 'Cartas/rei-de-copas.png'},
    { nome: 'rei de espadas',   valor: '23', caminho: 'Cartas/rei-de-espadas.png'},
    { nome: 'rei de ouros',     valor: '22', caminho: 'Cartas/rei-de-ouros.png'},
    { nome: 'valete de paus',   valor: '21', caminho: 'Cartas/valete-de-paus.png'},
    { nome: 'valete de copas',  valor: '20', caminho: 'Cartas/valete-de-copas.png'},
    { nome: 'valete de espadas',valor: '19', caminho: 'Cartas/valete-de-espadas.png'},
    { nome: 'valete de ouros',  valor: '18', caminho: 'Cartas/valete-de-ouros.png'},
    { nome: 'dama de paus',     valor: '17', caminho: 'Cartas/dama-de-paus.png'},
    { nome: 'dama de copas',    valor: '16', caminho: 'Cartas/dama-de-copas.png'},
    { nome: 'dama de espadas',  valor: '15', caminho: 'Cartas/dama-de-espadas.png'},
    { nome: 'dama de ouros',    valor: '14', caminho: 'Cartas/dama-de-ouros.png'},
    { nome: '7 de paus',        valor: '13', caminho: 'Cartas/7-de-paus.png'},
    { nome: '7 de espadas',     valor: '12', caminho: 'Cartas/7-de-espadas.png'},
    { nome: '6 de paus',        valor: '11', caminho: 'Cartas/6-de-paus.png'},
    { nome: '6 de copas',       valor: '10', caminho: 'Cartas/6-de-copas.png'},
    { nome: '6 de espadas',     valor: '9',  caminho: 'Cartas/6-de-espadas.png'},
    { nome: '6 de ouro',        valor: '8',  caminho: 'Cartas/6-de-ouros.png'},
    { nome: '5 de paus',        valor: '7',  caminho: 'Cartas/5-de-paus.png'},
    { nome: '5 de copas',       valor: '6',  caminho: 'Cartas/5-de-copas.png'},
    { nome: '5 de espadas',     valor: '5',  caminho: 'Cartas/5-de-espadas.png'},
    { nome: '5 de ouro',        valor: '4',  caminho: 'Cartas/5-de-ouros.png'},
    { nome: '4 de copas',       valor: '3',  caminho: 'Cartas/5-de-copas.png'},
    { nome: '4 de paus',        valor: '2',  caminho: 'Cartas/5-de-espadas.png'},
    { nome: '4 de ouros',       valor: '1',  caminho: 'Cartas/4-de-ouros.png'}
]

function embaralharCartas() {
    MinhaCarta = Math.floor(Math.random() * Cartas.length);
    BotCarta = Math.floor(Math.random() * Cartas.length);
    while (BotCarta === MinhaCarta) {
        BotCarta = Math.floor(Math.random() * Cartas.length);
    }
    setTimeout(exibirCartaDoBot, 100);
   
}

function exibirCartaDoBot() {
    var cartaAtual = document.getElementById("carta");
    cartaAtual.src = Cartas[BotCarta].caminho;
    exibirMinhaCarta()
}

function exibirMinhaCarta(){
    var cartaAtualMinha = document.getElementById("cartaPessoa");
    cartaAtualMinha.src = Cartas[MinhaCarta].caminho;
}

function Resultado() {
    var selectElement = document.getElementById("palpite");
    var valorSelecionado = selectElement.value;
    var respostaCorreta;

    if ( BotCarta < MinhaCarta && valorSelecionado === "1" ) {
        respostaCorreta = true;
    } else if ( BotCarta > MinhaCarta && valorSelecionado === "0") {
        respostaCorreta = true;
    }

    if (!respostaCorreta) {
        alert("Você acertou!");
        flipCarta();
    } else {
        alert("Você errou!");
        flipCarta();
    }

}

function flipCarta() {
    const containerDaPessoa = document.querySelector('.containerDaPessoa');

        if (containerDaPessoa.classList.contains('virada')) {
            containerDaPessoa.classList.remove('virada');
            setTimeout(embaralharCartas, 3000);
            setTimeout(() => {
                containerDaPessoa.classList.add('virada');
            }, 3000);
        } else {
            containerDaPessoa.classList.add('virada');
            setTimeout(embaralharCartas, 3000);
            setTimeout(() => {
            containerDaPessoa.classList.remove('virada');
            }, 3000);
        }

    
 }
  

embaralharCartas();

