const express = require('express')
const router = express.Router()
const axios = require('axios')

const League = require('../../models/leagues')

// @route   GET sportsmonk/leagues
// @desc    Get information about selection of leagues
// @access  Public


router.get('/', async (req, res) => {
  const {filter} = req.query
  console.log(`API_KEY: ${process.env.API_TOKEN}`)
  console.log(`Filter: ${filter}`)
  const response = await axios.get(`https://cricket.sportmonks.com/api/v2.0/leagues?api_token=${process.env.API_TOKEN}`)

  const leagues = response.data.data.map(league => {
    return {name: league.name, id: league.id, season_id: league.season_id, code: league.code, image: league.image_path}
    
    // const container = {name: league.name, id: league.id, season_id: league.season_id, code: league.code, image: league.image_path}
    // return container
  })
  console.log(`Response: ${JSON.stringify(response.data.data)}`)
  console.log(`db: ${JSON.stringify(leagues)}`)

  for (const league of leagues) {
    const document = 
  }
  
  try {
    const res = League.updateMany({id: leagues.id}, {$set: leagues}, {upssert: true}, (error, docs) => {
      console.log(`RES: ${JSON.stringify(res.nModified)}`)
    }) 
    console.log(`RES: ${JSON.stringify(res.nModified)}`)
  } catch (error) {
    console.log(error)
  }
  

  res.send("GET Sportsmonk  league")
})



module.exports = router