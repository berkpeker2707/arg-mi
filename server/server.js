const express = require("express");
const mongoose = require('mongoose');
const path = require("path")
const config = require("config")
const db = config.get("mongoURI");

const app = express();

//using middleware
app.use(express.json());

//Connecting to Mongo DB
const uri = db;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

//Routes
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

//Production
if(process.env.NODE_ENV == "production") {
  app.use(express.static("../client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 1000;

app.listen(port, () => console.log(`Server started on port ${port}.`));