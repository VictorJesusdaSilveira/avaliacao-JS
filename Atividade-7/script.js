let respostaWaddles = document.querySelector("#resposta-waddles");
let waddles = document.querySelector("img");
let podeMover = false;

waddles.onmouseenter = mouseEnter;
waddles.onmousemove = mouseMove;
waddles.onmouseleave = mouseLeave;
waddles.ondrag = dragWaddles;



function mouseEnter() {
    respostaWaddles.innerText = "Isso faz cócegas";
    podeMover = false;

    // Só deixa o mousemove agir depois de 0.5s
    setTimeout(() => {
        podeMover = true;
    }, 500);
}

function mouseMove() {
    if (podeMover) {
        respostaWaddles.innerText = "Pare com isso!!!!";
    }
}

function mouseLeave() {
    respostaWaddles.innerText = "Obrigado por Parar.";
    podeMover = false;
}

function dragWaddles() {
    respostaWaddles.innerText = "Para onde você pensa q está me levando?";
}

waddles.addEventListener('click', () => {
    respostaWaddles.innerText = "Pare de me Bater!!!!!";
});
