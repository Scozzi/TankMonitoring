var express = require('express');
var router = express.Router();
var ctrlTanks = require('../controllers/tanks');
var ctrlNotes = require('../controllers/notes');

// Tank Routes
router.get('/tanks', ctrlTanks.locationsListByDistance);
router.post('/tanks', ctrlTanks.locationsCreate);
router.get('/tanks/:tankid', ctrlTanks.locationsReadOne);
router.put('/tanks/:tankid', ctrlTanks.locationsUpdateOne);
router.delete('/tanks/:locationid', ctrlTanks.locationsDeleteOne);

// Notes Routes
router.post('/tanks/:tankid/notes', ctrlNotes.noteCreate);
router.get('/tanks/:tankid/notes/:noteid', ctrlNotes.noteReadOne);
router.put('/tanks/:tankid/notes/:noteid', ctrlNotes.noteUpdateOne);
router.delete('/tanks/:tankid/notes/:noteid', ctrlNotes.noteDeleteOne);

module.exports = router;
