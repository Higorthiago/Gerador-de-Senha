const sliderElement = document.getElementById("slider")
const buttonElement = document.getElementById("button")

const sizepassword = document.getElementById("valor")
const password = document.getElementById("password")

const containerpassword = document.getElementById("container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"
let novaSenha = ""

sizepassword.innerHTML = sliderElement.value

slider.oninput = function() {
    sizepassword.innerHTML = this.value
}

function generatepassword() {
   
    let pass = ""
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n ))
 
    }

    containerpassword.classList.remove('hide')
    password.innerHTML = pass

}

//function copypassword() {
    
   // navigator.clipboard.writeText(novaSenha)
//}
































