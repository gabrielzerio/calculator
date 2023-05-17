const botoes = document.querySelector('.botoes');
botoes.style.display = 'grid';



document.addEventListener('DOMContentLoaded', () => {
    gridDisplay();
});

function gridDisplay(){
    botoes.style.gridTemplateColumns = 'repeat(4, 1fr)';
botoes.style.gridTemplateRows = 'repeat(5, 1fr)';
    for(let i=0;i<20;i++){
        let botao = document.createElement(`div${i}`);
        botoes.appendChild(botao);
    }
}