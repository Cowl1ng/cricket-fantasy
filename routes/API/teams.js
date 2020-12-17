const express = require('express')
const router = express.Router()

// @route   GET api/teams
// @desc    Get information about selection of leagues
// @access  Public


router.get('/', (req, res) => {
  res.send("GET teams")
})



module.exports = router