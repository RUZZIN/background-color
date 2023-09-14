// Função para gerar uma cor de fundo aleatória
function gerarCorAleatoria(): string {
    const letrasHexadecimais: string = '0123456789ABCDEF';
    let cor: string = '#';
    for (let i: number = 0; i < 6; i++) {
        cor += letrasHexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Função para trocar a cor de fundo do corpo da página
function trocarCorDeFundo(): void {
    const novaCor: string = gerarCorAleatoria();
    document.body.style.backgroundColor = novaCor;
}


