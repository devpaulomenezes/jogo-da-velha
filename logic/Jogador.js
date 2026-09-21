export class Jogador {
    constructor(nome, simbolo) {
        this.nome = nome;
        this.simbolo = simbolo;
    }

    escolherJogada(tabuleiro) {
        throw new Error('Método escolherJogada deve ser implementado pela subclasse');
    }
}
