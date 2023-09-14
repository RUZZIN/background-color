// Função para gerar uma cor de fundo aleatória
function gerarCorAleatoria() {
    var letrasHexadecimais = '0123456789ABCDEF';
    var cor = '#';
    for (var i = 0; i < 6; i++) {
        cor += letrasHexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}
// Função para trocar a cor de fundo do corpo da página
function trocarCorDeFundo() {
    var novaCor = gerarCorAleatoria();
    document.body.style.backgroundColor = novaCor;
}
