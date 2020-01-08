
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
    cb(null,file.fieldname + '-' +  path.extname(file.originalname) + '-' + Date.now());
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
  let pictureObject = null;
  upload(req, res, (err) => {
    if(err){
      console.log(err);
    } else {
      pictureObject = {
        location: req.file.destination,
        name: req.file.filename
      }

      let newTimelineItem = {
        age: req.body.age,
        animalType: req.body.animalType,
        title: req.body.title,
        picture: pictureObject != null ? pictureObject : req.body.picture,
        subtitle: req.body.subtitle,
        descriptionText: req.body.descriptionText,
        infoItems: req.body.infoItems,
        timelineIndex: req.body.timelineIndex,
      }

      let business = new Business.Timeline(newTimelineItem);
      business.save()
        .then(business => {
            res.status(200).json({ 'timelineItem': 'added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to be saved in database" + err);
        });
    }
  });
});


// PUT
businessRoutes.route('/api/timeline/edit/:id').put((req, res, next) => {
  let newTimelineItem = req.body;
  console.log(newTimelineItem);
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
});

// Change timeline pic
businessRoutes.route('/api/timeline/changePic').post((req, res) => {
  let pictureObject = null;
  upload(req, res, (err) => {
    if(err){
      console.log(err);
    } else {
      pictureObject = {
        location: req.file.destination,
        name: req.file.filename
      }

      let newTimelineItem = {
        _id: req.body._id,
        picture: pictureObject != null ? pictureObject : req.body.picture      
      }

      Business.Timeline.
        find({}, (err, item) => {
            if (err) {
              res.status(500).send(err);
            }                    
            res.status(200).json(item);
        }).
        where('_id').equals(req.body._id)
    }
  });
});
  
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
