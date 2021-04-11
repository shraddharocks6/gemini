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
    cb(null, Date.now()+ "_" +file.originalname  );
  }
});
var upload = multer({ storage: Storage });


//Joining Application Page  (POST)
router.post('/upload', upload.array('file', 15), async (req, res) => {

  console.log(req.files);
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
  var arr = [];
  (req.files).forEach(function(item){
    console.log(item.filename);
    arr.push(item.filename);
  })

  const newEvent = await new Event({
    description: req.body.description,  
    organiser_name: req.body.organiser_name,
    event_name: req.body.event_name,  
    dateJoined: dateJoined,
    image: arr,
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



//just testing
var multiple_upload = multer({ storage : Storage }).array('file',15);

router.post('/multiple-upload',function(req,res){
  multiple_upload(req,res,function(err) {
      console.log(req.body);
      console.log(req.files);
      if(err) {
          return res.end("Error uploading file.");
      }
      console.log("File is uploaded");
  });
});


module.exports = router;