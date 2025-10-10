const titles = ["Dama" , "Lord" , "Champion" , "Master" , "Emperor" , "Lady" , "Miss" , "Madam"]
const nomes = ["Victor" , "Omar" , "Nestor" , "Pietro" , "Tawfik" , "Diana" , "Bruna" , "Daryn"]
const classes = ["Knight" , "Wizard" , "Archer" , "Rogue" , "Paladin" , "Cleric" , "Monk" , "Ninja"]
const locations = ["Camelot" , "Valhalla" , "Midgard" , "Fortress of Solitude" , "Batcave" , "R'lyeh" , "Hyrule" , "Yharnam" , "Canyon of the Cosmos"]

let texto = document.querySelector(".nome-aleatorio")
let botao = document.querySelector(".botao-gerador")

botao.addEventListener("click", ()=> {
    let title = titles[Math.floor(Math.random() * 6)]
    let nome = nomes[Math.floor(Math.random() * 6)]
    let classe = classes[Math.floor(Math.random() * 6)]
    let location = locations[Math.floor(Math.random() * 6)]

    let apresentacao = title + " " + nome + ", " + classe + " of " + location


    texto.innerText = apresentacao

})
