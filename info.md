[comment]: <> (Aqui é onde estará as regras do jogo, cartas necessárias e afins.)

# Introdução

O *AdivinheSô* (nome provisório) é um jogo de cartas semelhante ao truco mineiro, onde 2 a 
7 jogadores precisam fazer uma quantidade determinada de pontos, sem mais nem menos, para 
não perder pontos e assim vencer o jogo.

## Funcionamento

Na primeira rodada, cada jogador receberá uma carta. O jogador não pode ver a própria carta, 
mas pode ver a dos outros jogadores e vice-versa. O jogo gira no sentido anti-horário e 
o jogador que inicia pode ser escolhido aleatoriamente. 

Observando as cartas dos oponentes e suas forças, o jogador deverá deduzir se ele *fará* aquele
ponto ou não, e dependendo do que ele disser, ele pode ou não perder uma vida (o número de *pontos*
que será feito na partida NÃO pode ser igual ao número de cartas de cada jogador, apenas um valor 
superior ou inferior, pelo contrário há a chance de nenhuma vida ser perdida).
Após todos os jogadores terem dito se faziam ou não, as cartas são mostradas a todos e a carta
mais forte fará o ponto.
Se a pessoa disse que *faria* e de fato fez, ele não perderá nenhuma vida; caso não tenha feito
o que disse, o mesmo perderá uma vida. Isso vale para todos os jogadores.

A partir da próxima rodada, os jogadores precisam ver as próprias cartas sem mostrar aos oponentes.
Como na primeira rodada, os jogadores precisam dizer se farão ou não (começando do jogador à direita 
da pessoa que começou falando), sendo o mínimo 0 e o máximo o número de cartas que possuem nas mãos 
(ex: caso tenha 5 cartas e acho que três delas *fazem* pontos,eu posso dizer que faço 3, desde que 
eu nao seja o último a dizer e isso faça a quantidade de pontos somar 5); após dito inicia-se o jogo. 
A pessoa que começou falando joga primeiro. Da mesma forma como na primeira rodada, o jogador precisa 
fazer pontos equivalentes ao que disse ou perderá uma vida ao fim da rodada. A cada rodada, os jogadores 
jogam com uma carta a mais em mãos (2º rodada com 2 cartas, 3º com 3 cartas, 4º com 4 e assim por diante);
caso o jogador perca 3 vidas, ele perde e os outros jogadores que ainda tiverem vidas continuam. Vence o 
último que ainda tiver vidas, ou empata, caso todos percam todas as vidas ao fim do jogo. 

## Cartas usadas

O *AdivinheSô* usa o baralho francês, com exclusão dos curingas e das cartas 8, 9 e 10 dos quatro naipes.
A ordem de força das cartas é a mesma do truco mineiro, sendo ela (em ordem crescente):

### Cartas normais

4♦ - 5♦ - 6♦ -      Q♦ - J♦ - K♦ - A♦ - 2♦ - 3♦ - 
4♠ - 5♠ - 6♠ - 7♠ - Q♠ - J♠ - K♠ -      2♠ - 3♠ - 
4♥ - 5♥ - 6♥ -      Q♥ - J♥ - K♥ - A♥ - 2♥ - 3♥ - 
     5♣ - 6♣ - 7♣ - Q♣ - J♣ - K♣ - A♣ - 2♣ - 3♣ - 
