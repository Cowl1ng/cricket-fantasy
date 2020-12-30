const express = require('express')
const router = express.Router()
const axios = require('axios')

// @route   GET api/fixtures
// @desc    Get information about selection of leagues
// @access  Public


router.get('/', async (req, res) => {
  try {
    const {filterKey, filterValue} = req.query
    console.log(`Key: ${filterKey}`)
    console.log(`Value: ${filterValue}`)
    const response = await axios.get(`https://cricket.sportmonks.com/api/v2.0/fixtures?api_token=${process.env.API_TOKEN}&include=localteam,visitorteam,bowling.bowler,batting.result,lineup,balls&filter[${filterKey}]=${filterValue}`)
    console.log(`RES: ${JSON.stringify(response.data)}`)
  } catch (error) {
   // Internal server error status
   res.sendStatus(500)
   console.log(`${error}`) 
  }
})



module.exports = router