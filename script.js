let form = document.getElementById("formulario");
let botao = document.getElementById("btn-submit");

function validaForm(frm){
        const inputNome = document.querySelector("#nome");
        const inputSobrenome = document.querySelector("#sobrenome");
        const inputEmail = document.querySelector("#email");
        const inputSenha = document.querySelector("#senha");
        const inputRadio = document.querySelector('input[type="radio]');
        const inputOpcoes = document.querySelector("#senioridade");
        const inputCheck = document.querySelector("#check");
        const submitButton = document.querySelector("#btn-submit");
    

        if(submitButton){
            submitButton.addEventListener("click", function(e){
            event.preventDefault();
           
        });
    }

    if(frm.inputNome.value == "" || frm.inputNome.value == null){
        alert("Por favor, indique o seu nome");
        frm.inputNome.focus();
        return false;
    }

    if(frm.inputEmail.value.indexOf("@") == -1 || frm.inputEmail.valueOf.indexOf(".") == -1 ||
    frm.inputEmail.value == "" ||
    frm.inputEmail.value == null) {
        alert("Por favor, indique um e-mail válido");
        frm.inputEmail.focus();
        return false;

    }
}
