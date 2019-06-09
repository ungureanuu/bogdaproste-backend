const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
    brand_name: {
        type: String
    },
    brand_description: {
        type: String
    },
    user_email: {
        type: String
    },
    user_phone: {
        type: String
    }
}, {
        collection: 'business'
    });

let Survey = new Schema({
    quality: {
        type: Object
    },
    email: {
        type: String
    },
    price: {
        type: String
    },
    price_to_competitors: {
        type: String
    },
    price_limit: {
        type: Object
    },
    satisfaction: {
        type: Number
    },
    suggestions: {
        type: String
    }
});

let SurveySchema = new Schema({
  sex: {
      type: Number
  },
  age: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  agreement: {
    type: Number
  },
  date: {
    type: Date
  },
}, {
      collection: 'volunteers'
  });

module.exports = mongoose.model('Surveys', SurveySchema);
