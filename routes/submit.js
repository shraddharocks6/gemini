const router = require("express").Router();

var multer = require('multer');

const Event = require('../models/event');


//Submit Form for event

router.get('/join', (req, res) => {
  res.render('join.ejs');
});


var Storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname + "_" + Date.now());
  }
});
var upload = multer({ storage: Storage });

//Joining Application Page  (POST)
router.post('/upload', upload.single('file'), async (req, res) => {

  console.log(req.body);
  var d = new Date();
  yy = '';
  yy = d.getFullYear();
  mm = '';
  if((d.getMonth() + 1)<10)
  {
   mm = (d.getMonth() + 1);
   mm = `0${mm}`;
  //  console.log(mm + "above one");
  }
  else
  {
    mm = (d.getMonth() + 1);
  //  console.log(mm);
  }
  dd = '';
  if((d.getDate() )<10)
  {
   dd = (d.getDate());
   dd = `0${dd}`;
  }
  else
  {
    dd = (d.getDate());
  }
  dateJoined = dd + '/' + mm + '/' + yy;
  // console.log(dateJoined);
  const newEvent = await new Event({
   
    dateJoined: dateJoined,
    image: req.file.filename,
  });

 
  //Saving
  try {
    const savedEvent = await newEvent.save();
    if (savedEvent) {
      console.log("new event saved " + savedEvent);
      res.send("Application Sent");
      // res.render("success.ejs");
    }
  } catch (err) {
    console.log("We got some error");
    res.send("There was error" + err);
  }
});


module.exports = router;