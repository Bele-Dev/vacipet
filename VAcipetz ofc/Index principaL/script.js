var telefone = localStorage.getItem("phoneShow").toLowerCase();
if (telefone === "no") {
  document.getElementById("phoneL").innerHTML = "Não é possível mostrar o telefone";
} else {
  document.getElementById("phoneL").innerHTML = localStorage.getItem("phone");
}
document.getElementById("nameL").innerHTML = localStorage.getItem("name");
document.getElementById("description").innerHTML =
  localStorage.getItem("description");
document.getElementById("description2").innerHTML =
  localStorage.getItem("description");
document.getElementById("main").src = localStorage.getItem("image");
document.getElementById("price").innerHTML = localStorage.getItem("price");
document.getElementById("location").innerHTML =
  localStorage.getItem("location");
document.getElementById("productName").innerHTML =
  localStorage.getItem("productName");

function mostrarDados() {
  var dados = JSON.parse(localStorage.getItem("users"));
  var email = localStorage.getItem("email");
  var autenticado = localStorage.getItem("isAuthenticated");
  for (let i = 0; i < dados.length; i++) {
    if (email == dados[i].email && autenticado === "true") {
      document.getElementById("login__sell").innerHTML = `
       <img class="avatar" onclick="paginaPerfil()" width="60px" src="./images/avatar.png" />

      `;
    }
  }
}

function vender() {
  var dados = JSON.parse(localStorage.getItem("users"));
  var email = localStorage.getItem("email");
  var autenticado = localStorage.getItem("isAuthenticated");
  var flag = true;
  for (let i = 0; i < dados.length; i++) {
    if (email == dados[i].email && autenticado === "true") {
      flag = false;
      window.location.href = "./sell.html";
    }
  }
  if (flag === true) {
    document.getElementById("login").classList.remove("hidden");
  }
}

function paginaPerfil() {
  window.location.href = "./profile.html";
}
mostrarDados();

function abrirLogin() {
  document.getElementById("login").classList.remove("hidden");
}

function fecharLogin() {
  document.getElementById("login").classList.add("hidden");
}

function loginPorEmail() {
  document.getElementById("email").classList.remove("hidden");
  document.getElementById("login").classList.add("hidden");
}

function fecharEmail() {
  document.getElementById("email").classList.add("hidden");
}

function voltarEmail() {
  document.getElementById("email").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}

function loginPorTelefone() {
  document.getElementById("phone").classList.remove("hidden");
  document.getElementById("login").classList.add("hidden");
}

function fecharTelefone() {
  document.getElementById("phone").classList.add("hidden");
}

function voltarTelefone() {
  document.getElementById("phone").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}

function criarPaginaConta() {
  document.getElementById("signUp").classList.remove("hidden");
  document.getElementById("login").classList.add("hidden");
}

function fecharCadastro() {
  document.getElementById("signUp").classList.add("hidden");
}

function voltarCadastro() {
  document.getElementById("signUp").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}

function cadastrar() {
  let dados = JSON.parse(localStorage.getItem("users")) || [];
  let flag = false;
  for (let i = 0; i < dados.length; i++) {
    if (dados[i].email === document.getElementById("signEmail").value) {
      flag = true;
      alert("Você inseriu um endereço de email duplicado");
    }
  }
  if (flag === false) {
    let usuarios = [];
    let obj = {
      name: document.getElementById("name").value,
      email: document.getElementById("signEmail").value,
      gender: document.getElementById("gender").value,
      phone: document.getElementById("signphone").value,
      isAuthenticated: true,
    };
    usuarios = JSON.parse(localStorage.getItem("users")) || [];

    usuarios.push(obj);
    localStorage.setItem("users", JSON.stringify(usuarios));
    document.getElementById("signUp").classList.add("hidden");
    document.getElementById("email").classList.remove("hidden");
  }
}

function login() {
  let email = document.getElementById("emailLogin").value;
  let usuarios = JSON.parse(localStorage.getItem("users"));
  var flag = false;
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email === email) {
      flag = true;
      alert("Você fez login com sucesso");
      localStorage.setItem("name", usuarios[i].name);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", usuarios[i].phone);
      localStorage.setItem("isAuthenticated", usuarios[i].isAuthenticated);
      window.location.reload();
    }
  }
  if (flag == false) {
    alert("Por favor, insira um email válido e uma senha");
  }
}
