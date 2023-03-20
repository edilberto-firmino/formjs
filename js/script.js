const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const  jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

     if(nameInput.value === ""){
        alert("por favor, preencha o seu nome")
        return;
    }

    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("por favor, preencha o seu E-mail")
        return;
    }

    if(!validatePassword(passwordInput.value, 8)){
        alert("A Senha Precisa de no Mínimo 8 Digitos ")

    }


    if(jobSelect.value === ""){
        alert("por favor, Selecione a sua situação")
        return;
    }


    if(messageTextarea.value === ""){
        alert("por favor, escreva uma mensagem")
        return;
    }
    form.submit();
});

function  isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    
    if(emailRegex.test(email)){
        return true;
    }

    return false;


}

function validatePassword(password, minDigits){
    if(password.length >= minDigits){

        return true;
    }

    return false;
}