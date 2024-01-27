var express = require("express");
var router = express.Router();

const materials = require("../materials.json");

router.get('/', async function(req, res) {
    try {
      // get all items
      res.json(materials);
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  }
  );

module.exports = router;