import userLogin from"./moduloDados.js";
const alertaLogin = new bootstrap.Modal("#alertaLogin");
const entrarUsuario = document.getElementById("btnEntrar");
//varial num1 e num2 aleatórias
var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
//soma das variáveis
var resposta = num1 + num2;
//imprime no site a fra "Qual a soma de num1 e num2"
document.getElementById("teste").innerHTML = `Qual a soma de ${num1} + ${num2} ?`;

//função para testar se está tudo correto após clicar no botão enviar
entrarUsuario.addEventListener("click", _event => {
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    let validaLogin = userLogin.find(userLogin => userLogin.userName === login);
    if (login === validaLogin.userName && senha === validaLogin.senha && document.getElementById("valida").value == resposta){
            window.location.pathname="/app.html"
        }
    else {
        alertaLogin.show();
        }
});