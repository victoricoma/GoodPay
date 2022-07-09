//validação bootstrap
const forms = document.querySelectorAll('.needs-validation');

Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
})




//validação senhas
function confirmaSenha() {
    var senha = document.querySelector("#senhaCad").value;
    var confSenha = document.querySelector("#confirmaSenha").value;
    if (senha === confSenha) {
        alert("As senhas coincidem");
    } else {
        alert("As senhas não coincidem");
    }
}

const btnCadastrar = document.getElementById("btnCad");
btnCadastrar.addEventListener("click", confirmaSenha);
