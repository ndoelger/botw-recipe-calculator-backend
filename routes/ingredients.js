var express = require("express");
var router = express.Router();

const ingredients = require("../ingredients.json");

router.get('/', async function(req, res) {
    try {
      // get all items
      res.json(ingredients);
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  }
  );

module.exports = router;