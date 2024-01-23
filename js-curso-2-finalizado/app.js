let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

function limparCampo(){
    campo = document.querySelector('input');
    campo.value = " ";
}

function mensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');

}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.4});
}

exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 10');

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let limiteDaLista = listaNumerosSorteados.length;
    if(limiteDaLista == numeroLimite){
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(); 
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
      
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value
    let palavraTentativas = tentativas > 1? "tentativas" : "tentativa";
    let mensagemTentativas =`Parábens, você descobriou o número secreto com ${tentativas} ${palavraTentativas}.`;
            
        if(numeroSecreto ==  chute){
           exibirTextoNaTela('h1','Acertou!');
           exibirTextoNaTela('p', mensagemTentativas);
           document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if(numeroSecreto > chute) {
                exibirTextoNaTela('p','O número secreto é maior.');
            } else {
                exibirTextoNaTela('p', 'O número secreto é menor.');
            }
            tentativas++;
            limparCampo();
        }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas= 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}