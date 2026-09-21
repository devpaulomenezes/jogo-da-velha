import { View, Text, StyleSheet } from 'react-native';

export default function Placar({ placar }) {
    return (
        <View style={styles.container}>
            <View style={[styles.coluna, styles.usuario]}>
                <Text style={styles.rotulo}>Você (X)</Text>
                <Text style={styles.valor}>{placar.usuario}</Text>
            </View>
            <View style={styles.coluna}>
                <Text style={styles.rotulo}>Empates</Text>
                <Text style={styles.valor}>{placar.empates}</Text>
            </View>
            <View style={[styles.coluna, styles.cpu]}>
                <Text style={styles.rotulo}>CPU (O)</Text>
                <Text style={styles.valor}>{placar.cpu}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    coluna: { alignItems: 'center', paddingHorizontal: 20 },
    usuario: { borderRightWidth: 1, borderRightColor: '#bdc3c7' },
    cpu: { borderLeftWidth: 1, borderLeftColor: '#bdc3c7' },
    rotulo: { fontSize: 14, color: '#555' },
    valor: { fontSize: 32, fontWeight: 'bold' },
});