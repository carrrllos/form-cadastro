function register() {

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
        // if the length of the string is 0, return 0
        if (passwordRegister1Value.length == 0) return hashPassword;
        for (i = 0; i < passwordRegister1Value.length; i++) {
            ch = passwordRegister1Value.charCodeAt(i);
            hashPassword = ((hashPassword << 5) - hashPassword) + ch;
            hashPassword = hashPassword & hashPassword;
            
        }
        hashPassword = hashPassword.toString()
        console.log(hashPassword);
    }


}
