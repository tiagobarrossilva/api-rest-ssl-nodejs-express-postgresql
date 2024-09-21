require('dotenv').config()
const PORT = process.env.PORT

const app = require('./app')
const conn = require('./config/connectDatabaseConfig')

const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('./ssl/code.key'),
    cert: fs.readFileSync('./ssl/code.crt'),
}

conn.sync()
    .then(() =>{
        https.createServer(options, app).listen(PORT, ()=>{console.log('servidor iniciado')});
    })
    .catch((erro) => {
        console.log(erro)
    })
    
// para refazer as tabelas do banco de dados use: conn.sync({force:true})
