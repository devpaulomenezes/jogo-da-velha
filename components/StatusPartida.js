import { Text, StyleSheet } from 'react-native';

export default function StatusPartida({ turno, vencedor }) {
    let mensagem;
    if (vencedor === 'empate') mensagem = '🤝 Empate!';
    else if (vencedor) mensagem = vencedor === 'X' ? '🎉 Você venceu!' : '🤖 A CPU venceu!';
    else mensagem = turno === 'X' ? 'Sua vez (X)' : 'CPU pensando... (O)';

    return <Text style={styles.texto}>{mensagem}</Text>;
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 22,
        marginBottom: 20,
        textAlign: 'center',
    },
});