let btnOdernarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOdernarPorPreco.addEventListener('click', ordernarLivrosPorPreco)

function ordernarLivrosPorPreco() {
    let livrosOrdernados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdernados)
}