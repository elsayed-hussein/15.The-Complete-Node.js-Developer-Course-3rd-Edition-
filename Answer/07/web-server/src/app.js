const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Elsayed Hussen",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Elsayed Hussen",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    helpText: "This is some helpful text.",
    name: "Elsayed Hussen",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Cairo",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404 Help",
    errorMessage: "404 Help Not Found",
    name: "Elsayed Hussen",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "Error",
    errorMessage: "404 Page Not Found",
    name: "Elsayed Hussen",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
