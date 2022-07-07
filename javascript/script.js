const char = document.querySelector('.char-game');
const enemy = document.querySelector('.enemy-game');
const powerUp = document.querySelector('.powerup-game');
const game = document.querySelector('.game');
const lua = document.querySelector('.lua-game');
const btnstart = document.querySelector('.btnStart');
const chao = document.querySelector('.chao-game');
const primeiratela = document.querySelector('#tela-inicial');

/* PULO DO PERSONAGEM */

const jump = () => {
    char.classList.add('char-jump');

    setTimeout(() => {
        char.classList.remove('char-jump');
    }, 500);

};

/* BATIDA DO PERSONAGEM COM OBJETOS */

const loopGame = setInterval(() => {

        const enemyPosition = enemy.offsetLeft;
        const powerupPosition = powerUp.offsetLeft;
        const charPosition = +window
            .getComputedStyle(char)
            .bottom.replace("px", "");

        /*DEIXA O PERSONAGEM GRANDE QUANDO PEGA A ESTRELA*/
        /* FAZ UMA ANIMACAO DE TRANSIÇÃO DE TAMANHO */

        if (powerupPosition <= 120 && powerupPosition > 0 && charPosition < 80) {
            charBig();

            for (let i = 0; i < 5;) {
                setTimeout(() => {
                    charSmall();
                }, (i++) * 120);
                setTimeout(() => {
                    charBig();
                }, (i++) * 120);
            }
        }

        /*DEIXA O PERSONAGEM PEQUENO QUANDO ESTA GRANDE */
        /*E MORRE QUANDO ESTA PEQUENO */

        if ((enemyPosition <= 120 && enemyPosition > 0 && charPosition < 80) && char.classList.contains('char-game')) {
            charSmall();

            setTimeout(() => {
                char.classList.remove('rapid');
                char.classList.add('charSmall');
            }, 200);

        } else
        if ((enemyPosition <= 120 && enemyPosition > 0 && charPosition < 80) && char.classList.contains('charSmall')) {
            charDead();
        }
    },
    10);

/* FUNÇÔES TAMANHO DO PERSONAGEM */

function charBig() {
    char.src = './images/power.gif';
    char.classList.remove('char-dead');
    char.classList.remove('charSmall');
    char.classList.add('char-game');
}

function charSmall() {
    char.src = './images/scrimbo.gif';
    char.classList.remove('char-game');
    char.classList.remove('char-dead');
    char.classList.add('rapid');
}

function charDead() {
    char.src = './images/scrimbo-dead.png';
    char.classList.remove('char-game');
    char.classList.remove('charSmall');
    char.classList.add('char-dead');
    chao.style.animation = "none";
    enemy.style.animation = "none";
    lua.style.animation = "none";
    powerUp.style.animation = "none";
    btnstart.hidden = "false"
}

/* ABRIR E FECHAR INSTRUÇÕES */

const closeInstructionsButton = document.querySelector('#closeInstructionsButton');
const instructions = document.querySelector('#instructions');

function closeInstructions() {
    instructions.hidden = true;
}

const openInstructionsButton = document.querySelector('.btnInstructions');

function openInstructions() {
    instructions.hidden = false;
}

/* DAR O START NO GAME */

function startGame() {
    const primeiraTela = document.querySelector('#tela-inicial');
    primeiraTela.hidden = true;
}

document.addEventListener("click", jump);
document.addEventListener("keydown", jump);