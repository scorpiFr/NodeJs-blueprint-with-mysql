const express = require("express");
const router = express.Router();
const TestModel = require("../model/TestModel");

// Ici on passe la connexion db en paramètre pour instancier TestModel
module.exports = (db) => {
  const testModel = new TestModel(db);

  // GET /test
  router.get("/", (req, res, next) => {
    testModel.getAll((err, results) => {
      if (err) return next(err);
      res.json(results);
    });
  });

  // GET /test/:id
  router.get("/:id", (req, res, next) => {
    testModel.getById(req.params.id, (err, results) => {
      if (err) return next(err);
      if (results.length === 0) {
        const err = new Error("Non trouvé");
        err.statusCode = 404;
        return next(err);
      }

      res.json(results[0]);
    });
  });

  // POST /test
  router.post("/", (req, res, next) => {
    const { nom, age, email } = req.body;
    if (!nom || !email) {
      const err = new Error("nom et email requis");
      err.statusCode = 400;
      return next(err);
    }

    testModel.create({ nom, age, email }, (err, result) => {
      if (err) return next(err);
      res.status(201).json({ id: result.insertId, nom, age, email });
    });
  });

  // PUT /test/:id
  router.put("/:id", (req, res, next) => {
    const { nom, age, email } = req.body;
    testModel.update(req.params.id, { nom, age, email }, (err, result) => {
      if (err) return next(err);
      if (result.affectedRows === 0) {
        const err = new Error("ID non trouvé");
        err.statusCode = 404;
        return next(err);
      }

      res.json({ id: req.params.id, nom, age, email });
    });
  });

  // DELETE /test/:id
  router.delete("/:id", (req, res, next) => {
    testModel.delete(req.params.id, (err, result) => {
      if (err) return next(err);
      if (result.affectedRows === 0) {
        const err = new Error("ID non trouvé");
        err.statusCode = 404;
        return next(err);
      }

      res.json({ message: "Supprimé avec succès." });
    });
  });

  // Route easter egg
  router.get("/yippee", (req, res) => {
    res.json({
      message: "Yippee-ki-yay, développeur ! 💥",
      hero: "John McClane",
      film: "Die Hard (1988)",
    });
  });

  return router;
};
