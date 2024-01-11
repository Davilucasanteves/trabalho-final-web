var BotCarta; //Essa variável é responsavel por armazenar o valor da carta do bot 
var MinhaCarta; //Essa variável é responsavel por armazenar o valor da carta da pessoa
var TotalVidasJogador = 3;
var TotalVidasBot = 3;
var rodada = 1;

const Cartas = [
    { valor:  0,  caminho: '/Cartas/4-de-paus.png'},
    { valor:  1,  caminho: '/Cartas/7-de-copas.png'},
    { valor:  2,  caminho: '/Cartas/ás-de-espadas.png'},
    { valor:  3,  caminho: '/Cartas/7-de-ouros.png'},
    { valor:  4,  caminho: '/Cartas/3-de-paus.png'},
    { valor:  5,  caminho: '/Cartas/3-de-copas.png'},
    { valor:  6,  caminho: '/Cartas/3-de-espadas.png'},
    { valor:  7,  caminho: '/Cartas/3-de-ouros.png'},
    { valor:  8,  caminho: '/Cartas/2-de-paus.png'},
    { valor:  9,  caminho: '/Cartas/2-de-copas.png'},
    { valor: 10, caminho: '/Cartas/2-de-espadas.png'},
    { valor: 11, caminho: '/Cartas/2-de-ouros.png'},
    { valor: 12, caminho: '/Cartas/ás-de-paus.png'},
    { valor: 13, caminho: '/Cartas/ás-de-copas.png'},
    { valor: 14, caminho: '/Cartas/ás-de-ouros.png'},
    { valor: 15, caminho: '/Cartas/rei-de-paus.png'},
    { valor: 16, caminho: '/Cartas/rei-de-copas.png'},
    { valor: 17, caminho: '/Cartas/rei-de-espadas.png'},
    { valor: 18, caminho: '/Cartas/rei-de-ouros.png'},
    { valor: 19, caminho: '/Cartas/valete-de-paus.png'},
    { valor: 20, caminho: '/Cartas/valete-de-copas.png'},
    { valor: 21, caminho: '/Cartas/valete-de-espadas.png'},
    { valor: 22, caminho: '/Cartas/valete-de-ouros.png'},
    { valor: 23, caminho: '/Cartas/dama-de-paus.png'},
    { valor: 24, caminho: '/Cartas/dama-de-copas.png'},
    { valor: 25, caminho: '/Cartas/dama-de-espadas.png'},
    { valor: 26, caminho: '/Cartas/dama-de-ouros.png'},
    { valor: 27, caminho: '/Cartas/7-de-paus.png'},
    { valor: 28, caminho: '/Cartas/7-de-espadas.png'},
    { valor: 29, caminho: '/Cartas/6-de-paus.png'},
    { valor: 30, caminho: '/Cartas/6-de-copas.png'},
    { valor: 31, caminho: '/Cartas/6-de-espadas.png'},
    { valor: 32, caminho: '/Cartas/6-de-ouros.png'},
    { valor: 33, caminho: '/Cartas/5-de-paus.png'},
    { valor: 34, caminho: '/Cartas/5-de-copas.png'},
    { valor: 35, caminho: '/Cartas/5-de-espadas.png'},
    { valor: 36, caminho: '/Cartas/5-de-ouros.png'},
    { valor: 37, caminho: '/Cartas/5-de-copas.png'},
    { valor: 38, caminho: '/Cartas/5-de-espadas.png'},
    { valor: 39, caminho: '/Cartas/4-de-ouros.png'}
]

EmbaralharCartas();

function Rodada(){
    if(rodada == 1) {
        Palpite();
    } else {
        rodada2();
    }
}

function EmbaralharCartas() {
    if (rodada == 1) {
        MinhaCarta = Math.floor(Math.random() * Cartas.length);
    do {
        BotCarta = Math.floor(Math.random() * Cartas.length);
    } while (BotCarta == MinhaCarta);
    CartaDoBot();
    CartaDaPessoa();
    } 
}

function CartaDoBot() {
    let CartaAtualDoBot = document.getElementById('cartaDoBot0');
    CartaAtualDoBot.src = Cartas[BotCarta].caminho;
}

function CartaDaPessoa() {
    let CartaAtualPessoa = document.getElementById('cartaDaPessoa0');
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
    let vidasBot = document.getElementById('ÍconeDeVidaDoBot');
    let vidasJogador = document.getElementById('ÍconeDeVidaDaPessoa');

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
    rodada += 3;
    Rodada();
}

