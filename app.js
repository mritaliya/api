const express = require("express");
const app = express();
require("dotenv/config");
app.use(express.json());
const mongoose = require("mongoose");
const URL = process.env.CONNECTION_STRING;
const routes = require("./routes/productRoutes");

app.use("/api", routes);
app.get('/', (req, res) => {
  res.send('Hello World!')
})
mongoose
  .connect(URL)
  .then(() => console.log(`db is connected`))
  .catch((error) => console.log(error));
app.listen(4000, () => {
  console.log(`server is start at now http://localhost:4000`);
});

