const { response } = require('express');
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://roqeebyusuff.herokuapp.com/';
}
// Get home page
const formatDistance = (distance) => {
    let thisDistance = 0;
    let unit = 'm';
    if (distance > 1000) {
        thisDistance = parseFloat(distance / 1000).toFixed(1);
        unit = 'km';
    } else {
        thisDistance = Math.floor(distance);
    }
    return thisDistance + unit;
};

const renderHomepage = (req, res, responseBody) => {
    let message = null;
    if(!(responseBody instanceof Array)){
        message = "API lookup error";
        responseBody = [];
    }
    else{
        if(!responseBody.length){
            message = "No place found Nearby";
        }
    }

    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: responseBody,
        message
    });
}

const homelist = (req, res) =>{
    const path = '/api/locations';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
        qs: {
            lng: -0.7992599,
            lat: 51.378091,
            maxDistance: 20
        }
    };
    request(requestOptions, (err, {statusCode}, body) =>{
        let data = [];
        if(statusCode === 200 && body.length){
            data = body.map( (item) => {
                item.distance = formatDistance(item.distance);
                return item;
            });
        }
        renderHomepage(req, res, data);
    });  
}

const renderlocationInfo = (req, res, location) => {
    res.render('location-info', {
        title: location.name,
        pageHeader: {
            title: location.name
        },
        sidebar1: 'Starcups is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
        sidebar2: "If you've been and you like it - or if you don't - please leave a review to help other people just like you.",
        location
    });
}

// Get location info Page
const locationInfo = (req, res) => {
    const path = `/api/locations/${req.params.locationid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    }

    request(requestOptions, (err, response, body) => {        
        // console.log('body:', body);
        const data = body;
        data.coords = {
            lng: body.coords[0],
            lat: body.coords[1]
        };
        console.log('body:', data);
        renderlocationInfo(req, res, data);
    });
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