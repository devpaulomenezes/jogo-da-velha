export class Tabuleiro {
    constructor(casas = Array(9).fill(null)) {
        this.casas = casas;
    }

    marcar(index, simbolo) {
        const novasCasas = this.casas.map((casa, i) => i === index ? simbolo : casa);
        return new Tabuleiro(novasCasas);
    }

    exibir() {
        const c = this.casas.map(casa => casa === null ? '.' : casa);
        console.log(`
 ${c[0]} | ${c[1]} | ${c[2]} 
---+---+---
 ${c[3]} | ${c[4]} | ${c[5]} 
---+---+---
 ${c[6]} | ${c[7]} | ${c[8]} 
`);
    }

    estaLleno() {
        return this.casas.every(casa => casa !== null);
    }
}
