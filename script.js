const botoes = document.querySelector('.botoes');
botoes.style.display = 'grid';
const tela = document.querySelector('.tela');
let telaHasClicked = false;


document.addEventListener('DOMContentLoaded', () => {
    gridDisplay();
    
});

const letrasBotoes = ['(',')','%','AC','7','8','9','÷','4','5','6','x','1','2','3','-','0','.','=','+'];
function gridDisplay(){
    botoes.style.gridTemplateColumns = 'repeat(4, 1fr)';
    botoes.style.gridTemplateRows = 'repeat(5, 1fr)';
    for(let i=0;i<20;i++){
        let botao = document.createElement("div");
        //botao.className = 'teclas'; VOU ADICIONAR A CLASSE NO ESTILIZA pra saber o que é
        botao.textContent = letrasBotoes[i];
        /*pega o tipo*/let tipoBotao = letrasBotoes[i] == '=' ? 'result' : (letrasBotoes[i]>=0 && letrasBotoes[i]<10)? 'number' : (letrasBotoes[i] == '.')?'dot':'operation';
        estilizaBtn(tipoBotao,botao); //manda estilizar;
        botoes.appendChild(botao);
    }
}

function estilizaBtn(tipo, botao){
    if(tipo == 'result'){
        resultBtn(botao);
        botao.className = 'result';
    }
    else if(tipo == 'number'){
        numbersAndDotBtn(botao);
        botao.className = 'number';
    }else if(tipo == 'dot'){
        numbersAndDotBtn(botao);
        botao.className = 'dot';
    }
    else{
        botao.className = 'operation';
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


botoes.addEventListener('click', (e) => { //função pros numeros e ponto
    if(e.target.className == 'number' || e.target.className == 'dot'){
        eraseScreen();
        tela.textContent+=e.target.textContent;
    }
});

let vetorNumeros = new Array;
let vetorSinais = new Array;
botoes.addEventListener('click', (e) => {//função pros botoes de operação
    let equacao=0;
    //if(!(tela.textContent == '0')){
        if(e.target.className == 'result'){
            //etapa de iterar os dois vetores?
            console.log(Number(`${1}${vetorSinais[0]}${1}`));
        }
    //}
    if(e.target.className == 'operation'){
        if(e.target.textContent == 'x'){
            vetorSinais.push('*');    
        }
        if(e.target.textContent == '÷'){
        vetorSinais.push('/');    
        }else{
        vetorSinais.push(e.target.textContent);   
        }
        
    }
});

function eraseScreen(){
    if(!telaHasClicked){
        tela.textContent = '';
        telaHasClicked=true;
    }
}