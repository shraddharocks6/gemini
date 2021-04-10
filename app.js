//REQUIRING PACKAGES, MODULES AND OTHER EXTERNAL FILES
const express = require("express");
const path = require("path");

//REQUIRING ROUTES
var routes = require("./routes/index");

//SETTING UP app FOR USING EXPRESS
var app = express();

//SERVING THE PUBLIC DIRECTORY
app.use(express.static(__dirname + "/public"));

//SETTING UP THREE

//SETTING DEFAULT VIEW ENGINE
// app.set("view engine", "ejs");

//USING ROUTES
app.use(routes);

app.listen(3000, () => {
  console.log("Server is on Fire !!");
});

//CODE FOR THREE

let camera, scene, renderer;
let geometry, material, mesh;
