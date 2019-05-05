let eventos = [];
let primeira = true;
let religiao = false;

function start(){
    if(primeira == false){
        decisao = confirmarRecomeco();
        if(decisao == false){
            return;
        }
    }
    if (document.getElementById("religiao").checked == true){
        religiao = true;
    }else {
        religiao = false;
    }
    eventos = inciarDeck(religiao);
    cartasRestantes();
    limparTela();
    primeira = false;
}

function inciarDeck(religiao){
    deck = [
        ['Cartas não respondidas', 'A ação Ajuda Externa não pode ser efetuada durante esse turno'],
        ['Cartas não respondidas', 'A ação Ajuda Externa não pode ser efetuada durante esse turno'],
        ['Um dia ruim', 'A ação Renda não pode ser efetuada durante esse turno'],
        ['Um dia ruim', 'A ação Renda não pode ser efetuada durante esse turno'],
        ['Burguês astuto', 'Você deve receber uma moeda do banco'],
        ['Burguês astuto', 'Você deve receber uma moeda do banco'],
        ['Jogo de poder', 'Você pode nomear dois jogadores..., caso nomeie, eles deverão trocar uma de suas influências entre si'],
        ['Jogo de poder', 'Você pode nomear dois jogadores..., caso nomeie, eles deverão trocar uma de suas influências entre si'],
        ['Negócios falidos', 'O Duque não pode ser utilizado durante esse turno'],
        ['Bloqueio comercial dos mares', 'O capitão não pode ser utilizado durante esse turno'],
        ['Investigações em andamento', 'O assassino não pode ser utilizado durante esse turno'],
        ['Negociações mal resolvidas', 'O embaixador não pode ser utilizado durante esse turno'],
        ['Perdendo aliados', 'Nenhuma habilidade de personagem pode ser utilizada durante esse turno'],
        ['Perdendo aliados', 'Nenhuma habilidade de personagem pode ser utilizada durante esse turno'],
        ['Favores de um pirata', 'Você pode roubar uma moeda de outro jogador'],
        ['Favores de um pirata', 'Você pode roubar uma moeda de outro jogador'],
        ['Chantagens', 'Você pode nomear outro jogador e dar-lhe uma opção: 1-Pagar duas moedas a você para manter suas influências 2-Trocar uma influência'],
        ['Chantagens', 'Você pode nomear outro jogador e dar-lhe uma opção: 1-Pagar duas moedas a você para manter suas influências 2-Trocar uma influência'],
        ['Rede de mentiras', 'Todos os jogadores devem embaralhar uma de suas influências aptas ao montante e seguindo a ordem dos turnos, comprar uma nova'],
        ['Planos sabotados','Todas as influências aptas dos jogadores devem ser embaralhadas (formando um montante separado) e redistribuídas, seguindo a ordem dos turnos'],
        ['O caos é uma escada', 'O(s) jogador(es) com a maior riqueza deve(m) pagar duas moedas para o banco, então o(s) jogador(es) sem nenhuma riqueza deve(m) receber duas moedas do banco'],
        ['Burocracia', 'A ação Golpe de Estado mão pode ser efetuada durante esse turno(caso só seja possivel aplicar o Golpe de Estado, o mesmo deverá passar a vez)'],
        ['Pagando dívidas?', 'Você pode doar quantas moedas desejar a outro jogador, assim como receber durante esse turno'],
        ['Semana de festivais', 'Cada jogador deve receber uma moeda do banco, seguindo a ordem dos turnos'],
        ['Sussurros da corte', 'Escolha outro jogador, a menos que ele lhe pague uma moeda, olhe uma de suas influências e decida se ele deve mantê-la ou trocá-la'],
    ];

    if(religiao == true){
        deck.push(
            ['Milagres têm preços','Cada jogador deve pagar uma moeda para o banco das igrejas.'],
            ['Sussurros na sacristia','Você deve escolher entre converter-se ou converter outro jogador.'],
            ['Um adepto exemplar','Você pode escolher outro jogador, ele deverá pagar uma moeda ao banco das igrejas.'],
            ['Um adepto exemplar','Você pode escolher outro jogador, ele deverá pagar uma moeda ao banco das igrejas.'],
            ['Um adepto exemplar','Você pode escolher outro jogador, ele deverá pagar uma moeda ao banco das igrejas.'],
            ['Expiação','Você deve se converter.'],
            ['Expiação','Você deve se converter.'],
            ['Expiação','Você deve se converter.'],
            ['Impondo a sua fé','Você deve converter outro jogador que seja de uma religião diferente da sua. Caso não haja, ignore'],
            ['Impondo a sua fé','Você deve converter outro jogador que seja de uma religião diferente da sua. Caso não haja, ignore'],
            ['Impondo a sua fé','Você deve converter outro jogador que seja de uma religião diferente da sua. Caso não haja, ignore']
            );
    }
    return deck;
}

function sortearEvento(){

    sorteio = Math.floor(Math.random() * eventos.length);
    preecherTabela("titulo", eventos[sorteio][0], "#000000");
    preecherTabela("texto", eventos[sorteio][1], "#000000");
    eventos.splice(sorteio, 1)
    cartasRestantes();
}

function cartasRestantes(){
    document.getElementById("cartas-rest").innerHTML = "<h2>Cartas restantes: "+ eventos.length +"</h2>"
}

function preecherTabela(local,texto, cor){
    if(local == "titulo"){
        document.getElementById("tit-evento").innerHTML = texto;
        document.getElementById("tit-evento").style.color = cor;
    }else{
        document.getElementById("txt-evento").innerHTML = texto;
        document.getElementById("txt-evento").style.color = cor;
    }
}

function limparTela(){
    preecherTabela("titulo","titulo", "#dcdcdc")
    preecherTabela("texto","evento", "#dcdcdc")
}

function confirmarRecomeco(){
    return confirm("Quer mesmo reiniciar?")
}