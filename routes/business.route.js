
const express = require('express');
const app = express();
const path = require('path');
const businessRoutes = express.Router();

let multer = require('multer');
// let upload = multer();

// Require Business model in our routes module
let Business = require('../models/Business');

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dynamicPath = req.body.animalType;
    cb(null, './public/timeline/' + dynamicPath)
  },
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 10000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('picture');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

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
businessRoutes.route('/api/timeline/new').post((req, res) => {
    
    upload(req, res, (err) => {
      if(err){
        // res.render('index', {
        //   msg: err
        // });
        console.log(err);
      } else {
        if(req.file == undefined){
          // res.render('index', {
          //   msg: 'Error: No File Selected!'
          // });
          console.log('No File Selected');
        } else {  
          let pictureObject = {
            location: req.file.destination,
            name: req.file.filename
          }
          req.body.picture = pictureObject;

          let business = new Business.Timeline(req.body);
          business.save()
            .then(business => {
                res.status(200).json({ 'timelineItem': 'added successfully' });
            })
            .catch(err => {
                res.status(400).send("unable to be saved in database" + err);
            });
        }
      }
    });

    // let business = new Business.Timeline(req.body);
    // if (!req.file) {
    //   console.log("No file received");
    // } else {
    //   console.log('file received');
    // }

    // business.save()
    //     .then(business => {
    //         res.status(200).json({ 'timelineItem': 'added successfully' });
    //     })
    //     .catch(err => {
    //         res.status(400).send("unable to be saved in database" + err);
    //     });
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
