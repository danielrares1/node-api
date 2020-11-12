const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "busca os pedidos (GET)",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "envia os pedidos (POST)",
  });
});

router.get("/:status", (req, res, next) => {
  const status = req.params.status;

  if (status === "ready-for-handling") {
    res.status(200).send({
      mensagem: "busca os pedidos por id (GETBYID)",
      status: status,
    });
  }
});

router.delete("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "deleta os pedidos (DELETE)",
  });
});

module.exports = router;
