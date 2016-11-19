var mongoose = require('mongoose');

var speciesSchema = new mongoose.Schema({
    name : {
      type : String,
      required : true
    },
    description : {
      type : String,
      required : true
    },
    pictureUrl : {
      type : String,
      "default" : "./images/imageNotFound.jpg"
    }
});

var readingSchema = new mongoose.Schema({
    time : {
      type : Date,
      Sensors : [sensorSchema],
      notes : [noteSchema]
    }
});

var sensorSchema = new mongoose.Schema({
    sensorType : {
      type : String,
      required : true
    },
    readingValue : {

    },
    notes : [noteSchema],
    required : true
});

var noteSchema = new mongoose.Schema({
  time : {
    type : Date,
    "default" : Date.now
  },
  title : {
    type : String,
    required : true,
  },
  content : {
    type : String,
    required : true
  },
  pictureUrl : {
    type : String,
  }

});

var lifeCycleInfoSchema = new mongoose.Schema({
  lifeCycleStart: {
      type: Date,
      "default": Date.now
  },
  lifeCycleEnd : {
    type : Date,
    "default" : Date.now
  }
});

var tankSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  species : [speciesSchema],
  active : {
    type : Boolean,
    required : true
  },
  lifeCycleInfo : [lifeCycleInfoSchema],
  tankName : {
    type : String,
    required : true
  },
  notes : [noteSchema]
});

mongoose.model('Note', noteSchema);
mongoose.model('Location', tankSchema);
