const express = require('express')
const router = express.Router()

// @route   GET api/players
// @desc    Get information about selection of leagues
// @access  Public


router.get('/', (req, res) => {
  res.send("GET players")
})



module.exports = router