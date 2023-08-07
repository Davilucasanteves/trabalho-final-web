let BotCarta;
let MinhaCarta;
var TotalVidasJogador = 3;
var TotalVidasBot = 3;
var vidasBot = document.getElementById('vidas_bot_icons');
var vidasJogador = document.getElementById('vidas_jogador_icons');

let Cartas = [
    { nome: '4 de paus',         valor: '40', caminho: 'Cartas/4-de-paus.png'},
    { nome: '7 de copas',        valor: '39', caminho: 'Cartas/7-de-copas.png'},
    { nome: 'Ás de espadas',     valor: '38', caminho: 'Cartas/ás-de-espadas.png'},
    { nome: '7 de ouro',         valor: '37', caminho: 'Cartas/7-de-ouros.png'},
    { nome: 'Terno de paus',     valor: '36', caminho: 'Cartas/3-de-paus.png'},
    { nome: 'Terno de copas',    valor: '35', caminho: 'Cartas/3-de-copas.png'},
    { nome: 'Terno de espada',   valor: '34', caminho: 'Cartas/3-de-espadas.png'},
    { nome: 'Terno de ouro',     valor: '33', caminho: 'Cartas/3-de-ouros.png'},
    { nome: 'Duque de paus',     valor: '32', caminho: 'Cartas/2-de-paus.png'},
    { nome: 'Duque de copas ',   valor: '31', caminho: 'Cartas/2-de-copas.png'},
    { nome: 'Duque de espadas',  valor: '30', caminho: 'Cartas/2-de-espadas.png'},
    { nome: 'Duque de ouros',    valor: '29', caminho: 'Cartas/2-de-ouros.png'},
    { nome: 'Ás de paus',        valor: '28', caminho: 'Cartas/ás-de-paus.png'},
    { nome: 'Ás de copas',       valor: '27', caminho: 'Cartas/ás-de-copas.png'},
    { nome: 'Ás de ouros',       valor: '26', caminho: 'Cartas/ás-de-ouros.png'},
    { nome: 'Rei de paus',       valor: '25', caminho: 'Cartas/rei-de-paus.png'},
    { nome: 'Rei de copas',      valor: '24', caminho: 'Cartas/rei-de-copas.png'},
    { nome: 'Rei de espadas',    valor: '23', caminho: 'Cartas/rei-de-espadas.png'},
    { nome: 'Rei de ouros',      valor: '22', caminho: 'Cartas/rei-de-ouros.png'},
    { nome: 'Valete de paus',    valor: '21', caminho: 'Cartas/valete-de-paus.png'},
    { nome: 'Valete de copas',   valor: '20', caminho: 'Cartas/valete-de-copas.png'},
    { nome: 'Valete de espadas', valor: '19', caminho: 'Cartas/valete-de-espadas.png'},
    { nome: 'Valete de ouros',   valor: '18', caminho: 'Cartas/valete-de-ouros.png'},
    { nome: 'Dama de paus',      valor: '17', caminho: 'Cartas/dama-de-paus.png'},
    { nome: 'Dama de copas',     valor: '16', caminho: 'Cartas/dama-de-copas.png'},
    { nome: 'Dama de espadas',   valor: '15', caminho: 'Cartas/dama-de-espadas.png'},
    { nome: 'Dama de ouros',     valor: '14', caminho: 'Cartas/dama-de-ouros.png'},
    { nome: '7 de paus',         valor: '13', caminho: 'Cartas/7-de-paus.png'},
    { nome: '7 de espadas',      valor: '12', caminho: 'Cartas/7-de-espadas.png'},
    { nome: '6 de paus',         valor: '11', caminho: 'Cartas/6-de-paus.png'},
    { nome: '6 de copas',        valor: '10', caminho: 'Cartas/6-de-copas.png'},
    { nome: '6 de espadas',      valor: '9',  caminho: 'Cartas/6-de-espadas.png'},
    { nome: '6 de ouro',         valor: '8',  caminho: 'Cartas/6-de-ouros.png'},
    { nome: '5 de paus',         valor: '7',  caminho: 'Cartas/5-de-paus.png'},
    { nome: '5 de copas',        valor: '6',  caminho: 'Cartas/5-de-copas.png'},
    { nome: '5 de espadas',      valor: '5',  caminho: 'Cartas/5-de-espadas.png'},
    { nome: '5 de ouro',         valor: '4',  caminho: 'Cartas/5-de-ouros.png'},
    { nome: '4 de copas',        valor: '3',  caminho: 'Cartas/5-de-copas.png'},
    { nome: '4 de paus',         valor: '2',  caminho: 'Cartas/5-de-espadas.png'},
    { nome: '4 de ouros',        valor: '1',  caminho: 'Cartas/4-de-ouros.png'}
]

function embaralharCartas() {
    MinhaCarta = Math.floor(Math.random() * Cartas.length);
    BotCarta = Math.floor(Math.random() * Cartas.length);
    while (BotCarta === MinhaCarta) {
        BotCarta = Math.floor(Math.random() * Cartas.length);
    }
    setTimeout(exibirCartaDoBot, 100);
   
}
function getRandomZeroOrOne() {
    return Math.round(Math.random());
}
function bot(){
        let resultado;

        if (MinhaCarta >= 29) {
            resultado = 1;
        }else if(MinhaCarta <= 28 && MinhaCarta >= 22) {
            let randomValue = getRandomZeroOrOne();
            resultado = randomValue;
        }else if(MinhaCarta < 22) {
            resultado = 0;
        }
        return resultado;
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
    let selectElement = document.getElementById("palpite");
    let valorSelecionado = selectElement.value;
    let respostaCorreta;
    let part = TotalVidasBot+TotalVidasJogador
        if(part == 6|| part == 4 || part == 2){
            if ( BotCarta > MinhaCarta && valorSelecionado === "1" ) {
                respostaCorreta = true

            } else if ( BotCarta < MinhaCarta && valorSelecionado === "0") {
                respostaCorreta = true
            }
        
            if (!respostaCorreta) {
                alert("Você acertou!");
                flipCarta();
                TotalVidasBot -= 1;
            } else {
                alert("Você errou!");
                flipCarta();
                TotalVidasJogador -= 1;
            }
        }else if(part ==5 || part == 3|| part ==1){
            let valorselecionabot = bot();
            respostaCorreta = (BotCarta > MinhaCarta && valorselecionabot === 1) || (BotCarta < MinhaCarta && valorselecionabot === 0);
            if (respostaCorreta) {
                alert("bot errou!" + valorselecionabot);
                flipCarta();
                TotalVidasBot -= 1;
            } else {
                alert("bot acertou!" + valorselecionabot);
                flipCarta();
                TotalVidasJogador -= 1;
            }
        }else{
            alert("a partida acabou, ou algo de errado deu errado")
        }
        if (TotalVidasBot == 2) {
            vidasBot.innerHTML = '❤️❤️🖤';
        } else if (TotalVidasBot == 1) {
            vidasBot.innerHTML = '❤️🖤🖤';
        }
        
        if (TotalVidasJogador == 2) {
            vidasJogador.innerHTML = '❤️❤️🖤';
        } else if (TotalVidasJogador == 1) {
            vidasJogador.innerHTML = '❤️🖤🖤';
        }
        
        if (TotalVidasBot == 0) {
            alert("Você venceu o bot!");
            vidasBot.innerHTML = '🖤🖤🖤';
            location.reload();
        } else if (TotalVidasJogador == 0) {
            alert("Você perdeu para o bot!");
            vidasJogador.innerHTML = '🖤🖤🖤';
            location.reload();
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