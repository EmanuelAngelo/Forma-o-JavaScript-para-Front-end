var consultaCep = fetch('https:\\viacep.com.br/ws/65058139/json/')
.then(resposta => resposta.json())
.then(r => {
        if (r.erro){
            throw Error('Esse cep nao existe')
        } else console.log(r)
    }).catch(erro => console.log(erro));