const bodyParser = require('body-parser')
const pessoas = require('./pessoaRoute')

module.exports = app => {
    //Colocando o body-parser para receber as requisições e convertelas para json
    app.use(bodyParser.json())
    app.use(pessoas)
}