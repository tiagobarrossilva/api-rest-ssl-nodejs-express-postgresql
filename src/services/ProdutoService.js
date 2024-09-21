const ProdutoRepository = require('../repositories/ProdutoRepository')
const ProdutoDto = require('../dtos/ProdutoDto')

module.exports = class ProdutoService{

    static async cadastrarNovoProduto(produto){
        try{
            const produtoDto = new ProdutoDto(produto)
            const produtoArmazenado = await ProdutoRepository.create(produtoDto)
            if(produtoArmazenado){
                return true
            }
            return false
        } catch(erro){
            return false
        }
    }

    static async consultarTodosProdutos(){
        try{
            const produtos = await ProdutoRepository.findAll(({ raw: true }))
            return produtos
        } catch(erro){
            return false
        }
    }

    static async consultarProdutoPorId(id){
        try{
            const produto = await ProdutoRepository.findByPk(id)

            // remover dados extras de produto e colocando apenas os dados necessarios em objProduto
            const objProduto = produto ? produto.get({ plain: true }) : null;

            return objProduto
        } catch(erro){
            return false
        }
    }

    static async atualizarProduto(id,produto){
        try{
            const produtoDto = new ProdutoDto(produto)
            await ProdutoRepository.update(produtoDto,{where:{id:id}})
            return true
        } catch(erro){
            return false
        }
    }

    static async excluirProduto(id){
        try{
            await ProdutoRepository.destroy({where:{id:id}})
            return true
        } catch(erro){
            return false
        }
    }
}