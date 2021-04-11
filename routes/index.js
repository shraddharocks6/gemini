
//REQUIRING PACKAGES, MODULES AND OTHER EXTERNAL FILES
var express = require("express"),
  router = express.Router();

//LANDING PAGE
router.get('/', (req, res) => {
  res.render('home.ejs');
});




router.get("/test-three", function (req, res) {
  res.render("index.ejs");
});
//EXPORTING ROUTER TO BE REQUIRED IN app.js
module.exports = router;
