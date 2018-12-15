const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const gravatar = require("gravatar");
const passport = require("passport");
const path = require("path");

const users = require("./router/api/users");
const profile = require("./router/api/profile");
const guide = require("./router/api/addguide");
const addfood = require("./router/api/addfood");
const goal = require("./router/api/goal");

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//connect to mongodb
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// app.get("/", (req, res) => res.send("Hello World"));

//passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

//routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/guide", guide);
app.use("/api/goal", goal);
app.use("/api/addfood", addfood);

//Server static if in production
if (process.env.NODE_ENV === "production") {
  // Set status folder
  app.use(express.static("front-end/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front-end", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
