const Cartas = [
    { valor:  0, caminho: '../cartas/4-de-paus.png'},
    { valor:  1, caminho: '../cartas/7-de-copas.png'},
    { valor:  2, caminho: '../cartas/ás-de-espadas.png'},
    { valor:  3, caminho: '../cartas/7-de-ouros.png'},
    { valor:  4, caminho: '../cartas/3-de-paus.png'},
    { valor:  5, caminho: '../cartas/3-de-copas.png'},
    { valor:  6, caminho: '../cartas/3-de-espadas.png'},
    { valor:  7, caminho: '../cartas/3-de-ouros.png'},
    { valor:  8, caminho: '../cartas/2-de-paus.png'},
    { valor:  9, caminho: '../cartas/2-de-copas.png'},
    { valor: 10, caminho: '../cartas/2-de-espadas.png'},
    { valor: 11, caminho: '../cartas/2-de-ouros.png'},
    { valor: 12, caminho: '../cartas/ás-de-paus.png'},
    { valor: 13, caminho: '../cartas/ás-de-copas.png'},
    { valor: 14, caminho: '../cartas/ás-de-ouros.png'},
    { valor: 15, caminho: '../cartas/rei-de-paus.png'},
    { valor: 16, caminho: '../cartas/rei-de-copas.png'},
    { valor: 17, caminho: '../cartas/rei-de-espadas.png'},
    { valor: 18, caminho: '../cartas/rei-de-ouros.png'},
    { valor: 19, caminho: '../cartas/valete-de-paus.png'},
    { valor: 20, caminho: '../cartas/valete-de-copas.png'},
    { valor: 21, caminho: '../cartas/valete-de-espadas.png'},
    { valor: 22, caminho: '../cartas/valete-de-ouros.png'},
    { valor: 23, caminho: '../cartas/dama-de-paus.png'},
    { valor: 24, caminho: '../cartas/dama-de-copas.png'},
    { valor: 25, caminho: '../cartas/dama-de-espadas.png'},
    { valor: 26, caminho: '../cartas/dama-de-ouros.png'},
    { valor: 27, caminho: '../cartas/7-de-paus.png'},
    { valor: 28, caminho: '../cartas/7-de-espadas.png'},
    { valor: 29, caminho: '../cartas/6-de-paus.png'},
    { valor: 30, caminho: '../cartas/6-de-copas.png'},
    { valor: 31, caminho: '../cartas/6-de-espadas.png'},
    { valor: 32, caminho: '../cartas/6-de-ouros.png'},
    { valor: 33, caminho: '../cartas/5-de-paus.png'},
    { valor: 34, caminho: '../cartas/5-de-copas.png'},
    { valor: 35, caminho: '../cartas/5-de-espadas.png'},
    { valor: 36, caminho: '../cartas/5-de-ouros.png'},
    { valor: 37, caminho: '../cartas/5-de-copas.png'},
    { valor: 38, caminho: '../cartas/5-de-espadas.png'},
    { valor: 39, caminho: '../cartas/4-de-ouros.png'}
]
var BotCarta;  
var MinhaCarta; 
var TotalVidasJogador = 3;
var TotalVidasBot = 3;

var rodada = 1;

entregaCartas();

var selectElement = document.getElementById('palpite');

selectElement.addEventListener('change', function() {
    if (controlaChangeSelect) {
        geraPalpite(); 
    } else {
        palpite();
    }
});

