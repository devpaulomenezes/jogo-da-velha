import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Tabuleiro from './components/Tabuleiro';
import Placar from './components/Placar';
import StatusPartida from './components/StatusPartida';
import { verificarResultado } from './logic/regraDeVitoria';
import { Tabuleiro as TabuleiroModel } from './logic/Tabuleiro';
import { JogadorCPU } from './logic/JogadorCPU';

const TABULEIRO_INICIAL = new TabuleiroModel();
const PLACAR_INICIAL = { usuario: 0, empates: 0, cpu: 0 };
const cpu = new JogadorCPU('CPU', 'O');

export default function App() {
  const [board, setBoard] = useState(TABULEIRO_INICIAL);
  const [turno, setTurno] = useState('X');
  const [vencedor, setVencedor] = useState(null);
  const [placar, setPlacar] = useState(PLACAR_INICIAL);
  const [cpuPensando, setCpuPensando] = useState(false);

  function onPressCasa(index) {
    if (board.casas[index] !== null || vencedor || cpuPensando) return;

    const novoBoard = board.marcar(index, 'X');
    setBoard(novoBoard);

    const resultado = verificarResultado(novoBoard.casas);
    if (resultado) {
      finalizarPartida(resultado);
      return;
    }

    setTurno('O');
    setCpuPensando(true);
    setTimeout(async () => {
      const indiceCPU = await cpu.escolherJogada(novoBoard);
      const boardDaCPU = novoBoard.marcar(indiceCPU, 'O');
      setBoard(boardDaCPU);
      setCpuPensando(false);
      const resultadoCPU = verificarResultado(boardDaCPU.casas);
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
      <Tabuleiro board={board.casas} onPressCasa={onPressCasa} desabilitado={!!vencedor || cpuPensando} />
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