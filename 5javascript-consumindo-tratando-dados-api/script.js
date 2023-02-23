async function buscaEndereco(cep){
    try {
        var consultaCep = await fetch(`https:\\viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCep.json();
        if (consultaCEPConvertida.erro){
            throw Error('CEP nao achado.')
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var complemento = document.getElementById('complemento');
        var bairro = document.getElementById('bairro');
        
        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        complemento.value = consultaCEPConvertida.complemento;
        bairro.value = consultaCEPConvertida.bairro;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
        } catch (erro) {
            console.log(erro)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value));


// let ceps = ['65058139', '65058136'];
// let conjuuntosCeps = ceps.map(valores => buscaEndereco(valores));
// console.log(conjuuntosCeps)
// Promise.all(conjuuntosCeps).then(respostas => console.log(respostas));


// .then(resposta => resposta.json())
// .then(r => {
//         if (r.erro){
//             throw Error('Esse cep nao existe')
//         } else console.log(r)
//     })
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log('processamento concluido'));
