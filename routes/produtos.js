const express = require("express");
const router = express.Router();
const mysql = require("../database/mysql").pool;

router.get("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({
        error: error,
      });
    }

    conn.query("SELECT * FROM produtos", (error, resultado, fields) => {
      if (error) {
        return res.status(500).send({
          error: error,
        });
      }
      return res.status(200).send({
        response: resultado,
      });
    });
  });
});

router.post("/", (req, res, next) => {
  const produto = {
    nome: req.body.nome,
    marca: req.body.marca,
  };

  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({
        error: error,
      });
    }

    conn.query(
      "INSERT INTO produtos (nome, marca) VALUES (? , ?)",
      [req.body.nome, req.body.marca],
      (error, resultado, field) => {
        conn.release();

        if (error) {
          res.status(500).send({
            error: error,
            response: null,
          });
        }

        res.status(201).send({
          mensagem: "produto inserido com sucesso",
          id_produto: resultado.insertId,
        });
      }
    );
  });
});

router.get("/:id_produto", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({
        error: error,
      });
    }

    conn.query(
      "SELECT * FROM produtos WHERE id_produto = ?",
      [req.params.id_produto],
      (error, resultado, fields) => {
        if (error) {
          return res.status(500).send({
            error: error,
          });
        }
        return res.status(200).send({
          response: resultado,
        });
      }
    );
  });
});

router.patch("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({
        error: error,
      });
    }

    conn.query(
      "UPDATE produtos SET nome = ?, marca = ? WHERE id_produto = ?",
      [req.body.nome, req.body.marca, req.body.id_produto],
      (error, resultado, field) => {
        conn.release();

        if (error) {
          res.status(500).send({
            error: error,
            response: null,
          });
        }

        res.status(202).send({
          mensagem: "produto atualizado com sucesso"
        });
      }
    );
  });
});

router.delete("/", (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {
          return res.status(500).send({
            error: error,
          });
        }
    
        conn.query(
          "DELETE FROM produtos WHERE id_produto = ?", [req.body.id_produto],
          (error, resultado, field) => {
            conn.release();
    
            if (error) {
              res.status(500).send({
                error: error,
                response: null,
              });
            }
    
            res.status(201).send({
              mensagem: "produto deletado com sucesso"
            });
          }
        );
      });
});

module.exports = router;
