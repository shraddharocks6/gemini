var mongoose = require('mongoose');
var eventSchema = new mongoose.Schema({

  event_name:{
    type: String,
  },
  organiser_name:{
    type: String,
  },
  description:{
    type: String,
  },
  dateJoined: {
    type: String,
  },
  image: [{
    type: String,
  }],
  
})

module.exports = mongoose.model("Event", eventSchema);