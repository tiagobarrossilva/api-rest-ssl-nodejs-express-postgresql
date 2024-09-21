module.exports = class ProdutoDto{
    id
    nome
    preco
    quantidade

    constructor(produto){
        this.id = produto.id
        this.nome = produto.nome
        this.preco = produto.preco
        this.quantidade = produto.quantidade
    }
}