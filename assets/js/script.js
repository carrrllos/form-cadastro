

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


function registrar() {
    let passwordRegister1Value = document.getElementById("password-register1").value
    let passwordRegister2Value = document.getElementById("password-register2").value

    
    if (passwordRegister1Value != passwordRegister2Value) {
        alert("senhas diferentes")
    }
    else if (passwordRegister1Value.length == 0 || passwordRegister2Value.length == 0) {
        alert("digite uma senha")
    }

    else {
        var hashPassword = 0;

        if (passwordRegister1Value.length == 0) return hashPassword;
        for (i = 0; i < passwordRegister1Value.length; i++) {
            ch = passwordRegister1Value.charCodeAt(i);
            hashPassword = ((hashPassword << 5) - hashPassword) + ch;
            hashPassword = hashPassword & hashPassword;
        }
    }
    
    
}


