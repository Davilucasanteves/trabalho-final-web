var BotCarta;
var MinhaCarta;
var TotalVidasJogador = 3;
var TotalVidasBot = 3;

const Cartas = [
    { valor: '40', caminho: 'Cartas/4-de-paus.png'},
    { valor: '39', caminho: 'Cartas/7-de-copas.png'},
    { valor: '38', caminho: 'Cartas/ás-de-espadas.png'},
    { valor: '37', caminho: 'Cartas/7-de-ouros.png'},
    { valor: '36', caminho: 'Cartas/3-de-paus.png'},
    { valor: '35', caminho: 'Cartas/3-de-copas.png'},
    { valor: '34', caminho: 'Cartas/3-de-espadas.png'},
    { valor: '33', caminho: 'Cartas/3-de-ouros.png'},
    { valor: '32', caminho: 'Cartas/2-de-paus.png'},
    { valor: '31', caminho: 'Cartas/2-de-copas.png'},
    { valor: '30', caminho: 'Cartas/2-de-espadas.png'},
    { valor: '29', caminho: 'Cartas/2-de-ouros.png'},
    { valor: '28', caminho: 'Cartas/ás-de-paus.png'},
    { valor: '27', caminho: 'Cartas/ás-de-copas.png'},
    { valor: '26', caminho: 'Cartas/ás-de-ouros.png'},
    { valor: '25', caminho: 'Cartas/rei-de-paus.png'},
    { valor: '24', caminho: 'Cartas/rei-de-copas.png'},
    { valor: '23', caminho: 'Cartas/rei-de-espadas.png'},
    { valor: '22', caminho: 'Cartas/rei-de-ouros.png'},
    { valor: '21', caminho: 'Cartas/valete-de-paus.png'},
    { valor: '20', caminho: 'Cartas/valete-de-copas.png'},
    { valor: '19', caminho: 'Cartas/valete-de-espadas.png'},
    { valor: '18', caminho: 'Cartas/valete-de-ouros.png'},
    { valor: '17', caminho: 'Cartas/dama-de-paus.png'},
    { valor: '16', caminho: 'Cartas/dama-de-copas.png'},
    { valor: '15', caminho: 'Cartas/dama-de-espadas.png'},
    { valor: '14', caminho: 'Cartas/dama-de-ouros.png'},
    { valor: '13', caminho: 'Cartas/7-de-paus.png'},
    { valor: '12', caminho: 'Cartas/7-de-espadas.png'},
    { valor: '11', caminho: 'Cartas/6-de-paus.png'},
    { valor: '10', caminho: 'Cartas/6-de-copas.png'},
    { valor: '9',  caminho: 'Cartas/6-de-espadas.png'},
    { valor: '8',  caminho: 'Cartas/6-de-ouros.png'},
    { valor: '7',  caminho: 'Cartas/5-de-paus.png'},
    { valor: '6',  caminho: 'Cartas/5-de-copas.png'},
    { valor: '5',  caminho: 'Cartas/5-de-espadas.png'},
    { valor: '4',  caminho: 'Cartas/5-de-ouros.png'},
    { valor: '3',  caminho: 'Cartas/5-de-copas.png'},
    { valor: '2',  caminho: 'Cartas/5-de-espadas.png'},
    { valor: '1',  caminho: 'Cartas/4-de-ouros.png'}
]

EmbaralharCartas();

function EmbaralharCartas() {
    MinhaCarta = Math.floor(Math.random() * Cartas.length);
    do {
        BotCarta = Math.floor(Math.random() * Cartas.length);
    } while (BotCarta == MinhaCarta);
    CartaDoBot();
    CartaDaPessoa();
}

function CartaDoBot() {
    let CartaAtualDoBot = document.getElementById('cartaDoBot');
    CartaAtualDoBot.src = Cartas[BotCarta].caminho;
}

function CartaDaPessoa() {
    let CartaAtualPessoa = document.getElementById('cartaDaPessoa');
    CartaAtualPessoa.src = Cartas[MinhaCarta].caminho;
}

function Palpite() {
    let valorSelecionado = document.getElementById('palpite').value;
    if ( BotCarta > MinhaCarta && valorSelecionado == '1' || BotCarta < MinhaCarta && valorSelecionado == '0' ) {
        alert('Você acertou!');
        TotalVidasBot -= 1;
    } else {
        alert('Você errou!');
        TotalVidasJogador -= 1;
    }
    Vidas();
}

function Vidas() {
    let vidasBot = document.getElementById('VidaIconBot');
    let vidasJogador = document.getElementById('VidaIconPessoa');

    if (TotalVidasBot == 2) {
        vidasBot.innerHTML = '❤️❤️🖤';
    } else if (TotalVidasBot == 1) {
        vidasBot.innerHTML = '❤️🖤🖤';
    } else if (TotalVidasBot == 0) {
        vidasBot.innerHTML = '🖤🖤🖤';
        alert("Você venceu o bot!");
        location.reload();
    } 
    
    if (TotalVidasJogador == 2) {
        vidasJogador.innerHTML = '❤️❤️🖤';
    } else if (TotalVidasJogador == 1) {
        vidasJogador.innerHTML = '❤️🖤🖤';
    } else if (TotalVidasJogador == 0) {
        vidasJogador.innerHTML = '🖤🖤🖤';
        alert("Você perdeu para o bot!");
        location.reload();
    } 
    FlipCarta();
}

async function FlipCarta() {
    let containerDaPessoa = document.querySelector('.containerDaPessoa');
  
    containerDaPessoa.classList.add('virada');
  
    await new Promise(function (resolve) {
        setTimeout(function () {
            containerDaPessoa.classList.remove('virada');
            resolve(); 
        }, 3000);
    });

    setTimeout(EmbaralharCartas, 100);
  }
   