function entregaCartas() {
    MinhaCarta = Math.floor(Math.random() * Cartas.length);
    do {
        BotCarta = Math.floor(Math.random() * Cartas.length);
    } while (BotCarta == MinhaCarta);
    cartaDoBot();
    cartaDaPessoa();
}
function cartaDoBot() {
    let CartaAtualDoBot = document.getElementById('cartaDoBot0');
    CartaAtualDoBot.src = Cartas[BotCarta].caminho;
}
function cartaDaPessoa() {
    let CartaAtualPessoa = document.getElementById('cartaDaPessoa0');
    CartaAtualPessoa.src = Cartas[MinhaCarta].caminho;
}
function palpite() {
    let valorSelecionado = document.getElementById('palpite').value;
    if ( BotCarta > MinhaCarta && valorSelecionado == '1' || 
    BotCarta < MinhaCarta && valorSelecionado == '0' ) {
        TotalVidasBot -= 1;
    } else {
        TotalVidasJogador -= 1;
    }
    flipCarta();
}
function flipCarta() {
    let containerDaPessoa = document.querySelector('.containerDaPessoa');
    containerDaPessoa.classList.add('virada');
    
    setTimeout(() => {
        containerDaPessoa.classList.remove('virada');
        setTimeout(() => vidas(), 500);
    }, 2000);
}
function vidas() {
    let vidasBot = document.getElementById('ÍconeDeVidaDoBot');
    let vidasJogador = document.getElementById('ÍconeDeVidaDaPessoa');

    if (TotalVidasBot == 2) {
        vidasBot.innerHTML = '❤️❤️🖤';
    } else if (TotalVidasBot == 1) {
        vidasBot.innerHTML = '❤️🖤🖤';
    } else if (TotalVidasBot == 0) {
        vidasBot.innerHTML = '🖤🖤🖤';
        alert("Você venceu!");
        location.reload()
    } 
    
    if (TotalVidasJogador == 2) {
        vidasJogador.innerHTML = '❤️❤️🖤';
    } else if (TotalVidasJogador == 1) {
        vidasJogador.innerHTML = '❤️🖤🖤';
    } else if (TotalVidasJogador == 0) {
        vidasJogador.innerHTML = '🖤🖤🖤';
        alert("Você perdeu");
        location.reload()
    } 
    rodada += 1; 
    proximaRodada();
}


// Segunda Rodada
function proximaRodada() {
    AtualizaSelect();
    sortearCartas();
    controlaChangeSelect = true;
}
var controlaChangeSelect = false;
var cartasJaUsadas = [];
var selectTravado = false;
var palpitePessoa;
var palpiteBot;
var cartasClicadas = 0;


function geraPalpite () {
    palpitePessoa = parseInt(selectElement.value, 10);
    do {
        palpiteBot = Math.floor(Math.random() * rodada + 1);
    } while (palpitePessoa + palpiteBot == rodada);
    
    selectElement.disabled = true;
    selectTravado = true;
    mostraPalpite ();
}
function mostraPalpite() {
    let selecionaBot = document.getElementById('infoBot');
    let selecionaPessoa = document.getElementById('infoPessoa');

    if (rodada == 2) {
        let fraseDoBot = document.createElement('p');
        fraseDoBot.textContent = "Palpite do Bot: " + palpiteBot;
        selecionaBot.appendChild(fraseDoBot);

        let fraseDaPessoa = document.createElement('p');
        fraseDaPessoa.textContent = "Palpite da Pessoa: " + palpitePessoa;
        selecionaPessoa.appendChild(fraseDaPessoa);
    } else {
        selecionaBot.lastChild.textContent = "Palpite do Bot: " + palpiteBot;
        selecionaPessoa.lastChild.textContent = "Palpite da Pessoa: " + palpitePessoa;
    }
}
function AtualizaSelect() {
    const OpçõesDoSelect = [
        { valor: 0, texto: 'Faço nenhuma' },
        { valor: 1, texto: 'Faço uma' },
        { valor: 2, texto: 'Faço duas' },
        { valor: 3, texto: 'Faço três' },
        { valor: 4, texto: 'Faço quatro' },
        { valor: 5, texto: 'Faço cinco' },
        { valor: 6, texto: 'Faço seis' },
    ]
    selectElement.innerHTML = '<option>Escolha seu palpite</option>';
   
    for (let i = 0; i <= rodada; i++) {
        let option = document.createElement('option');
        option.value = OpçõesDoSelect[i].valor;
        option.textContent = OpçõesDoSelect[i].texto;
        selectElement.appendChild(option);
    }
}
function sortearCartas() {
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

    adicionaCartaBot(cartasParaBot);
    adicionaCartaPessoa(cartasParaPessoa, cartasParaBot);
}

