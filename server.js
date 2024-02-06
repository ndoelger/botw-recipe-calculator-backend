///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const PORT = 3001;

const express = require("express");
const app = express();

const cors = require("cors")
const morgan = require("morgan")

const ingredientsRouter = require("./routes/materials")
const recipesRouter = require("./routes/recipes")

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.json()); 
app.use(cors()); 
app.use(morgan("dev"));

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route

app.get('/', (req, res) => res.send('Hello World!'));
app.use("/ingredients", ingredientsRouter);
app.use("/recipes", recipesRouter);


///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));