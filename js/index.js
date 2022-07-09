import userLogin from "./moduloDados.js";
const alertaLogin = new bootstrap.Modal("#alertaLogin");
const alertaCampo = new bootstrap.Modal('#alertaCampo');
const alertaVerify = new bootstrap.Modal('#alertaVerify');
const entrarUsuario = document.getElementById("btnEntrar");
// aba erros da barra ajuda
const erro1099 = new bootstrap.Modal(document.getElementById("erro9"));
const erro1088 = new bootstrap.Modal(document.getElementById("erro8"));
const erro1077 = new bootstrap.Modal(document.getElementById("erro7"));
const erro1066 = new bootstrap.Modal(document.getElementById("erro6"));
const erro1055 = new bootstrap.Modal(document.getElementById("erro5"));
const erro1044 = new bootstrap.Modal(document.getElementById("erro4"));
const erro1033 = new bootstrap.Modal(document.getElementById("erro3"));
const erro1022 = new bootstrap.Modal(document.getElementById("erro2"));
const erro1011 = new bootstrap.Modal(document.getElementById("erro1"));

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

const senhaNaoReg = document.getElementById("nconfS");
senhaNaoReg.addEventListener("click", _event => {
  erro1099.show()
});

const linkModal = document.getElementById("regSenha");
linkModal.addEventListener("click", _event => {
  erro1088.show()
});

const noUser = document.getElementById("noCadUs");
noUser.addEventListener("click", _event => {
  erro1077.show()
});

const noEmail = document.getElementById("erroEmail");
noEmail.addEventListener("click", _event => {
  erro1066.show()
});

const noUserAndMail = document.getElementById("noEnc");
noUserAndMail.addEventListener("click", _event => {
  erro1055.show()
});

const noReqUserMail = document.getElementById("reqUserMail");
noReqUserMail.addEventListener("click", _event => {
  erro1044.show()
});

const empyField = document.getElementById("fieldEmpy");
empyField.addEventListener("click", _event => {
  erro1033.show()
});

const forgetLogin = document.getElementById("esqLogin");
forgetLogin.addEventListener("click", _event => {
  erro1022.show()
});

const noUserFound = document.getElementById("userNoF");
noUserFound.addEventListener("click", _event => {
  erro1011.show()
});