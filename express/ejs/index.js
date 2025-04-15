require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", async (req, res) => {
  let rollDice = Math.floor(Math.random() * 6) + 1;
  res.render("home.ejs", { num: rollDice });
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  let followers = ["abhishek", "nimesh", "abdur"];
  res.render("instagram", { username: username, followers: followers });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
