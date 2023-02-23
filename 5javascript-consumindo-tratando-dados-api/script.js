async function buscaEndereco(cep){
    try {
        var consultaCep = await fetch(`https:\\viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCep.json();
        if (consultaCEPConvertida.erro){
            throw Error('CEp nao achado.')
        }
        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
        } catch (erro) {
            console.log(erro)
    }
}


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
