// Get home page
const homelist = (req, res) =>{
    res.render('locations-list', {title: 'Home'});
}

// Get location info Page
const locationInfo = (req, res) => {
    res.render('location-info', {title: 'Location Info'});
}

// Get location info Page
const addReview = (req, res) => {
    res.render('location-review-form', {title: 'Add review'});
}

module.exports = {
    homelist,
    locationInfo,
    addReview
}