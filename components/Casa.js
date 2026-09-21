import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CORES = { X: '#e74c3c', O: '#3498db' };

export default function Casa({ valor, index, onPress, desabilitada }) {
    const podePressionar = valor === null && !desabilitada;

    return (
        <TouchableOpacity
            style={[styles.casa, valor && styles.casaOcupada]}
            onPress={() => onPress(index)}
            activeOpacity={0.6}
            disabled={!podePressionar}
        >
            <Text style={[styles.simbolo, { color: CORES[valor] || '#bdc3c7' }]}>
                {valor || ''}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    casa: {
        width: 90,
        height: 90,
        borderWidth: 1,
        borderColor: '#7f8c8d',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
    },
    casaOcupada: {
        backgroundColor: '#dfe4e6',
    },
    simbolo: {
        fontSize: 48,
        fontWeight: 'bold',
    },
});