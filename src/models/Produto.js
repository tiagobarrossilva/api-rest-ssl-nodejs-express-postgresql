const { DataTypes } = require('sequelize')
const db = require('../config/connectDatabaseConfig')

const Produto = db.define('Produto',{
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: false,
        primaryKey: true,
        allowNull: false
    },
    nome:{
        type: DataTypes.STRING,
        require: true,
        allowNull: false, //não permite valor nulo
    },
    preco:{
        type: DataTypes.FLOAT,
        require: true,
        allowNull: false
    },
    quantidade:{
        type: DataTypes.INTEGER,
        require: true,
        allowNull: false
    },
})

module.exports = Produto