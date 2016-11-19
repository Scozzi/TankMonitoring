var mongoose = require('mongoose');
var Tank = mongoose.model('Tank');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/*function getUuidOfActiveTank(tankName) {
  Tank.findOne({ 'tank.active' : true, 'tank.tankName' : tankName},
    function (err, tank) {
      if (!tank) {
        return -1;
      }
      else if (err) {
        return -1;
      }
      return tank._id;
    });
}


/* POST: Add a reading to a tank */
/* Api/tank/addreading */
module.exports.addreading = function(req, res) {
  var uuid = getUuidOfActiveTank(req.body.tankName);
  if (uuid === -1) {
    sendJSONresponse(res, 500, "Bad TankName");
  } else {
    Tank.findByIdAndUpdate(uuid,
    {$push, {"notes", req.body.noteobj}},
    {safe: true, upsert: true},
    function (err, tank) {
      if (!tank){
        sendJSONresponse(res,500, err);
        return;
      }
      else if (err) {
        sendJSONresponse(res,500, err);
        return;
      }
      sendJSONresponse(res, 200);
      return;
      });
  }
}

/* POST: Add note to tank */
/* Api/tank/addNote */
module.exports.addnote = function(req, res) {
  Tank.findByIdAndUpdate(
    req.body.tankid,
    {$push, {"notes", req.body.noteobj}},
    {safe: true, upsert: true},
    function (err, tank) {
      if (!tank){
        sendJSONresponse(res,500, err);
        return;
      }
      else if (err) {
        sendJSONresponse(res,500, err);
        return;
      }
      sendJSONresponse(res, 200);
      return;
    });
}

