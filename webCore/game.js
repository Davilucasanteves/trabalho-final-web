var BotCarta;
var MinhaCarta;
var TotalVidasJogador = 3;
var TotalVidasBot = 3;
var CartaAtualDoBot;

var Cartas = [
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

window.addEventListener('load', function() {
    BotCarta = Math.floor(Math.random() * Cartas.length);
    CartaAtualDoBot = document.getElementById('cartaDoBot');
    CartaAtualDoBot.src = Cartas[BotCarta].caminho;
});

function EmbaralharCartas() {
    MinhaCarta = Math.floor(Math.random() * Cartas.length);
    do {
        BotCarta = Math.floor(Math.random() * Cartas.length);
    } while (BotCarta === MinhaCarta);
    CartaDoBot();
}

function CartaDoBot() {
    CartaAtualDoBot = document.getElementById('cartaDoBot');
    CartaAtualDoBot.src = Cartas[BotCarta].caminho;
    CartaDaPessoa();
}

function CartaDaPessoa() {
    var CartaAtualPessoa = document.getElementById('cartaDaPessoa');
    CartaAtualPessoa.src = Cartas[MinhaCarta].caminho;
    Palpite();
}

function Palpite() {
    var valorSelecionado = document.getElementById('palpite').value;
    if ( BotCarta > MinhaCarta && valorSelecionado === '1' || BotCarta < MinhaCarta && valorSelecionado === '0' ) {
        alert('Você acertou!');
        TotalVidasBot -= 1;
    } else {
        alert('Você errou!');
        TotalVidasJogador -= 1;
    }
    Vidas();
}

function Vidas() {
    var vidasBot = document.getElementById('VidaIconBot');
    var vidasJogador = document.getElementById('VidaIconPessoa');

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
        var reiniciar = document.createElement('button');
    } else if (TotalVidasJogador == 0) {
        alert("Você perdeu para o bot!");
        vidasJogador.innerHTML = '🖤🖤🖤';
        location.reload();
    } 
    FlipCarta();
}

function FlipCarta() {
    var frente = document.querySelector('.frente');
    // var cartaDoBot = document.querySelector('.containerBot');

        frente.classList.remove('virada');
        setTimeout(() => {
            frente.classList.add('virada');
            // cartaDoBot.classList.add('virada');
        }, 3000);
       
    // // setTimeout(VoltarBaralho, 3000);
    // setTimeout(embaralharCartas, 3000);

}

// function VoltarBaralho() {
//     var cartaDoBot = document.getElementById('carta');
//     var cartaDoVerso = document.getElementById('verso');
//     var cartaDaFrente = document.getElementById('cartaPessoa');

//     cartaDoBot.classList.add('moveAndReturn');
//     cartaDoVerso.classList.add('moveAndReturn');
//     cartaDaFrente.classList.add('moveAndReturn');

//     const rect = cartaDoBot.getBoundingClientRect();

//     const offsetY = window.scrollY;
//     const offsetX = window.scrollX;

//     const absoluteLeft = rect.left + offsetX;
//     const absoluteTop = rect.top + offsetY;

//     console.log('Absolute Left:', absoluteLeft);
//     console.log('Absolute Top:', absoluteTop);

//     setTimeout(function() {
//         cartaDoBot.classList.remove('moveAndReturn');
//         cartaDoVerso.classList.remove('moveAndReturn');
//         cartaDaFrente.classList.remove('moveAndReturn');
//     }, 3000);

//     setTimeout(shuffle, 3000);
// }

// function shuffle() {
//     var containerBaralho = document.querySelector('.containerBaralho');
//     containerBaralho.classList.add('shuffle');
//     embaralharCartas();
// }
// embaralharCartas();