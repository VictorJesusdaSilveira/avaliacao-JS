let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let senha = document.querySelector("#senha")
let confirmar_senha = document.querySelector("#confirmar_senha")
let botao = document.querySelector(".botao")
let verificador = document.querySelector(".verificador")
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const senhaRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
let mostrar_senha = document.querySelector("#mostrar_senha");

botao.addEventListener('click', () => {
    if (nome.value.length < 3) {
        verificador.innerText = "Insira o Nome Completo.."
    } else if (emailRegex.test(email.value) == false) {
        verificador.innerText = "Insira um e-mail Válido"
    } else if (senha.value.length < 8) {
        verificador.innerText = "A senha deve conter no mínimo 8 caracteres."
    } else if (senhaRegex.test(senha.value) == false) {
        verificador.innerText = "A senha deve conter pelo menos 1 maiúscula, 1 número e 1 especial."
    } else if (senha.value != confirmarSenha.value) {
        verificador.innerText = "As senhas devem ser iguais."
    } else {
        verificador.innerText = "Cadastro feito!!"
    }
})

mostrarSenha.addEventListener("click", () => {
    if (mostrarSenha.checked) {
        senha.type = "text";
        confirmarSenha.type = "text";
    } else {
        senha.type = "password";
        confirmarSenha.type = "password";
    }
})
