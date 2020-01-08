const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  let TimelineSchema = new Schema({
    age: { type: String },
    animalType: { type: String },
    title: { type: String },
    picture: { type: Object },
    subtitle: { type: String },
    descriptionText: { type: String },
    infoItems: { type: String },
    timelineIndex: { type: String },
  }, {
        collection: 'timeline'
    });

module.exports = {Timeline: mongoose.model('Timeline', TimelineSchema)};