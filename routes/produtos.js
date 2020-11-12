const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'usando o get'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'usando o post'
    })
});

router.get('/:id_produto', (req, res, next) => {

    const id = req.params.id_produto

    if(id === 'G'){
        res.status(200).send({
            mensagem: 'camiseta tamanho G',
            id: id
        })
    } else {
      res.status(200).send({
          mesnagem: 'tamanho indisponivel'
      })  
    }

    res.status(200).send({
        mensagem: 'usando get by id'
    })
});

module.exports = router;