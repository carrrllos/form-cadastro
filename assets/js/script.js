const loginLink = document.getElementById("login-link")
const registerLink = document.getElementById("register-link")
let passwordRegister1 = document.getElementById("password-register1")
let passwordRegister2 = document.getElementById("password-register2")



//mudança de login para register

registerLink.addEventListener("click", () => {
    let loginSection = document.getElementById("login-section")
    loginSection.style.display = "none"
    let registerSection = document.getElementById("register-section")
    registerSection.style.display = "flex"

})
loginLink.addEventListener("click", () => {
    let loginSection = document.getElementById("login-section")
    loginSection.style.display = "flex"
    let registerSection = document.getElementById("register-section")
    registerSection.style.display = "none"

})

//mostrar senha

function verSenhaLogin() {
    let passwordLogin = document.querySelector(".password-login")

    if (passwordLogin.getAttribute('type') == "password") {
        passwordLogin.setAttribute('type', 'text');
    }
    else {
        passwordLogin.setAttribute('type', 'password');
    }

}


function verSenhaRegister() {

    if (passwordRegister1.getAttribute('type') == "password") {
        passwordRegister1.setAttribute('type', 'text');
        passwordRegister2.setAttribute('type', 'text');
    }
    else {
        passwordRegister1.setAttribute('type', 'password');
        passwordRegister2.setAttribute('type', 'password');
    }
}




