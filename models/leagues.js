const mongoose = require("mongoose")

const LeagueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
  },
  season_id: {
    type: Number,
  },
  country_id: {
    type: Number,
  },
  code: {
    type: String,
  },
  image: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const League = mongoose.model('League', LeagueSchema)
module.exports = League
