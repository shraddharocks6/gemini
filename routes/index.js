//REQUIRING PACKAGES, MODULES AND OTHER EXTERNAL FILES
var express = require("express"),
  router = express.Router();

//INDEX ROUTE
router.get("/", function (req, res) {
  res.render("landing2.ejs");
});

router.get("/test-three", function (req, res) {
  res.render("d3.ejs");
});
//EXPORTING ROUTER TO BE REQUIRED IN app.js
module.exports = router;
