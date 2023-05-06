
//Variáveis que representam a classe do Input(login), Botão e do formulário, todas são constantes.
const input = document.querySelector(".login_input")
const button = document.querySelector(".login_button")
const form = document.querySelector(".login-form")


// Arrow Function que serve para Validar nosso input, se a quantia de letras no input for maior que 3, o botão é ativado.
const validateInput = ({target}) => {
  
  if (target.value.length > 3){
    button.removeAttribute("disabled")
    return;
    
    //Este return serve para que, quando o input tiver mais que 3 letras, a função irá acabar e não vai executar o código abaixo.
  } 
  //caso o input seja menor que 3 letras, esse código aqui é executado, ele desativa o botão.
  button.setAttribute("disabled",'')
  
}

//Arrow function que salva o valor do Input no Local Storage, a chave se chama "player".

const handleSubmit = (event) => {
  event.preventDefault()
  
  localStorage.setItem("player",input.value)
  window.location = "Pages/game.html"
}

//Event listner que disparam as Arrow Functions
input.addEventListener('input', validateInput)
form.addEventListener('submit', handleSubmit)
