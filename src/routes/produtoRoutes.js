const express = require('express')
const router = express.Router()

const ProdutoController = require('../controllers/ProdutoController')

router.post('/',ProdutoController.cadastrarProduto)
router.get('/:id',ProdutoController.consultarProduto)
router.get('/',ProdutoController.consultarProdutos)
router.patch('/:id',ProdutoController.atualizarProduto)
router.delete('/:id',ProdutoController.excluirProduto)

module.exports = router