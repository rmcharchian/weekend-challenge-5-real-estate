var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Rental = require('../models/rental.schema.js');


router.get('/', function(req, res){
    console.log('GET route hit');
    Rental.find({}, function(err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);    
        } else {
            console.log('found data: ', data);
            res.send(data);
        }
    });
});


module.exports = router;