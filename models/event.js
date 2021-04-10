var mongoose = require('mongoose');
var eventSchema = new mongoose.Schema({

  event_name:{
    type: String,
  },
  dateJoined: {
    type: String,
  },
  image: {
    type: String,
  },
  
})

module.exports = mongoose.model("Event", eventSchema);