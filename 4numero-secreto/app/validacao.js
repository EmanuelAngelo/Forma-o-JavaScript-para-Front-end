function verificarValorFalado(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += `
            <div> Valor inválido </div>
        `
        return
    }
    if (numeroMaiorMenor(numero)) {
        elementoChute.innerHTML += `
            <div> Fale um número entre ${menorValor} e ${maiorValor} </div>
        `
        return
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = ` 
            <h2> Você acertou! </h2>
            <h3> O número secreto era: ${numeroSecreto} </h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente </button> 
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-sharp fa-solid fa-angle-down"></i></div>

        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-sharp fa-solid fa-angle-up"></i></div>

        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', evento => {
    if (evento.target.id == 'jogar-navamente') {
        window.location.reload()
    }
})