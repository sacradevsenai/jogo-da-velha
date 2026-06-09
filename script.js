// arrays para lógica

const casas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const victory = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const nomesDasCasas = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];

// O uso do const em relação ao let foi feito por ser boa prática
// ao usar js, o let só deve ser usado se houver certeza de modificação do 
// objeto inteiro em algum momento do projeto.


// JOGADA DO COMPUTADOR

function jogadaPC() {

    let pcTurn = Math.floor(Math.random() * 9);
    while (casas[pcTurn] == "X" || casas[pcTurn] == "O") {
        pcTurn = Math.floor(Math.random() * 9);
    }

    let idBotao = nomesDasCasas[pcTurn]

    casas[pcTurn] = "O";
    console.log(casas)
    document.getElementById(idBotao).textContent = "O";
    console.log(casas);
}

// VERIFICAÇÃO VITÓRIA COMPUTADOR

function vitoriaComputador() {
    for (let j = 0; j < victory.length; j++) {
        let counter = 0;
        for (let i = 0; i < 3; i++) {
            if (casas[victory[j][i]] == "O") {
                counter++;
            }
        }
        if (counter == 3) {
            return true;
        }
    }
    return false;
}

// VERIFICAÇÃO DE VITÓRIA HUMANO

function vitoriaHumano() {
    for (let j = 0; j < victory.length; j++) {
        let counter = 0;
        for (let i = 0; i < 3; i++) {
            if (casas[victory[j][i]] == "X") {
                counter++;
            }
        }
        if (counter == 3) {
            return true;
        }
    }
    return false;
}


// VERIFICAÇÃO DE EMPATE

function checarEmpate() {
    let counter = 0;
    for (let i = 0; i < 9; i++) {
        if (casas[i] != "X" && casas[i] != "O") {
            counter++;
        }
    }
    if (counter > 0) {
        return false;
    }
    return true;
}

// JOGADAS

function jogadaUm() {
    if (casas[0] == "X" || casas[0] == "O") {
        alert("Essa casa já está ocupada, escolha outra!");
    } else {
        casas[0] = "X";
        document.getElementById('um').textContent = "X";

        if (vitoriaHumano() == true) {
            setTimeout(function () { alert("Você venceu!!!"); reset(); }, 15);
        } else if (checarEmpate() == true) {
            setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
        } else {
            jogadaPC();
            if (vitoriaComputador() == true) {
                setTimeout(function () { alert("Você perdeu!"); reset(); }, 15);
            } else if (checarEmpate() == true) {
                setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
            }
        }
    }
}

function jogadaDois() {
    if (casas[1] == "X" || casas[1] == "O") {
        alert("Essa casa já está ocupada, escolha outra!");
    } else {
        casas[1] = "X";
        document.getElementById('dois').textContent = "X";

        if (vitoriaHumano() == true) {
            setTimeout(function () { alert("Você venceu!!!"); reset(); }, 15);
        } else if (checarEmpate() == true) {
            setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
        } else {
            jogadaPC();
            if (vitoriaComputador() == true) {
                setTimeout(function () { alert("Você perdeu!"); reset(); }, 15);
            } else if (checarEmpate() == true) {
                setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
            }
        }
    }
}

function jogadaTres() {
    if (casas[2] == "X" || casas[2] == "O") {
        alert("Essa casa já está ocupada, escolha outra!");
    } else {
        casas[2] = "X";
        document.getElementById('tres').textContent = "X";

        if (vitoriaHumano() == true) {
            setTimeout(function () { alert("Você venceu!!!"); reset(); }, 15);
        } else if (checarEmpate() == true) {
            setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
        } else {
            jogadaPC();
            if (vitoriaComputador() == true) {
                setTimeout(function () { alert("Você perdeu!"); reset(); }, 15);
            } else if (checarEmpate() == true) {
                setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
            }
        }
    }
}

