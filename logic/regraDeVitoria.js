const LINHAS_VITORIA = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];

export function verificarResultado(board) {
    for (const [a, b, c] of LINHAS_VITORIA) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    const cheio = board.every((casa) => casa !== null);
    return cheio ? 'empate' : null;
}

export function casasVazias(board) {
    return board.map((v, i) => (v === null ? i : null)).filter((i) => i !== null);
}