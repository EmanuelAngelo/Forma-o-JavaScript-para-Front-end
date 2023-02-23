async function buscaEndereco(){
    try {
        var consultaCep = await fetch('https:\\viacep.com.br/ws/01001250/json/');
        var consultaCEPConvertida = await consultaCep.json();
        if (consultaCEPConvertida.erro){
            throw Error('CEp nao achado.')
        }
        console.log(consultaCEPConvertida);
        } catch (erro) {
            console.log(erro)
    }
}

buscaEndereco();


// .then(resposta => resposta.json())
// .then(r => {
//         if (r.erro){
//             throw Error('Esse cep nao existe')
//         } else console.log(r)
//     })
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log('processamento concluido'));
