const areaDosBotoes = document.querySelector('.botoes');
const telaAtual = document.querySelector('.telaAtual');
const telaAnterior = document.querySelector('.telaAnterior');
areaDosBotoes.style.display = 'grid';

let valorAtual = '';   //
let mostraValorAtual = '';
let valorAtualNumero = new Array;

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
    if (e.target.className === 'number') {
        botoesNumero(e.target);
    }
    if (e.target.className === 'operators') {
        botoesOperadores(e.target);
    }
    if (e.target.className === 'result') {
        result();
    }
    console.log(valorAtualNumero);
});



function botoesNumero(numero) {
    atualizaTela(numero); //vai incrementando na tela os caracteres que for passando

    valorAtual += numero.textContent;
    //valorAtualNumero.push(valorAtual); //dar push na que inserir
    let tamanho = valorAtualNumero.length;
    if (tamanho == 0) {
        valorAtualNumero[tamanho] = Number(valorAtual);
    } else {
        valorAtualNumero[tamanho - 1] = Number(valorAtual);
    }
}

function botoesOperadores(operador) {
    if (valorAtual == '') { //esse if aqui #1
        if (operador.id == 'minus') {
            valorAtual += operador.textContent;
            atualizaTela(operador);
        }
    } else {
        if (operador.id == 'minus') {
            valorAtualNumero.push(0);
            resetaValorAtual();

            valorAtual += operador.textContent;
            atualizaTela(operador);//transforma o numero que o usuario digitar em negativo adicionando o '-' no começo
        }
        else if (operador.id == 'plus') {
            valorAtualNumero.push(0);
            resetaValorAtual();
            atualizaTela(operador);
        }
        else if (operador.id == 'multiply') {
            valorAtualNumero.push('x');
            valorAtualNumero.push(0);
            resetaValorAtual();
            atualizaTela(operador);
        }
    }
}

function result() {
    let acumula = 0;
    let acumulaM = 0;
    let temOperacaoPendente = false;
    let operacao;
    for (let i = 0; i < valorAtualNumero.length; i++) {
        if (valorAtualNumero[i] == 'x') {
        
                acumulaM = acumula;
                acumula = 0;
                temOperacaoPendente = true;
                operacao = 'multiplicacao';
                continue;
            
        }
        if (temOperacaoPendente && operacao == 'multiplicacao') {
            acumula = acumula * acumulaM;
            temOperacaoPendente = false;
        }
        acumula += valorAtualNumero[i];
    }
    mostraValorAtual = acumula;
    telaAtual.textContent = mostraValorAtual;

    valorAtual = '0'; //'reseta valor atual pra n ficar nada nele. mas deixa como 0 pra nao cair no if do ' - ' (#1) '
    valorAtualNumero = []; //reseta o array
    valorAtualNumero.push(acumula); //adiciona o acumula na primeira posição agora.
}

function resetaValorAtual() {
    valorAtual = '';
}
function atualizaTela(caracter) {
    mostraValorAtual += caracter.textContent; // ISSO É O QUE VAI MOSTRAR NA TELA!
    telaAtual.textContent = mostraValorAtual; //
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
        if (botao.textContent == '+') {
            botao.id = 'plus';
        } else if (botao.textContent == '-') {
            botao.id = 'minus';
        } else if (botao.textContent == 'x') {
            botao.id = 'multiply';
        }
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

