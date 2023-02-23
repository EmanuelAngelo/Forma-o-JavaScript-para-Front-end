async function buscaEndereco(){
    var consultaCep = await fetch('https:\\viacep.com.br/ws/65058139/json/');
    var consultaCEPConvertida = await consultaCep.json();
    console.log(consultaCEPConvertida);
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
