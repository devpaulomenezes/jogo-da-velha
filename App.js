import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Tabuleiro from './components/Tabuleiro';
import Placar from './components/Placar';
import StatusPartida from './components/StatusPartida';
import { verificarResultado, casasVazias } from './logic/regraDeVitoria';

const TABULEIRO_INICIAL = Array(9).fill(null);
const PLACAR_INICIAL = { usuario: 0, empates: 0, cpu: 0 };

export default function App() {
  const [board, setBoard] = useState(TABULEIRO_INICIAL);
  const [turno, setTurno] = useState('X');
  const [vencedor, setVencedor] = useState(null);
  const [placar, setPlacar] = useState(PLACAR_INICIAL);
  const [cpuPensando, setCpuPensando] = useState(false);

  function jogadaDaCPU(tabuleiroAtual) {
    const vazias = casasVazias(tabuleiroAtual);
    if (vazias.length === 0) return tabuleiroAtual;

    const posicao = vazias[Math.floor(Math.random() * vazias.length)];
    return tabuleiroAtual.map((casa, i) => (i === posicao ? 'O' : casa));
  }

  function onPressCasa(index) {
    if (board[index] !== null || vencedor || cpuPensando) return;

    const novoBoard = board.map((casa, i) => (i === index ? 'X' : casa));
    setBoard(novoBoard);

    const resultado = verificarResultado(novoBoard);
    if (resultado) {
      finalizarPartida(resultado);
      return;
    }

    setTurno('O');
    setCpuPensando(true);
    setTimeout(() => {
      const boardDaCPU = jogadaDaCPU(novoBoard);
      setBoard(boardDaCPU);
      setCpuPensando(false);
      const resultadoCPU = verificarResultado(boardDaCPU);
      if (resultadoCPU) {
        finalizarPartida(resultadoCPU);
      } else {
        setTurno('X');
      }
    }, 500);
  }

  function finalizarPartida(resultado) {
    setVencedor(resultado);
    setPlacar((anterior) => ({
      ...anterior,
      usuario: anterior.usuario + (resultado === 'X' ? 1 : 0),
      cpu: anterior.cpu + (resultado === 'O' ? 1 : 0),
      empates: anterior.empates + (resultado === 'empate' ? 1 : 0),
    }));
  }

  function novaPartida() {
    setBoard(TABULEIRO_INICIAL);
    setTurno('X');
    setVencedor(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogo da Velha</Text>
      <Placar placar={placar} />
      <StatusPartida turno={turno} vencedor={vencedor} />
      <Tabuleiro board={board} onPressCasa={onPressCasa} desabilitado={!!vencedor || cpuPensando} />
      <View style={styles.botao}>
        <Button title="Nova partida" onPress={novaPartida} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botao: {
    marginTop: 30,
    width: 180,
  },
});