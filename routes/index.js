//REQUIRING PACKAGES, MODULES AND OTHER EXTERNAL FILES
var express = require("express"),
  router = express.Router();

//INDEX ROUTE
router.get("/1", function (req, res) {
  res.send("Hello");
});

router.get("/test-three", function (req, res) {
  res.render("index.ejs");
});
//EXPORTING ROUTER TO BE REQUIRED IN app.js
module.exports = router;