// async function FlipCarta() {
//     let containerDaPessoa = document.querySelector('.containerDaPessoa');
  
//     containerDaPessoa.classList.add('virada');
  
//     await new Promise(function (resolve) {
//         setTimeout(function () {
//             containerDaPessoa.classList.remove('virada');
//             resolve(); 
//         }, 3000);
//     });
//     setTimeout(EmbaralharCartas, 200);
    
// }
   
// Segunda Rodada

function rodada2(){
    AtualizaSelect();
    RetornoDoArray();
    
}

const OpçõesDoSelect = [
    { valor: '0', texto: 'Faço nenhuma' },
    { valor: '1', texto: 'Faço uma' },
    { valor: '2', texto: 'Faço duas' },
    { valor: '3', texto: 'Faço três' },
    { valor: '4', texto: 'Faço quatro' },
    { valor: '5', texto: 'Faço cinco' },
    { valor: '6', texto: 'Faço seis' },
]

function AtualizaSelect() {
    const select = document.getElementById('palpite');
    select.innerHTML = '';

    for (let i = 0; i <= rodada; i++) {
        var option = document.createElement('option');
        option.value = OpçõesDoSelect[i].valor;
        option.textContent = OpçõesDoSelect[i].texto;
        select.appendChild(option);
    }
}

function sortearCartasUnicas() {
    let quantidadeCartas = rodada * 2;
    let cartasSorteadas = [];

    while (cartasSorteadas.length < quantidadeCartas) {
        let aleatorio = Math.floor(Math.random() * Cartas.length);
        if (!cartasSorteadas.includes(aleatorio)) {
            cartasSorteadas.push(aleatorio);
        }
    }
    
    const metade = Math.floor(cartasSorteadas.length / 2);
    const cartasParaPessoa = cartasSorteadas.slice(0, metade);
    const cartasParaBot = cartasSorteadas.slice(metade);
    console.log('carta da Pessoa', cartasParaPessoa);
    console.log('carta do Bot', cartasParaBot);

    return [cartasParaPessoa, cartasParaBot];

}

function RetornoDoArray(){
    let [cartaDaPessoa, cartaDoBot] = sortearCartasUnicas();
    AdicionaOutraCartaParaPessoa(cartaDaPessoa);
    AdicionaOutraCartaParaBot(cartaDoBot);
}

function AdicionaOutraCartaParaBot(Bot) {
    const containerBot = document.querySelector('.containerBot');
    containerBot.innerHTML = '';
    console.log(Array.isArray(Bot)); 

    for (let i = 0; i < rodada; i++) {
        let frenteCarta = document.createElement('img');
        frenteCarta.className = 'carta';
        frenteCarta.id = 'cartaDoBot' + i;

        console.log('Conteúdo de Bot:', Bot);
        console.log('sacah BOT', Cartas[Bot[i]]);
        frenteCarta.src = Cartas[Bot[i]].caminho;
        containerBot.appendChild(frenteCarta);

        let versoCarta = document.createElement('img');
        versoCarta.className = 'carta';
        versoCarta.id = 'cartaDoBot' + i;
        versoCarta.src = "/Cartas/verso.png";
        containerBot.appendChild(versoCarta);
    }
}

function AdicionaOutraCartaParaPessoa(Pessoa) {
    const containerDaPessoa = document.querySelector('.containerDaPessoa');
    containerDaPessoa.innerHTML = '';
   
    console.log(Array.isArray(Pessoa)); 

    for (let i = 0; i < rodada; i++) {
        let frenteCarta = document.createElement('img');
        frenteCarta.className = 'carta';
        frenteCarta.id = 'cartaDaPessoa' + i;
        console.log('Conteúdo de Pessoa:', Pessoa);
        console.log('sacah PESSOA', Cartas[Pessoa[i]]);
        frenteCarta.src = Cartas[Pessoa[i]].caminho;
        containerDaPessoa.appendChild(frenteCarta);
    }
}

// var selectElement = document.getElementById('palpite');
// selectElement.addEventListener('change', function() {
//     var valorSelecionado = selectElement.value;
//     console.log('Opção selecionada: ' + valorSelecionado);
//     if(rodada !== 1)
//     selectElement.disabled = true;
// });

// var imagens = document.querySelectorAll('.carta');
// imagens.forEach(function(imagem) {
//     imagem.addEventListener('click', function() {
//         alert('Você clicou na imagem!');
//     });
// });


