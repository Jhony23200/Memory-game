// Grid
const grid = document.querySelector(".grid")
const characters = [
  
  "chaves",
  "seu_madruga",
  "girafales",
  "florinda",
  "chiquinha",
  "jaiminho",
  "quico",
  "seu_barriga",
  "bruxa",
  "nhonho"
  
  ]


const checkEndGame = () => {
  
  const disabledCard = document.querySelectorAll(".disabled-card")
  
  if (disabledCard.length === 20){
    alert("ain ain Zé dá mangá ")
  }
  
}

const creatElement = (tag, className) => {

  const element = document.createElement('div')
  element.className = className
  return element
}

let firstCard = ''
let secondCard = ''


const checkCard = () => {
  
  
  const firstCharacter = firstCard.getAttribute("data-character")
  const secondCharacter = secondCard.getAttribute("data-character")
  
  if (firstCharacter==secondCharacter) {
    
    firstCard.firstChild.classList.add("disable-card")
    secondCard.firstChild.classList.add("disable-card")
    
    firstCard = ''
    secondCard = ''
    checkEndGame()
  } else {
    
    
    setTimeout( () => {
    firstCard.classList.remove("card-reveal")
    secondCard.classList.remove("card-reveal") 
    
    firstCard = ''
    secondCard = ''
    
    }, 450)
    
    
  }
  
}


const cardReveal = ({target}) => {
  
  if(target.parentNode.className.includes("card-reveal")){
    return
  }
  
  if(firstCard==''){
    
    target.parentNode.classList.add("card-reveal")
    firstCard = target.parentNode

    
  }else if (secondCard==''){
    target.parentNode.classList.add("card-reveal")
    secondCard = target.parentNode
    
    
    checkCard()
  }
  
  
  
  
}




const creatCard = (characters) => {
  const card = creatElement("div","card")
  const back = creatElement("div","face back")
  const front = creatElement("div","face front")
  
  front.style.backgroundImage = ` url('../img/${characters}.jpeg') `
  
  card.appendChild(front)
  card.appendChild(back)
  
  card.addEventListener("click", cardReveal)
  card.setAttribute("data-character",characters)
  return card
}

const loadGame = () => {
  
  const duplicateCharacters = [ ...characters, ...characters]
  
  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5)
  
  shuffledArray.forEach( (characters) => {
    
    const card = creatCard(characters)
    grid.appendChild(card)
     
  })
}

loadGame()