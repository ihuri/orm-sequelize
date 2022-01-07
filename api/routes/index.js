const bodyParser = require('body-parser')
const pessoas = require('./pessoaRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

module.exports = app => {
    //Colocando o body-parser para receber as requisições e convertelas para json
    app.use(
        bodyParser.json(),
        pessoas,
        niveis,
        turmas
    )
}