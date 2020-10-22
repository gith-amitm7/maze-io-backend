const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const router = express.Router();
const cors = require("cors");

const users = require("./routes/api/users");

const app = express();

app.use(express.static(__dirname + "/build/"));
app.use(express.static(__dirname + "/build/static/js"));
app.use(express.static(__dirname + "/build/static/css"));
app.use(express.static(__dirname + "/build/static/media"));

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

// @route GET register
// @desc Register user
// @access Public
app.get("/login", (req, res) => {
  // res.sendFile(__dirname + "/build/index.html");
  console.log("AAA");
  res.sendFile("index.html", { root: __dirname + "/build" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
