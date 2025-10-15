let body = document.querySelector("body")
let botao_tema = document.querySelector(".alternarTema")
let sabor_sorvete = document.querySelector(".sabor-sorvete")
let sabor_escolhido = document.querySelector(".sabor-escolhido")
let tema = localStorage.getItem("tema")


saborSorvete.addEventListener('input', () => {
    if (saborSorvete.value.length > 3) {
        if (saborSorvete.value.toLowerCase() == "chocolate") {
            verificador.innerText = "Eu amo sorvete de chocolate!"
        } else if (saborSorvete.value.toLowerCase() == "flocos") {
            verificador.innerText = "Ahh, mas chocolate é o meu favorito..."
        } else {
            verificador.innerText = "Ahh, eu esperava um sabor de sorvete..."
        }
    }
})

if (tema == 'tema-escuro') {
    body.classList.add('tema-escuro')
}

botaoTema.addEventListener('click', () => {
    body.classList.toggle('tema-escuro')

    let isTemaEscuro = body.classList.contains("tema-escuro")


    if (isTemaEscuro) {
        localStorage.setItem("tema", "tema-escuro")
    } else {
        localStorage.setItem("tema", "")
    }
})