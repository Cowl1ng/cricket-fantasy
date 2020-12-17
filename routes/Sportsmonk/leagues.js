const express = require('express')
const router = express.Router()

// @route   GET api/leagues
// @desc    Get information about selection of leagues
// @access  Public


router.get('/', (req, res) => {
  res.send("GET Sportsmonk  league")
})



module.exports = router