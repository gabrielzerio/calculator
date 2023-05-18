const areaDosBotoes = document.querySelector('.botoes');
const telaAtual = document.querySelector('.telaAtual');
const telaAnterior = document.querySelector('.telaAnterior');
areaDosBotoes.style.display = 'grid';
let valorAtual='';
let mostraValorAtual='';
let valorAtualNumero=0;
let valorAnterior=0;
let resultado=0;
let temUmaContaPendente=false;
window.onload = function () {
    gridDisplay();
};


const letrasBotoes = ['(', ')', '%', 'AC', '7', '8', '9', '÷', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+'];
function gridDisplay() {
    areaDosBotoes.style.gridTemplateColumns = 'repeat(4, 1fr)';
    areaDosBotoes.style.gridTemplateRows = 'repeat(5, 1fr)';
    for (let i = 0; i < 20; i++) {
        let botao = document.createElement("button");
        //botao.className = 'teclas'; VOU ADICIONAR A CLASSE NO ESTILIZA pra saber o que é
        botao.textContent = letrasBotoes[i];
        /*pega o tipo*/let tipoBotao = letrasBotoes[i] == '=' ? 'result' : (letrasBotoes[i] >= 0 && letrasBotoes[i] < 10) ? 'number' : (letrasBotoes[i] == '.') ? 'dot' : 'operation';
        estilizaBtn(tipoBotao, botao); //manda estilizar;
        areaDosBotoes.appendChild(botao);
    }
}

areaDosBotoes.addEventListener('click', (e) => {
    if(e.target.className === 'number'){
        botoesNumero(e.target);
    }
    if(e.target.className === 'operators'){
        botoesOperadores(e.target);
    }
    if(e.target.className === 'result'){
        result();
    }
});

function result(){
    console.log(resultado+valorAtual);
}

function botoesNumero(numero){
    mostraValorAtual += numero.textContent; // ISSO É O QUE VAI MOSTRAR NA TELA!
    telaAtual.textContent = mostraValorAtual; //

    valorAtual += numero.textContent;
    valorAtualNumero = Number(valorAtual);
}
function botoesOperadores(operador){

    if(valorAtual!='' && !temUmaContaPendente){
        valorAnterior = Number(valorAtual);
        temUmaContaPendente = true;
    }else{
        if(operador.textContent == '+'){
           resultado += Number((valorAnterior + valorAtual));
        }
    }

    mostraValorAtual+=operador.textContent; // ISSO É O QUE VAI MOSTRAR NA TELA!
    telaAtual.textContent = mostraValorAtual; //
    valorAtual = '';
    valorAtualNumero=0;
}




function estilizaBtn(tipo, botao) {
    if (tipo == 'result') {
        resultBtn(botao);
        botao.className = 'result';
    }
    else if (tipo == 'number') {
        numbersAndDotBtn(botao);
        botao.className = 'number';
    } else if (tipo == 'dot') {
        numbersAndDotBtn(botao);
        botao.className = 'dot';
    }
    else {
        botao.className = 'operators';
    }
}
function resultBtn(botao) {
    botao.style.backgroundColor = '#8ab4f8';
    botao.style.border = '1px solid #8ab4f8';
    botao.style.color = '#202124';
}
function numbersAndDotBtn(botao) {
    botao.style.backgroundColor = '#3c4043'
    botao.style.border = '1px solid #3c4043';
}

