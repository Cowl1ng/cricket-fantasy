const express = require('express')
const router = express.Router()

// @route   GET api/seasons
// @desc    Get information about selection of leagues
// @access  Public


router.get('/', (req, res) => {
  res.send("GET seasons")
})



module.exports = router