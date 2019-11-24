
const express = require('express');
const app = express();
const businessRoutes = express.Router();

// Require Business model in our routes module
let Business = require('../models/Business');

// GET
businessRoutes.route('/api/timeline/:type').get( async (req, res) => {
    Business.Timeline.
        find({}, (err, item) => {
            if (err) {
              res.status(500).send(err);
            }
            res.status(200).json(item);
        }).
        where('animalType').equals(req.params.type).
        sort('timelineIndex');
});

//POST
businessRoutes.route('/api/timeline/new').post(function (req, res) {
    let business = new Business.Timeline(req.body);
    business.save()
        .then(business => {
            res.status(200).json({ 'timelineItem': 'added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to be saved in database" + err);
        });
});

// PUT
businessRoutes.route('/api/timeline/edit/:id').put((req, res, next) => {
    Business.Timeline.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Data updated successfully')
      }
    })
  })
  
// DELETE 
businessRoutes.route('/api/timeline/delete/:id').delete((req, res, next) => {
    Business.Timeline.findOneAndRemove({ _id: req.params.id }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json('deleted successfully')
        console.log('Data deleted successfully')
      }
    })
  })

module.exports = businessRoutes;
