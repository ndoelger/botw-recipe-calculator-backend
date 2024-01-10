const express = require("express");
const app = express();
const port = 3001;

const ingredients = require("./ingredients.json");

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/ingredients", (req, res) => {
  res.json(ingredients);
});

app.listen(port, () => console.log(`Server listening on ${port}`));
