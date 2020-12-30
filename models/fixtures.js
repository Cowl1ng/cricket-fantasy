const mongoose = require("mongoose")

const FixtureSchema = new mongoose.Schema({
  id: Number,
  fantasy_gameweek: Number,
  localteam: [{
    id: Number,
    name: String,
    lineup: [{type: mongoose.Schema.Types.ObjectId, ref: 'Player'}]
  }],
  visitorteam: [{
    id: Number,
    name: String,
    lineup: [{type: mongoose.Schema.Types.ObjectId, ref: 'Player'}]
  }],
  start_time: Date,
  type: String, 
  status: String,
  venue_id : Number,
  toss_winning_team_id : Number,
  elected : String,
  winning_team_id : Number,
  draw_noresult : Boolean,
  man_of_the_match_id : Number,
  player_stats: [{
    player_id: Number,
    team_id: Number,
    man_of_the_match: Boolean,
    batting_stats: {
      order: Number,
      active: Boolean,
      balls: Number,
      score: Number,
      four_x: Number,
      six_x: Number,
      wicket_id: Number, // How they got out called score_id on SM
      bowling_player_id: Number,
      fielding_player_id: Number, // Who caught/stumped them catch_stump_player_id on SM
      fow_score: Number,
      fow_balls: Number,
      rate: {
        type: Number,
        default: () => {
          return this.score * 100 / this.balls
        }
      },
      batsmanout_id: Number, // Not sure what this is from SM, maybe to do with runouts
      fantasy: {
        smart_rate: Number,
        not_out: Boolean,
      }
    },
    bowling_stats: {
      active: Boolean,
      overs: Number,
      maidens: Number, // called medians on SM
      runs: Number,
      wickets: Number,
      noballs: Number,
      dotballs: {type: Number, default: 0},
      rate: {
        type: Number,
        default: () => {
          return this.score / (Math.floor(this.overs) * 6 + (this.overs - Math.floor(this.overs)) * 10)
        }
      },
      fantasy: {
        wickets_t4: Number, // Wickets of top 4 batsmen
      }     
    },
    fielding_stats: {
      catches: {type: Number, default: 0},
      stumpings: {type: Number, default: 0},
      run_out: {type: Number, default: 0},
      LBWs: {type: Number, default: 0},
    },
}],
balls: [{
  id: Number,
  team_id: Number,
  ball: Number,
  batsman_1_id: Number,
  batsman_2_id: Number,
  bowler_id: Number,
  score_id: Number,
  score: {
    id: Number,
    name: String,
    batsman_out_id: Number,
    catch_stump_id: Number,
    runs: Number,
    four: Boolean,
    six: Boolean,
    bye: Number,
    leg_bye: Number,
    noball: Number,
    noball_runs: Number,
    wicket: Boolean,
    ball: Boolean,
  }  
}]



  
  
  
})


const Fixture = mongoose.model('Fixture', FixtureSchema)
module.exports = Fixture