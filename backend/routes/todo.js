var express = require("express");
var router = express.Router();
const db = require("../services/db");

db.connectToDB(() => {
  // res é um callback
  router.get("/list", (req, res) => {
    res.send();
  });

  router.post("/add", (req, res) => {
    res.send();
  });

  router.patch("/update", (req, res) => {
    res.send();
  });

  router.delete("/delete", (req, res) => {
    res.send();
  });
});

module.exports = router;
