const express = require("express");
const { getDB } = require("../util/database");
const router = express.Router();

router.get("/movies/:id", (req, res, next) => {
  console.log(req.params.id);
  getDB()
    .collection("movies")
    .find({ year: 1992 })
    .limit(10)
    .toArray()
    .then((results) => {
      console.log(results);
      res.json(results);
    });
});

router.post("/movies", (req, res, next) => {
  console.log(req.body);
  getDB()
    .collection("movies")
    .insertOne(req.body)
    .then((result) => {
      console.log("post is successful", result);
      res.json(result);
    });
});

module.exports = router;
