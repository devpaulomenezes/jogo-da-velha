import { View, StyleSheet } from 'react-native';
import Casa from './Casa';

export default function Tabuleiro({ board, onPressCasa, desabilitado }) {
    const linhas = [0, 1, 2];

    return (
        <View>
            {linhas.map((linha) => (
                <View key={linha} style={styles.linha}>
                    {[0, 1, 2].map((coluna) => {
                        const index = linha * 3 + coluna;
                        return (
                            <Casa
                                key={index}
                                index={index}
                                valor={board[index]}
                                onPress={onPressCasa}
                                desabilitada={desabilitado}
                            />
                        );
                    })}
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    linha: {
        flexDirection: 'row',
    },
});