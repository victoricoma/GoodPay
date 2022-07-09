import userLogin from "./moduloDados.js";
const alertaLogin = new bootstrap.Modal('#alertaLogin');
const erro1099 = new bootstrap.Modal(document.getElementById("erro9"));
const erro1088 = new bootstrap.Modal(document.getElementById("erro8"));
const erro1077 = new bootstrap.Modal(document.getElementById("erro7"));
const erro1066 = new bootstrap.Modal(document.getElementById("erro6"));
const erro1055 = new bootstrap.Modal(document.getElementById("erro5"));
const erro1044 = new bootstrap.Modal(document.getElementById("erro4"));
const erro1033 = new bootstrap.Modal(document.getElementById("erro3"));
const erro1022 = new bootstrap.Modal(document.getElementById("erro2"));
const erro1011 = new bootstrap.Modal(document.getElementById("erro1"));
const entrarUsuario = document.getElementById("btnEntrar");

entrarUsuario.addEventListener("click", _event => {
  let login = document.getElementById("login").value;
  let senha = document.getElementById("senha").value;
  if (userLogin.find((t => t.userName === login) && (t => t.senha === senha))) {
    window.location.pathname = "/app.html";
  } else {
    alertaLogin.show();
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






// const nomeVariavel = new bootstrap.Modal(document.getElementById("idModal"));

// const nomeDaVaria = document.getElementById("ID DO LINK");
// nomeDaVaria.addEventListener("click", _event =>{
//     erro1099.show()
// });