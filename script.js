/*Questão 1:
O objetivo principal de usar JavaScript em aplicações Front-End é tornar a experiência do usuário mais interativa, dinâmica e responsiva. Enquanto o HTML define a estrutura da página e o CSS cuida do estilo, o JavaScript adiciona comportamento, permitindo que a página reaja às ações do usuário sem precisar recarregar a página inteira. Com JavaScript, é possível criar interações como animações, validação de formulários em tempo real, navegação fluida (sem recarregamento de página) e comunicação com servidores via APIs. Ele é fundamental para construir interfaces ricas, como em Single Page Applications (SPAs), onde a navegação é rápida e sem interrupções. Dessa forma, o JavaScript é essencial para proporcionar uma experiência de usuário mais envolvente e eficiente em aplicações web.*/

/* Questão 3 */
let titulo = document.querySelector(".titulo").style.color = "darkgreen"
document.querySelector(".titulo").style.fontSize = Math.floor(((Math.random() * (100 - 30) + 30))) + "px"
document.querySelector(".titulo").innerText = "Olá Mundooooooo"

/* Questão 4 */
let contador = document.querySelector(".contar") 
document.addEventListener("click" , () => {

    contador ++

})

let interval = setInterval()


/*Questão 5*/



/*Questão 6*/

const titles = ["Dama" , "Lord" , "Champion" , "Master" , "Emperor" , "Lady" , "Miss" , "Madam"]
const nomes = ["Victor" , "Omar" , "Nestor" , "Pietro" , "Tawfik" , "Diana" , "Bruna" , "Daryn"]
const classes = ["Knight" , "Wizard" , "Archer" , "Rogue" , "Paladin" , "Cleric" , "Monk" , "Ninja"]
const locations = ["Camelot" , "Valhalla" , "Midgard" , "Fortress of Solitude" , "Batcave" , "R'lyeh" , "Hyrule" , "Yharnam" , "Canyon of the Cosmos"]


