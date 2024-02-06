var express = require("express");
var router = express.Router();

const recipes = require("../recipes.json");

router.get('/', async function(req, res) {
    try {
      // get all items
      res.json(recipes);
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  }
  );

module.exports = router;