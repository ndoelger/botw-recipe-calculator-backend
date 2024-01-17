const express = require('express');
const app = express();
const port = 3000;

const ingredientsRouter = require('./routes/ingredients');


// app.get('/', (req, res) => res.send('Hello World!'));

app.use("/", ingredientsRouter);


app.listen(port, () => console.log(`Server running on port ${port}`));