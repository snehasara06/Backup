const express = require('express');
const router = express.Router();
const objectId = require('mongoose').Types.ObjectId;
var { Flight } = require('../Models/flight.js');

// localhost:3000/flightData/
router.get('/', (req, res) => {
    Flight.find((err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log('Error in retrieving flight data:' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.post('/', (req, res) => {
    var fly = new Flight({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        departure: req.body.departure,
        arrival: req.body.arrival,
    });


    fly.save((err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log('Error response save:' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/:id', (req, res) => {
    if (!objectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

    Flight.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log('Error in retriving flight data:' + JSON.stringify(err, undefined, 2))
        }
    })
});

router.put('/:id', (req, res) => {
    if (!objectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

    var fly = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        departure: req.body.departure,
        arrival: req.body.arrival
    };
    Flight.findByIdAndUpdate(req.params.id, { $set: fly }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log('Error in Flight update:' + JSON.stringify(err, undefined, 2));
        }
    });
    router.delete('/:id', (req, res) => {
        if (!objectId.isValid(req.params.id)) {
            return res.status(400).send(`No record with the given id:${req.params.id}`);
        }
    });
    Flight.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Flight delete:'+JSON.stringify(err,undefined,2));
        }
    })

});


module.exports = router;