const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const locationsCreate = (req, res) => { 
    res
        .status(200)
        .json({"status": "success"});
};

const locationsListByDistance = (req, res) => { };

const locationsReadOne = (req, res) => {
    Loc
        .findById(req.params.locationid)
        .exec((err, location) => {
            if(!location){
                return res
                    .status(404)
                    .json({"message" : "Location not found"});
            }
            else if (err)
            {
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(location);
        });
};

const locationsUpdateOne = (req, res) => { };

const locationsDeleteOne = (req, res) => { };

module.exports = {
    locationsCreate,
    locationsListByDistance,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
}