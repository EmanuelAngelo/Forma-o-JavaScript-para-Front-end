"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ehMaiorDeIdade;

function ehMaiorDeIdade(campo) {
  var dataNascimento = new Date(campo.value);

  if (!validaIdade(dataNascimento)) {
    campo.setCustomValidity('O usuario nao e maior de idade');
  }
}

function validaIdade(data) {
  var dataAtual = new Date();
  var dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
  return dataAtual >= dataMais18;
}