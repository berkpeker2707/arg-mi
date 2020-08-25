const express = require("express");
const mongoose = require('mongoose');
const db = require("./config/keys").mongoURI;
const bodyParser = require('body-parser');

const posts = require("./routes/api/posts");

const app = express();

//using middleware
app.use(bodyParser.json());

//Connecting to Mongo DB
const uri = db;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

//Routes
app.use("/api/posts", posts);

const port = process.env.PORT || 1000;

app.listen(port, () => console.log(`Server started on port ${port}.`));