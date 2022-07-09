import userLogin from "./moduloDados.js";
const alertaLogin = new bootstrap.Modal("#alertaLogin");
const alertaCampo = new bootstrap.Modal('#alertaCampo');
const alertaVerify = new bootstrap.Modal('#alertaVerify');
const entrarUsuario = document.getElementById("btnEntrar");

//varial num1 e num2 aleatórias
var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
//soma das variáveis
var resposta = num1 + num2;
//imprime no site a fra "Qual a soma de num1 e num2"
document.getElementById("teste").innerHTML = `Qual a soma de ${num1} + ${num2} ?`;

//função para testar se está tudo correto após clicar no botão enviar
var contador = 0;

entrarUsuario.addEventListener("click", _event => {
  let captcha = document.getElementById("valida").value;
  let login = document.getElementById("login").value;
  let senha = document.getElementById("senha").value;
  let validaLogin = userLogin.find(userLogin => userLogin.userName === login);
  if (captcha === "") {
    alertaCampo.show();
  } else
    if (login === "") {
      alertaCampo.show();
    } else
      if (senha === "") {
        alertaCampo.show();
      } else
        if (validaLogin === undefined) {
          alertaVerify.show();
        } else
          if (login === validaLogin.userName && senha === validaLogin.senha) {
            window.location.pathname = "/app.html";
            document.getElementById("loginExp").textContent = `Bem - Vindo, ${ login }!`;
          } else
            if (login === validaLogin.userName && senha !== validaLogin.senha) {
              contador++;
              console.log(contador);
              alertaLogin.show();
              if (contador == 3) {
                window.location.pathname = "/recuperar.html";
              }
            }
});