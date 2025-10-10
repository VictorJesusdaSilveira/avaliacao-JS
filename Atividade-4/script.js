let contador = document.querySelector(".contagem") 
let botao = document.querySelector(".contar")
let zerar = document.querySelector(".zerar")
let numero = 0

botao.addEventListener("click" , () => {

    numero++

    contador.innerText = numero

})

zerar.addEventListener("click" , () => {

    numero = 0

    contador.innerText = numero

})
