const express = require('express')
const router = express.Router()
const axios = require('axios')

const League = require('../../models/leagues')

// @route   GET sportsmonk/leagues
// @desc    Get information about all available leagues from sportsmonk
// @access  Public


router.get('/', async (req, res) => {
  try {
  // Get leagues from API & put relevant data into leaguess variable
  const response = await axios.get(`https://cricket.sportmonks.com/api/v2.0/leagues?api_token=${process.env.API_TOKEN}&include=seasons`)
  const leagues = response.data.data

  // Loop through leagues and update or add (when needed) to db
  for (const league of leagues) {
      await League.updateOne({id: league.id}, {
      name: league.name,
      current_season_id: league.season_id,
      code: league.code,
      image_path: league.image_path
    }, {upsert: true})
  }
  
  // Send saved leagues as json object
  res.json(leagues)
  } catch (error) {
    // Internal server error status
    res.sendStatus(500)
    console.log(`${error}`)
  }

})



module.exports = router