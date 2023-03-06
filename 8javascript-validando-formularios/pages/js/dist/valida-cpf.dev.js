"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ehUmCPF;

function ehUmCPF(campo) {
  var cpf = campo.value.replace(/\.|-/g, "");

  if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
    campo.setCustomValidity('Esse cpf nao é valido@!');
  }
}

function validaNumerosRepetidos(cpf) {
  var numerosRepetidos = ['00000000000', '11111111111', '22222222222', '33333333333', '44444444444', '55555555555', '66666666666', '77777777777', '88888888888', '99999999999'];
  return numerosRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf) {
  var soma = 0;
  var multiplicador = 10;

  for (var tamanho = 0; tamanho < 9; tamanho++) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  soma = soma * 10 % 11;

  if (soma == 10 || soma == 1) {
    soma = 0;
  }

  return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
  var soma = 0;
  var multiplicador = 11;

  for (var tamanho = 0; tamanho < 10; tamanho++) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  soma = soma * 10 % 11;

  if (soma == 10 || soma == 1) {
    soma = 0;
  }

  return soma != cpf[10];
}