function adicionaCartaBot(cartasParaBot) {
    const containerBot = document.querySelector('.containerBot');
    containerBot.innerHTML = '';

    for (let i = 0; i < rodada; i++) {
        const divCarta = document.createElement('div');
        divCarta.className = 'cartaContainer' + i;
    
        const frenteCarta = document.createElement('img');
        frenteCarta.classList.add('carta', 'frente');
        frenteCarta.src = Cartas[cartasParaBot[i]].caminho;

        const versoCarta = document.createElement('img');
        versoCarta.classList.add('carta', 'verso');
        versoCarta.src = "../cartas/verso.png";
        
        divCarta.append(frenteCarta, versoCarta);
        containerBot.appendChild(divCarta);
    }
}
function adicionaCartaPessoa(cartasParaPessoa, cartasParaBot) {
    const containerDaPessoa = document.querySelector('.containerDaPessoa');
    containerDaPessoa.innerHTML = '';

    for (let i = 0; i < rodada; i++) {
        const divCarta = document.createElement('div');
        divCarta.className = 'cartaContainer' + i;
        
        const frenteCarta = document.createElement('img');
        frenteCarta.className = 'carta';
        frenteCarta.src = Cartas[cartasParaPessoa[i]].caminho;
        frenteCarta.style.cursor = "pointer";

        const cartaEscolhidaDaPessoa = Cartas[cartasParaPessoa[i]].valor;

        divCarta.addEventListener('click', () => 
            gerirClick(frenteCarta, cartaEscolhidaDaPessoa, cartasParaBot)
        );
        
        divCarta.append(frenteCarta);
        containerDaPessoa.appendChild(divCarta);
    }
}
function gerirClick (frenteCarta, cartaEscolhidaDaPessoa, cartasParaBot) {
    if (selectTravado) {
        frenteCarta.onclick = null;
        frenteCarta.style.marginBottom = 30 + "px";
        cartasClicadas += 1;

        jogadaDoBot(cartasParaBot, cartaEscolhidaDaPessoa);
    } else {
        alert('Selecione seu palpite');
    }
}
function jogadaDoBot (cartasParaBot, cartaEscolhidaDaPessoa) { 
    do {
        var cartaEscolhidaDoBot = cartasParaBot[Math.floor(Math.random() * rodada)];
    } while (cartasJaUsadas.includes(cartaEscolhidaDoBot));
    cartasJaUsadas.push(cartaEscolhidaDoBot);
    const position = cartasParaBot.indexOf(cartaEscolhidaDoBot);
    const selecionaContainer = document.querySelector('.cartaContainer' + position);
    selecionaContainer.classList.add('virada');
    comparacao(cartaEscolhidaDoBot, cartaEscolhidaDaPessoa);
}
function comparacao (cartaEscolhidaDoBot, cartaEscolhidaDaPessoa) {
    if (cartaEscolhidaDoBot > cartaEscolhidaDaPessoa){
        palpitePessoa -= 1;
        console.log("pessoa perdeu")
    } else {
        palpiteBot -= 1;
        console.log("pessoa ganhou")
    }
    if (cartasClicadas == rodada) {
        resultadoAposTodasCartaJogadas();
    }
}
function resultadoAposTodasCartaJogadas() {
    if (palpitePessoa != 0) {
        TotalVidasJogador -= 1;
    }
    if (palpiteBot != 0) {
        TotalVidasBot -= 1;
    }
    selectElement.disabled = false;
    selectTravado = false;
    cartasClicadas = 0;
    cartasJaUsadas = [];
    setTimeout(vidas, 1000)
}