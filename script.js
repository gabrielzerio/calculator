const botoes = document.querySelector('.botoes');
botoes.style.display = 'grid';



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
        botoes.appendChild(botao);
    }
}