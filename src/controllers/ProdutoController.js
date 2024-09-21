const ProdutoService = require('../services/ProdutoService')

module.exports = class ProdutoController{
    
    static async cadastrarProduto(req,res){
        const produtoArmazenado = await ProdutoService.cadastrarNovoProduto({
            id: req.body.id,
            nome: req.body.nome,
            preco: req.body.preco,
            quantidade: req.body.quantidade
        })

        if(produtoArmazenado){
            return res.status(201).json({message: 'armazenado'})
        }
        return res.status(500).json({message: 'erro'})
    }

    static async consultarProdutos(req,res){
        const produtos = await ProdutoService.consultarTodosProdutos()

        if(produtos){
            return res.status(200).json(produtos)
        }
        return res.status(500).json({message: 'erro'})
    }

    static async consultarProduto(req,res){
        const produto = await ProdutoService.consultarProdutoPorId(req.params.id)
        
        if(produto){
            return res.status(200).json(produto)
        }
        return res.status(500).json({message: 'erro'})
    }

    static async atualizarProduto(req,res){
        const produtoAtulaizado = await ProdutoService.atualizarProduto(req.params.id, {
            nome: req.body.nome,
            preco: req.body.preco,
            quantidade: req.body.quantidade
        })

        if(produtoAtulaizado){
            return res.status(200).json({message: 'atualizado'})
        }
        return res.status(500).json({message: 'erro'})
    }

    static async excluirProduto(req,res){
        const produtoExcluido = await ProdutoService.excluirProduto(req.params.id)
        
        if(produtoExcluido){
            return res.status(204)
        }
        return res.status(500).json({message: 'erro'})
    }
}