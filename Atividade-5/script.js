let lista = document.querySelector(".herois")
let addButton = document.querySelector(".adicionar")

addButton.addEventListener("click" , () => {

    let herois = prompt("Informe o seu Herói: ")

    let itemLista = document.createElement("li")
    itemLista.innerText = herois

    lista.appendChild(itemLista)
})
