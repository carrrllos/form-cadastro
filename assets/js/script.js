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
    let usernameRegisterValue = document.getElementById("username-register").value

    if (passwordRegister1Value != passwordRegister2Value) {
        alert("senhas diferentes")
    }
    else if (passwordRegister1Value.length == 0 || passwordRegister2Value.length == 0 || usernameRegisterValue == 0) {
        alert("não deixe espaços vazios")
    }

    else {

        var hashPasswordRegister = 0;

        if (passwordRegister1Value.length == 0) return hashPasswordRegister;
        for (i = 0; i < passwordRegister1Value.length; i++) {
            ch = passwordRegister1Value.charCodeAt(i);
            hashPasswordRegister = ((hashPasswordRegister << 5) - hashPasswordRegister) + ch;
            hashPasswordRegister = hashPasswordRegister & hashPasswordRegister;

        }
        hashPasswordRegister = hashPasswordRegister.toString()
        console.log(hashPasswordRegister);

        if (localStorage.getItem(`${usernameRegisterValue}`)) {
            alert("Username indisponível")
        }
        else {

            localStorage.setItem(`${usernameRegisterValue}`, `${hashPasswordRegister}`)
            alert("Usuário cadastrado")
        }

    }
}

function logar() {
    let passwordLoginValue = document.getElementById("password-login").value
    let usernameLoginValue = document.getElementById("username-login").value

    if (passwordLoginValue == 0 || usernameLoginValue == 0) {
        alert("não deixe espaços vazios")
    }

    var hashPasswordLogin = 0;

    if (passwordLoginValue.length == 0) return hashPasswordLogin;
    for (i = 0; i < passwordLoginValue.length; i++) {
        ch = passwordLoginValue.charCodeAt(i);
        hashPasswordLogin = ((hashPasswordLogin << 5) - hashPasswordLogin) + ch;
        hashPasswordLogin = hashPasswordLogin & hashPasswordLogin;

    }
    hashPasswordLogin = hashPasswordLogin.toString()

    if(localStorage.getItem(`${usernameLoginValue}`) != hashPasswordLogin || !localStorage.getItem(`${usernameLoginValue}`)){
        alert("Usuário ou senha inválidos")
    }

    else{
        window.location.href = "page.html";
    }
    
}







