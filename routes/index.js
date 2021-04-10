const router = require("express").Router();

//LANDING PAGE
router.get('/', (req, res) => {
  res.render('home.ejs');
});


//REQUIRING PACKAGES, MODULES AND OTHER EXTERNAL FILES
var express = require("express"),
  router = express.Router();


router.get("/test-three", function (req, res) {
  res.render("d3.ejs");
});
//EXPORTING ROUTER TO BE REQUIRED IN app.js
module.exports = router;
