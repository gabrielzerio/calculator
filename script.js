const botoes = document.querySelector('.botoes');
botoes.style.display = 'grid';
//document.body.onmousedown = (e) => (e.target.style.border = '1px solid white');
//document.body.onmouseup = (e) => (e.target.style.border = '1px solid black;')


document.addEventListener('DOMContentLoaded', () => {
    gridDisplay();
});

const letrasBotoes = ['(',')','%','AC','7','8','9','÷','4','5','6','x','1','2','3','-','0','.','=','+'];
function gridDisplay(){
    botoes.style.gridTemplateColumns = 'repeat(4, 1fr)';
    botoes.style.gridTemplateRows = 'repeat(5, 1fr)';
    for(let i=0;i<20;i++){
        let botao = document.createElement("div");
        botao.textContent = letrasBotoes[i];
        /*pega o tipo*/let tipoBotao = letrasBotoes[i] == '=' ? 'result' : (letrasBotoes[i]>=0 && letrasBotoes[i]<=10)? 'number' : (letrasBotoes[i] == '.')?'dot':'regular';
        estilizaBtn(tipoBotao,botao); //manda estilizar;
        botoes.appendChild(botao);
    }
}

function estilizaBtn(tipo, botao){
    if(tipo == 'result'){
        resultBtn(botao);
    }
    else if(tipo == 'number'){
        numbersAndDotBtn(botao);
    }else if(tipo == 'dot'){
        numbersAndDotBtn(botao);
    }
}
function resultBtn(botao){
    botao.style.backgroundColor = '#8ab4f8';
    botao.style.border = '1px solid #8ab4f8';
    botao.style.color = '#202124';
}
function numbersAndDotBtn(botao){
    botao.style.backgroundColor = '#3c4043'
    botao.style.border = '1px solid #3c4043';
}