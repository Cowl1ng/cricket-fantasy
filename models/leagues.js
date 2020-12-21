const mongoose = require("mongoose")

const LeagueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
  },
  current_season_id:{
    type: Number,
  },
  season_ids: {
    type: Array,
  },
  country_id: {
    type: Number,
  },
  code: {
    type: String,
  },
  image_path: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const League = mongoose.model('League', LeagueSchema)
module.exports = League
