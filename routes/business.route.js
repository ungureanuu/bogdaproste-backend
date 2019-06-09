
const express = require('express');
const app = express();
const businessRoutes = express.Router();

// Require Business model in our routes module
let Business = require('../models/Business');

// Defined store route
businessRoutes.route('/add').post(function (req, res) {
    let business = new Business.Surveys(req.body);
    business.save()
        .then(business => {
            res.status(200).json({ 'business': 'business in added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to be saved in database" + err);
        });
});

businessRoutes.route('/addContent').post(function (req, res) {
  let business = new Business.Content(req.body);
  business.save()
      .then(business => {
          res.status(200).json({ 'business': 'business in added successfully' });
      })
      .catch(err => {
          res.status(400).send("unable to be saved in database" + err);
      });
});

// Defined get data(index or listing) route
businessRoutes.route('/get').get( async (req, res) => {
    Business.Surveys.find({}, (err, user) => {
            if (err) {
              res.status(500).send(err);
            }
            res.status(200).json(user);
    });
});

businessRoutes.route('/getContent').get( async (req, res) => {
  Business.Content.find({}, (err, user) => {
          if (err) {
            res.status(500).send(err);
          }
          res.status(200).json(user);
  });
});


// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Business.findById(id, function (err, business) {
        res.json(business);
    });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function (err, next, business) {
        if (!business)
            return next(new Error('Could not load Document'));
        else {
            business.person_name = req.body.person_name;
            business.business_name = req.body.business_name;
            business.business_gst_number = req.body.business_gst_number;

            business.save().then(business => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({ _id: req.params.id }, function (err, business) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes;
