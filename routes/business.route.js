const express = require('express');
const app = express();
const path = require('path');
const businessRoutes = express.Router();
const aws = require('aws-sdk');
const fs = require( 'fs');

let multer = require('multer');
let Business = require('../models/Business');

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dynamicPath = req.body.animalType;
    cb(null, './public/timeline/' + dynamicPath)
  },
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() +  path.extname(file.originalname));
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

function uploadToS3(req, res) {  
  let pictureObject = null;
  let dynamicPath = "timeline/" + "pisica" + "/" + req.file.originalname;
  aws.config.setPromisesDependency();
  aws.config.update({
    accessKeyId: "AKIAYSYMUMGJQ3FG7FPF",
    secretAccessKey: "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",
    region: "eu-central-1"
  });
  const s3 = new aws.S3();
  var params = {
    ACL: 'public-read',
    Bucket: "smartvet",
    Body: fs.createReadStream(req.file.path),
    Key: dynamicPath
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.log('Error occured while trying to upload to S3 bucket', err);
    }

    // if (data) {
    //   fs.unlinkSync(req.file.path); // Empty temp folder
    //   const locationUrl = data.Location;
    //   let newUser = new Business.Timeline({ ...req.body, file: locationUrl });
    //   newUser
    //     .save()
    //     .then(user => {
    //       res.json({ message: 'User created successfully', user });
    //     })
    //     .catch(err => {
    //       console.log('Error occured while trying to save to DB');
    //     });
    // }
  });

  pictureObject = {
    location: dynamicPath,
    name: req.file.fieldname + '-' + Date.now() +  path.extname(req.file.originalname)
  }

  let newTimelineItem = {
    age: req.body.age,
    animalType: req.body.animalType,
    title: req.body.title,
    picture: pictureObject != null ? JSON.stringify(pictureObject) : req.body.picture,
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
// businessRoutes.route('/api/timeline/new').post((req, res) => {
  
//   upload(req, res, (err) => {
//     if(err){
//       console.log(err);
//     } else {
//       pictureObject = {
//         location: req.file.destination,
//         name: req.file.filename
//       }

//       let newTimelineItem = {
//         age: req.body.age,
//         animalType: req.body.animalType,
//         title: req.body.title,
//         picture: pictureObject != null ? JSON.stringify(pictureObject) : req.body.picture,
//         subtitle: req.body.subtitle,
//         descriptionText: req.body.descriptionText,
//         infoItems: req.body.infoItems,
//         timelineIndex: req.body.timelineIndex,
//       }

//       let business = new Business.Timeline(newTimelineItem);
//       business.save()
//         .then(business => {
//             res.status(200).json({ 'timelineItem': 'added successfully' });
//         })
//         .catch(err => {
//             res.status(400).send("unable to be saved in database" + err);
//         });
//     }
//   });
// });


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
      res.status(200).json({'status': 'success', 'data': newTimelineItem});
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

businessRoutes
  .route('/api/timeline/new')
  .post(
    multer({ dest: 'temp/', limits: { fieldSize: 8 * 100024 * 100024 } }).single(
      'picture'
    ),
    uploadToS3
  );

module.exports = businessRoutes;
