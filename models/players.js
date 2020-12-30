const mongoose = require('mongoose')

// Seasonschema contains players historcial stats for each tournament they played in
const SeasonSchema = new mongoose.Schema({
  id: Number,
  bowling:  {
    matches: Number,
    innings: Number,
    overs: Number,
    maidens: Number, // called medians on SM
    runs: Number,
    average: {
      type: Number,
      default: () => {
        return this.runs / this.innings
      }
    },
    wickets: Number,
    noballs: Number,
    dotballs: {type: Number, default: 0},
    rate: {
      type: Number,
      default: () => {
        return this.runs / (Math.floor(this.overs) * 6 + (this.overs - Math.floor(this.overs)) * 10)
      }
    },
    four_wickets: Number,
    five_wicketts: Number,
    ten_wickets: Number,
  },
  batting: {
    matches: Number,
    innings: Number,
    balls: Number,
    runs: Number,
    not_outs: Number,
    highest_score: Number,
    four_x: Number,
    six_x: Number,
    hundreds: Number,
    fifties: Number,
    fow_score: Number,
    fow_balls: Number,

    rate: {
      type: Number,
      default: () => {
        return this.score / this.balls
      }
    },
  },
  fielding_stats: {
    matches: Number,
    innings: Number,
    catches: {type: Number, default: 0},
    stumpings: {type: Number, default: 0},
    run_out: {type: Number, default: 0},
    LBWs: {type: Number, default: 0},
  }
})

const PlayerSchema = new mongoose.Schema({
  id: Number,
  country_id: Number,
  first_name: String,
  last_name: String,
  full_name: String,
  image_URL: String,
  dob: String,

  career_stats: [SeasonSchema]
})

const Player = mongoose.model('Player', PlayerSchema)
module.exports = Player