function jogadaQuatro() {
    if (casas[3] == "X" || casas[3] == "O") {
        alert("Essa casa já está ocupada, escolha outra!");
    } else {
        casas[3] = "X";
        document.getElementById('quatro').textContent = "X";

        if (vitoriaHumano() == true) {
            setTimeout(function () { alert("Você venceu!!!"); reset(); }, 15);
        } else if (checarEmpate() == true) {
            setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
        } else {
            jogadaPC();
            if (vitoriaComputador() == true) {
                setTimeout(function () { alert("Você perdeu!"); reset(); }, 15);
            } else if (checarEmpate() == true) {
                setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
            }
        }
    }
}

function jogadaCinco() {
    if (casas[4] == "X" || casas[4] == "O") {
        alert("Essa casa já está ocupada, escolha outra!");
    } else {
        casas[4] = "X";
        document.getElementById('cinco').textContent = "X";

        if (vitoriaHumano() == true) {
            setTimeout(function () { alert("Você venceu!!!"); reset(); }, 15);
        } else if (checarEmpate() == true) {
            setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
        } else {
            jogadaPC();
            if (vitoriaComputador() == true) {
                setTimeout(function () { alert("Você perdeu!"); reset(); }, 15);
            } else if (checarEmpate() == true) {
                setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
            }
        }
    }
}

function jogadaSeis() {
    if (casas[5] == "X" || casas[5] == "O") {
        alert("Essa casa já está ocupada, escolha outra!");
    } else {
        casas[5] = "X";
        document.getElementById('seis').textContent = "X";

        if (vitoriaHumano() == true) {
            setTimeout(function () { alert("Você venceu!!!"); reset(); }, 15);
        } else if (checarEmpate() == true) {
            setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
        } else {
            jogadaPC();
            if (vitoriaComputador() == true) {
                setTimeout(function () { alert("Você perdeu!"); reset(); }, 15);
            } else if (checarEmpate() == true) {
                setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
            }
        }
    }
}

function jogadaSete() {
    if (casas[6] == "X" || casas[6] == "O") {
        alert("Essa casa já está ocupada, escolha outra!");
    } else {
        casas[6] = "X";
        document.getElementById('sete').textContent = "X";

        if (vitoriaHumano() == true) {
            setTimeout(function () { alert("Você venceu!!!"); reset(); }, 15);
        } else if (checarEmpate() == true) {
            setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
        } else {
            jogadaPC();
            if (vitoriaComputador() == true) {
                setTimeout(function () { alert("Você perdeu!"); reset(); }, 15);
            } else if (checarEmpate() == true) {
                setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
            }
        }
    }
}

function jogadaOito() {
    if (casas[7] == "X" || casas[7] == "O") {
        alert("Essa casa já está ocupada, escolha outra!");
    } else {
        casas[7] = "X";
        document.getElementById('oito').textContent = "X";

        if (vitoriaHumano() == true) {
            setTimeout(function () { alert("Você venceu!!!"); reset(); }, 15);
        } else if (checarEmpate() == true) {
            setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
        } else {
            jogadaPC();
            if (vitoriaComputador() == true) {
                setTimeout(function () { alert("Você perdeu!"); reset(); }, 15);
            } else if (checarEmpate() == true) {
                setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
            }
        }
    }
}

function jogadaNove() {
    if (casas[8] == "X" || casas[8] == "O") {
        alert("Essa casa já está ocupada, escolha outra!");
    } else {
        casas[8] = "X";
        document.getElementById('nove').textContent = "X";

        if (vitoriaHumano() == true) {
            setTimeout(function () { alert("Você venceu!!!"); reset(); }, 15);
        } else if (checarEmpate() == true) {
            setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
        } else {
            jogadaPC();
            if (vitoriaComputador() == true) {
                setTimeout(function () { alert("Você perdeu!"); reset(); }, 15);
            } else if (checarEmpate() == true) {
                setTimeout(function () { alert("Deu velha!!! O jogo empatou!"); reset(); }, 15);
            }
        }
    }
}

// BOTÃO DE RESET

function reset() {
    window.location.reload(true);
}