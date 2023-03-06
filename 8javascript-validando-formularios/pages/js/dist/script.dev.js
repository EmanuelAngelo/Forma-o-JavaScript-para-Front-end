"use strict";

var _validaCpf = _interopRequireDefault(require("./valida-cpf"));

var _validaIdade = _interopRequireDefault(require("./valida-idade"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var formulario = document.querySelector("[data-formulario]");
var camposDoFormulario = document.querySelectorAll("[required]");
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  var listaRespostas = {
    "nome": e.target.elements["nome"].value,
    "email": e.target.elements["email"].value,
    "rg": e.target.elements["rg"].value,
    "cpf": e.target.elements["cpf"].value,
    "aniversario": e.target.elements["aniversario"].value
  };
  localStorage.setItem("cadastro", JSON.stringify(listaRespostas));
  window.location.href = './abrir-conta-form-2.html';
});
camposDoFormulario.forEach(function (campo) {
  campo.addEventListener("blur", function () {
    return verificaCampo(campo);
  });
  campo.addEventListener("invalid", function (evento) {
    return evento.preventDefault();
  });
});
var tiposDeErro = ['valueMissing', 'typeMismatch', 'patternMismatch', 'tooShort', 'customErro'];
var mensagens = {
  nome: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido."
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um e-mail válido."
  },
  rg: {
    valueMissing: "O campo de RG não pode estar vazio.",
    patternMismatch: "Por favor, preencha um RG válido.",
    tooShort: "O campo de RG não tem caractéres suficientes."
  },
  cpf: {
    valueMissing: 'O campo de CPF não pode estar vazio.',
    patternMismatch: "Por favor, preencha um CPF válido.",
    customError: "O CPF digitado não existe.",
    tooShort: "O campo de CPF não tem caractéres suficientes."
  },
  aniversario: {
    valueMissing: 'O campo de data de nascimento não pode estar vazio.',
    customError: 'Você deve ser maior que 18 anos para se cadastrar.'
  },
  termos: {
    valueMissing: 'Você deve aceitar nossos termos antes de continuar.'
  }
};

function verificaCampo(campo) {
  var mensagem = "";
  campo.setCustomValidty('');

  if (campo.name == "cpf" && campo.value.length >= 11) {
    (0, _validaCpf["default"])(campo);
  }

  if (campo.name == "aniversario" && campo.value != "") {
    (0, _validaIdade["default"])(campo);
  }

  tiposDeErro.forEach(function (erro) {
    if (campo.validity[erro]) {
      mensagem = mensagens[campo.name][erro];
    }
  });
  var mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
  var validadorDeInput = campo.checkValidity();

  if (!validadorDeInput) {
    mensagemErro.textContent = mensagem;
  } else {
    mensagemErro.textContent = "";
  }
}