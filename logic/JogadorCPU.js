import { Jogador } from './Jogador.js';
import { casasVazias } from './regraDeVitoria.js';

export class JogadorCPU extends Jogador {
    async escolherJogada(tabuleiro) {
        const vazias = casasVazias(tabuleiro.casas);
        if (vazias.length === 0) return -1;

        const indice = vazias[0];
        console.log(`${this.nome} jogou na posição ${indice + 1}`);
        return indice;
    }
}
