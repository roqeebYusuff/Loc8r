// Get home page
const homelist = (req, res) =>{
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [
            {
                name: 'Starcups',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 3,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '100m'
            },

            {
                name: 'Cafe Hero',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 4,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '200m'
            },

            {
                name: 'Burger Queen',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 4,
                facilities: ['Food', 'Premium wifi'],
                distance: '250m'
            }
        ]
    });
}

// Get location info Page
const locationInfo = (req, res) => {
    res.render('location-info', {
        title: 'Location Info',
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RC6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coord: {lat: 51.455041, lng: -0.9690884},
            data: [{
                    days: 'Monday - Friday',
                    opening: '7:00am',
                    closing: '7:00pm',
                    closed: false
                },{
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                },{
                    days: 'Sunday',
                    closed: true
                }
            ],
            reviews: [
                {
                    author: 'Simon Holmes',
                    rating: '4',
                    timestamp: '16 February 2018',
                    comment: 'What a great place'
                },
    
                {
                    author: 'John Doe',
                    rating: '3',
                    timestamp: '8 June 2018',
                    comment: "It was okay. Coffee wasn't great"
                }
            ],
        },
        sidebar1: 'Starcups is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
        sidebar2: "If you've been and you like it - or if you don't - please leave a review to help other people just like you."

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