# 🎮 Jogo da Velha — PDM

Este é o repositório do projeto Jogo da Velha desenvolvido para dispositivos móveis, onde o usuário (X) joga contra o computador (O) com um placar integrado de vitórias e empates. O aplicativo foi desenvolvido para a disciplina de Programação para Dispositivos Móveis (PDM), no 5º período do curso de Análise e Desenvolvimento de Sistemas (ADS) do IFPB.

---

## 📋 Etapas do projeto

| Etapa | Descrição | Status |
| :--- | :--- | :--- |
| 1 | Interface com o usuário (tabuleiro funcional, interação clara e placar com as vitórias de usuário e computador) | ✅ Concluída |
| 2 | Modelagem e implementação orientada a objetos em projeto Node.js separado, com interface CLI | 🔄 Em andamento |
| 3 | Integração da implementação OO com a interface React Native | ⏳ Pendente |
| 4 | CPU aprimorada com o algoritmo MinMax | ⏳ Pendente |

---

## 🛠️ Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) (template blank)
- JavaScript puro (sem bibliotecas externas adicionais)
- **Expo Go**: aplicativo para testes em dispositivos móveis (Android/iOS)

---

## 📁 Estrutura do projeto

jogo-da-velha/
├── App.js                  Componente raiz: estados do jogo e orquestração (board de 9 posições, turno, vencedor, placar, cpuPensando)
├── components/
│   ├── Casa.js             Célula do tabuleiro (TouchableOpacity, desabilita casa ocupada e cliques fora do turno)
│   ├── Tabuleiro.js        Grade 3x3 renderizada a partir do array de dados
│   ├── Placar.js           Exibe vitórias do usuário (X), da CPU (O) e empates; componente sem estado, recebe por props
│   └── StatusPartida.js    Mensagem de status: vez do jogador, vitória, derrota ou empate
├── logic/
│   └── regraDeVitoria.js   Funções puras: verificarResultado(board) retorna 'X', 'O', 'empate' ou null; casasVazias(board)
├── assets/                 Ícone e splash screen
├── app.json                Configuração do Expo
└── package.json            Dependências e scripts

---

## 🚀 Como executar

### Pré-requisitos
- Node.js 22+ instalado no computador.
- Aplicativo **Expo Go** instalado no dispositivo móvel.
- Dispositivo móvel e computador conectados à mesma rede Wi-Fi.

### Passos
1. Instale as dependências do projeto:
   `npm install`
2. Inicie o servidor de desenvolvimento do Expo:
   `npx expo start`
3. Abra o aplicativo Expo Go no celular e escaneie o QR Code exibido no terminal.

*Observação: Caso o QR Code não conecte devido a restrições de rede (ex.: isolamento de clientes no Wi-Fi), execute o comando com a flag tunnel:*
`npx expo start --tunnel`

---

## 🎯 Funcionalidades

- ✅ Tabuleiro 3x3 totalmente funcional e interativo.
- ✅ Partida Jogador (X) vs. CPU (O), com jogadas aleatórias provisórias por parte da CPU.
- ✅ Detecção automática de vitória, derrota e empate (verificando as 8 combinações de vitória).
- ✅ Placar acumulado mantido entre rodadas sucessivas.
- ✅ Ação de "Nova partida" que reinicia apenas o tabuleiro, preservando o placar atual.
- ✅ Proteções contra cliques inválidos: bloqueio de casas ocupadas, travamento após o encerramento da partida e bloqueio durante o turno de resposta da CPU (incluindo pausa de 500ms para simular o tempo de pensamento).

---

## 🧠 Decisões técnicas

- **Gerenciamento de Estado**: Estruturado via `useState` no componente principal `App.js`. O tabuleiro é representado por um array unidimensional plano de 9 posições contendo `null`, `'X'` ou `'O'`.
- **Imutabilidade**: Todas as atualizações do tabuleiro são feitas gerando novas instâncias do array (usando `map`), prevenindo mutações diretas do estado.
- **Isolamento de Regras**: As regras do jogo e validação de vitórias foram isoladas em funções puras em `logic/regraDeVitoria.js`, garantindo que possam ser reutilizadas na Etapa 3 sem dependências de interface.
- **Componentes Puramente Apresentacionais**: Os componentes `Placar` e `StatusPartida` são *stateless*, dependendo exclusivamente de *props* passadas pelo componente pai.
- **Estratégia da CPU Plugável**: A lógica da jogada da CPU foi isolada em uma função própria. Isso permitirá a substituição pela inteligência do algoritmo MinMax na Etapa 4 de forma transparente, sem afetar a camada visual ou de controle.

---

## 🔮 Próximos passos

- **Etapa 2**: Modelagem e implementação Orientada a Objetos em projeto Node.js isolado com interface CLI (onde a CPU jogará na primeira posição livre).
- **Etapa 3**: Integração do modelo OO desenvolvido na Etapa 2 com a interface gráfica em React Native.
- **Etapa 4**: Substituição da jogada provisória da CPU pela implementação do algoritmo **MinMax**, tornando o computador imbatível.

---

## 👤 Autor

- **Nome**: [Seu Nome]
- **Curso**: Análise e Desenvolvimento de Sistemas (ADS) — IFPB
- **Disciplina**: Programação para Dispositivos Móveis (PDM)
