const express = require('express');
const router = express.Router();

// controller location
const ctrlLocations = require('../controllers/locations');

// controller others
const ctrlOthers = require('../controllers/others');
// const ctrlMain = require('../controllers/main');

/* GET home page. */
// router.get('/', ctrlMain.index); 

// Location pages
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);


// Other Pages
router.get('/about', ctrlOthers.about);
module.exports = router;
