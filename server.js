const express = require("express");
const bodyParser = require("body-parser");
const { mongoConnect } = require("./util/database");
const movieRouter =require('./routes/movieRouter')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(movieRouter)

app.use("/", (req, res) => {
  res.send("<h1>the default routes</h1>");
});

mongoConnect((client) => {
  console.log(client);
  app.listen(3000, () => {
    console.log("server is up and running at 3000");
  });
});
