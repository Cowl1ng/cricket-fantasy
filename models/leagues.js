const mongoose = require("mongoose")

// The seasons are a subdocument in the leagues schema but fixures are and array of ObjectID references as other things will need access to them

const SeasonSchema = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    required: true,
  },
  code: String,
  fixtures: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fixture'
  }]
})

const LeagueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  current_season_id: {
    type: Number,
    required: true,
  },
  seasons: [ SeasonSchema ],
  country_id: {
    type: Number,
  },
  code: String,
  image_path: String,
  date: {
    type: Date,
    default: Date.now
  }
})

const League = mongoose.model('League', LeagueSchema)
module.exports = League
