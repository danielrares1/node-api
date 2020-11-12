const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "busca os produtos (GET)",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "envia os produtos (POST)",
  });
});

router.get("/:id_produto", (req, res, next) => {
  const id = req.params.id_produto;

  if (id === "G" || id === "g") {
    res.status(200).send({
      mensagem: "busca os produtos por id (GETBYID)",
      id: id,
    });
  } else {
    res.status(200).send({
      mensagem: "error",
    });
  }
});

router.patch("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "atualiza os produtos (PATCH)",
  });
});

router.delete("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "deleta os produtos(DELETE)",
  });
});

module.exports = router;
