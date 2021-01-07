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
router.get('/location/:locationid', ctrlLocations.locationInfo);
router
    .route('/location/:locationid/review/new')
    .get(ctrlLocations.addReview)
    .post(ctrlLocations.doAddReview);


// Other Pages
router.get('/about', ctrlOthers.about);
module.exports = router;
