let sabor_sorvete = document.querySelector(".sabor-sorvete")
let sabor_escolhido = document.querySelector(".sabor-escolhido")

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