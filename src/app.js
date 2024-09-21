const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

// necessario para ler o body
app.use(express.urlencoded({extended: true,}))
app.use(express.json())

// modelos
const Produto = require('./models/Produto')

// rotas
const produtoRoutes = require('./routes/produtoRoutes')
app.use('/produto',produtoRoutes)
  
module.exports = app