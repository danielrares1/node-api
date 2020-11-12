const express = require('express');
const app = express();

const rotaProdutos = require('./routes/produtos'); 

app.use('/produtos', rotaProdutos);

app.use('/teste', (req, res, next) => {
    res.status(200).send({
        mensagem: 'preparando esqueleto'
    })
});

module.exports = app;