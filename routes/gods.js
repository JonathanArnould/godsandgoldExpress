const express = require("express");
const router = express.Router();
const connection = require("../config");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM god", (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

router.get("/:id/offerings", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM gift WHERE god_id = ?",
    [id],
    (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
