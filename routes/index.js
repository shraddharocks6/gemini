const router = require("express").Router();




//LANDING PAGE
router.get('/', (req, res) => {
  res.render('home.ejs');
});




module.exports = router;