const express = require('express')
const bodyParser = require('body-parser')

const app = express()
    //Colocando o body-parser para receber as requisições e convertelas para json
app.use(bodyParser.json())

const port = 3000

app.get('/teste', (req, res) => res.status(200).send({ mensagem: 'teste' }))

app.listen(port, () => console.log(`listening on port: ${port}`))

module.exports = app