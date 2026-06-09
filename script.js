// ==========================================================================
// ESTADO GLOBAL DO JOGO
// ==========================================================================

// O tabuleiro virtual substitui a necessidade de ler o HTML para tomar decisões
let tabuleiro = ["", "", "", "", "", "", "", "", ""];
const JOGADOR_HUMANO = "X";
const JOGADOR_IA = "O";
let jogoAtivo = true;

// Mapeamento das 8 combinações possíveis de vitória no Jogo da Velha
const combinacoesVitoria = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]             // Diagonais
];

// ==========================================================================
// FUNÇÕES PRINCIPAIS DE JOGADA
// ==========================================================================

// Esta função única substitui as 9 funções antigas (jogadaUm, jogadaDois...)
function fazerJogada(indice) {
    // Só permite a jogada se a casa estiver vazia e o jogo não tiver acabado
    if (tabuleiro[indice] !== "" || !jogoAtivo) return;

    // 1. TURNO DO HUMANO
    tabuleiro[indice] = JOGADOR_HUMANO;
    atualizarTela();

    if (verificarVitoria(tabuleiro, JOGADOR_HUMANO)) {
        setTimeout(() => alert("Caramba, você venceu! (Isso não deveria acontecer)"), 100);
        jogoAtivo = false;
        return;
    }

    if (verificarEmpate(tabuleiro)) {
        setTimeout(() => alert("Deu empate! E isso é o melhor que você vai conseguir."), 100);
        jogoAtivo = false;
        return;
    }

    // 2. TURNO DA IA (Chama o contra-ataque imediatamente)
    jogoAtivo = false; // Bloqueia cliques do usuário enquanto a IA pensa
    setTimeout(() => {
        let melhorMovimento = calcularMelhorMovimento();
        if (melhorMovimento !== null) {
            tabuleiro[melhorMovimento] = JOGADOR_IA;
            atualizarTela();

            if (verificarVitoria(tabuleiro, JOGADOR_IA)) {
                alert("Deu a lógica! Mais sorte na próxima.");
            } else if (verificarEmpate(tabuleiro)) {
                alert("Deu empate!");
            } else {
                jogoAtivo = true; // Devolve o controle para o humano
            }
        }
    }, 100); // Um leve delay de 100ms para parecer que a IA está "pensando"
}

// Vincula o array de memória direto aos botões do seu HTML
function atualizarTela() {
    const botoes = document.getElementsByClassName("tabuleiro");
    for (let i = 0; i < 9; i++) {
        botoes[i].innerText = tabuleiro[i];
    }
}

// ==========================================================================
// LOGICA DO ALGORITMO MINIMAX (A IA LADROA)
// ==========================================================================

// Função que inicia a árvore de decisão do Minimax para escolher a melhor casa
function calcularMelhorMovimento() {
    let melhorPontuacao = -Infinity;
    let movimentoEscolhido = null;

    for (let i = 0; i < 9; i++) {
        if (tabuleiro[i] === "") {
            tabuleiro[i] = JOGADOR_IA; // Simula a jogada da IA
            
            // Chama o minimax passando 'false' porque a próxima vez simulada é do humano
            let pontuacao = minimax(tabuleiro, 0, false);
            
            tabuleiro[i] = ""; // Desfaz a simulação (Backtracking)

            if (pontuacao > melhorPontuacao) {
                melhorPontuacao = pontuacao;
                movimentoEscolhido = i;
            }
        }
    }
    return movimentoEscolhido;
}

// O motor recursivo do Minimax
function minimax(estadoTabuleiro, profundidade, ehMaximizador) {
    // Condições de parada (Cenários finais simulados)
    if (verificarVitoria(estadoTabuleiro, JOGADOR_IA)) return 10 - profundidade;
    if (verificarVitoria(estadoTabuleiro, JOGADOR_HUMANO)) return profundidade - 10;
    if (verificarEmpate(estadoTabuleiro)) return 0;

    if (ehMaximizador) {
        let melhorPontuacao = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (estadoTabuleiro[i] === "") {
                estadoTabuleiro[i] = JOGADOR_IA;
                let pontuacao = minimax(estadoTabuleiro, profundidade + 1, false);
                estadoTabuleiro[i] = "";
                melhorPontuacao = Math.max(pontuacao, melhorPontuacao);
            }
        }
        return melhorPontuacao;
    } else {
        let melhorPontuacao = Infinity;
        for (let i = 0; i < 9; i++) {
            if (estadoTabuleiro[i] === "") {
                estadoTabuleiro[i] = JOGADOR_HUMANO;
                let pontuacao = minimax(estadoTabuleiro, profundidade + 1, true);
                estadoTabuleiro[i] = "";
                melhorPontuacao = Math.min(pontuacao, melhorPontuacao);
            }
        }
        return melhorPontuacao;
    }
}

// ==========================================================================
// FUNÇÕES AUXILIARES DE VALIDAÇÃO
// ==========================================================================

function verificarVitoria(tab, jogador) {
    return combinacoesVitoria.some(comb => {
        return comb.every(indice => tab[indice] === jogador);
    });
}

function verificarEmpate(tab) {
    return tab.every(casa => casa !== "");
}

// Função do botão resetar atualizada para o novo padrão
function reset() {
    tabuleiro = ["", "", "", "", "", "", "", "", ""];
    jogoAtivo = true;
    atualizarTela();
}