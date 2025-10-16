let foto = document.querySelector(".foto")
const imagens = [
    "https://picsum.photos/id/237/600/400",
    "https://picsum.photos/id/238/600/400",
    "https://picsum.photos/id/239/600/400",
    "https://picsum.photos/id/240/600/400"
]

function trocarImagem() {

    let imagem = imagens[Math.floor(Math.random() * 4)]

    foto.src = imagem

    setTimeout(trocarImagem, 5000)
}

trocarImagem()
