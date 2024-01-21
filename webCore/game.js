const Cartas = [
    { valor:  0, caminho: '/Cartas/4-de-paus.png'},
    { valor:  1, caminho: '/Cartas/7-de-copas.png'},
    { valor:  2, caminho: '/Cartas/ás-de-espadas.png'},
    { valor:  3, caminho: '/Cartas/7-de-ouros.png'},
    { valor:  4, caminho: '/Cartas/3-de-paus.png'},
    { valor:  5, caminho: '/Cartas/3-de-copas.png'},
    { valor:  6, caminho: '/Cartas/3-de-espadas.png'},
    { valor:  7, caminho: '/Cartas/3-de-ouros.png'},
    { valor:  8, caminho: '/Cartas/2-de-paus.png'},
    { valor:  9, caminho: '/Cartas/2-de-copas.png'},
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
var BotCarta;  
var MinhaCarta; 

var rodada = 1;
embaralharCartas();

function Rodada(){
    if(rodada == 1) {
        palpite();
    } else {
        rodada2();
    }
}
function embaralharCartas() {
    if (rodada == 1) {
        MinhaCarta = Math.floor(Math.random() * Cartas.length);
    do {
        BotCarta = Math.floor(Math.random() * Cartas.length);
    } while (BotCarta == MinhaCarta);
    cartaDoBot();
    cartaDaPessoa();
    } 
}
function cartaDoBot() {
    let CartaAtualDoBot = document.getElementById('cartaDoBot0');
    CartaAtualDoBot.src = Cartas[BotCarta].caminho;
}
function cartaDaPessoa() {
    let CartaAtualPessoa = document.getElementById('cartaDaPessoa0');
    CartaAtualPessoa.src = Cartas[MinhaCarta].caminho;
}

var TotalVidasJogador = 3;
var TotalVidasBot = 3;

function palpite() {
    

    let valorSelecionado = document.getElementById('palpite').value;
    if ( BotCarta > MinhaCarta && valorSelecionado == '1' || BotCarta < MinhaCarta && valorSelecionado == '0' ) {
        alert('Você acertou!');
        TotalVidasBot -= 1;
    } else {
        alert('Você errou!');
        TotalVidasJogador -= 1;
    }
    vidas();
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
    rodada++; 
    if (rodada == 2){
        Rodada();
    }
}

// function FlipCarta() {
//     var containerDaPessoa = document.querySelector('.containerPessoa');

//     containerDaPessoa.classList.add('virada');
    
//     setTimeout(function () {
//         containerDaPessoa.classList.remove('virada');
//     }, 3000);
//     
//     setTimeout(Rodada, 10000);
// }



// Segunda Rodada
function rodada2() {
    AtualizaSelect();
    sortearCartasUnicas();
}
function AtualizaSelect() {
    const OpçõesDoSelect = [
        { texto: 'Escolha seu palpite'},
        { valor: '0', texto: 'Faço nenhuma' },
        { valor: '1', texto: 'Faço uma' },
        { valor: '2', texto: 'Faço duas' },
        { valor: '3', texto: 'Faço três' },
        { valor: '4', texto: 'Faço quatro' },
        { valor: '5', texto: 'Faço cinco' },
        { valor: '6', texto: 'Faço seis' },
    ]
    const select = document.getElementById('palpite');
    select.innerHTML = '';

    for (let i = 0; i <= rodada +1; i++) {
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
    AdicionaOutraCartaParaPessoa(cartasParaPessoa, cartasParaBot);
    AdicionaOutraCartaParaBot(cartasParaBot);
}
function AdicionaOutraCartaParaBot(Bot) {
    const containerBot = document.querySelector('.containerBot');
    containerBot.innerHTML = '';

    for (let i = 0; i < rodada; i++) {
        let frenteCarta = document.createElement('img');
        frenteCarta.className = 'carta';
        frenteCarta.id = 'cartaDoBot' + i;
        frenteCarta.src = Cartas[Bot[i]].caminho;
        containerBot.appendChild(frenteCarta);

        let versoCarta = document.createElement('img');
        versoCarta.className = 'carta';
        versoCarta.id = 'cartaDoBotVerso' + i;
        versoCarta.src = "/Cartas/verso.png";
        containerBot.appendChild(versoCarta);
    }
}
var cartasClicadas = 0;
function AdicionaOutraCartaParaPessoa(Pessoa, Bot) {
    const containerDaPessoa = document.querySelector('.containerDaPessoa');
    containerDaPessoa.innerHTML = '';

    for (let i = 0; i < rodada; i++) {
        let frenteCarta = document.createElement('img');
        frenteCarta.className = 'carta';
        frenteCarta.id = 'cartaDaPessoa' + i;
        frenteCarta.src = Cartas[Pessoa[i]].caminho;
        containerDaPessoa.appendChild(frenteCarta);

        frenteCarta.addEventListener('click', function(evento) {
            if (selectOculto) {
                cartaEscolhidaDaPessoa = Cartas[Pessoa[i]].valor;
                evento.target.removeEventListener('click', arguments.callee);
                cartasClicadas++;
                if (cartasClicadas < rodada){
                    jogadaDoBot(Bot, cartaEscolhidaDaPessoa);
                }
                
                if (cartasClicadas == rodada) {
                    jogadaDoBot(Bot, cartaEscolhidaDaPessoa);
                    if (palpitePessoa == 0){
                        TotalVidasJogador = TotalVidasJogador;
                    } else{
                        TotalVidasJogador--
                    }
                    if (palpiteBot == 0){
                        TotalVidasBot = TotalVidasBot;
                    } else {
                        TotalVidasBot--
                    }
                    vidas();
                    selectElement.disabled = false;
                    selectOculto = false;
                    cartasClicadas = 0;
                    jaUsadas = [];
                    setTimeout(rodada2, 1500);
                    
                
                }
              
            } else {
                alert('Selecione seu palpite');
            }
        });
    }
}

var selectOculto = false;

var selectElement = document.getElementById('palpite');
selectElement.addEventListener('change', function() {
    geraPalpite(); 
});

var palpitePessoa;
var palpiteBot;

function geraPalpite () {
    if(rodada !== 1) {
        palpitePessoa = parseInt(selectElement.value, 10);
        do {
            palpiteBot = Math.floor(Math.random() * rodada + 1);
        } while (palpitePessoa + palpiteBot == rodada);
        
        selectElement.disabled = true;
        selectOculto = true;
        mostraPalpite ();
    }
}
function mostraPalpite() {
    var selecionaBot = document.querySelector(".ConteudoBot");
    var selecionaPessoa = document.querySelector(".ConteudoPessoa");

    // Verifica se a rodada é igual a 2
    if (rodada == 2) {
        // Cria os elementos apenas quando a rodada for igual a 2
        var fraseDoBot = document.createElement('p');
        fraseDoBot.textContent = "Palpite do Bot: " + palpiteBot;
        selecionaBot.appendChild(fraseDoBot);

        var fraseDaPessoa = document.createElement('p');
        fraseDaPessoa.textContent = "Palpite da Pessoa: " + palpitePessoa;
        selecionaPessoa.appendChild(fraseDaPessoa);
    } else {
        // Atualiza os valores quando a rodada for diferente de 2
        if (selecionaBot.lastChild) {
            selecionaBot.lastChild.textContent = "Palpite do Bot: " + palpiteBot;
        }

        if (selecionaPessoa.lastChild) {
            selecionaPessoa.lastChild.textContent = "Palpite da Pessoa: " + palpitePessoa;
        }
    }
}


var jaUsadas = [];

function jogadaDoBot (Bot, cartaEscolhidaDaPessoa) { 
    do {
        var cartaEscolhidaDoBot = Bot[Math.floor(Math.random() * rodada)];
    } while (jaUsadas.includes(cartaEscolhidaDoBot));

    jaUsadas.push(cartaEscolhidaDoBot);
    
    var posição = Bot.indexOf(cartaEscolhidaDoBot);

    var idCarta = "cartaDoBotVerso" + posição;
    var removerVerso = document.getElementById(idCarta)
    removerVerso.remove();

    comparacao(cartaEscolhidaDoBot, cartaEscolhidaDaPessoa);
}
function comparacao (cartaEscolhidaDoBot, cartaEscolhidaDaPessoa) {
    if (cartaEscolhidaDoBot > cartaEscolhidaDaPessoa){
        palpitePessoa -= 1;
        alert('Você fez');
    } else {
        palpiteBot -= 1;
        alert('O Bot fez');
        // vezDoBot();
    }
    
}
function vezDoBot() {
    do {
        var cartaEscolhidaDoBot = Bot[Math.floor(Math.random() * rodada)];
    } while (jaUsadas.includes(cartaEscolhidaDoBot));

    jaUsadas.push(cartaEscolhidaDoBot);
    
    var posição = Bot.indexOf(cartaEscolhidaDoBot);

    var idCarta = "cartaDoBotVerso" + posição;
    var removerVerso = document.getElementById(idCarta)
    removerVerso.remove();

}






