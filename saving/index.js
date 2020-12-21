const express = require('express')
const helmet = require('helmet')
const mongoose = require('mongoose')
require('dotenv').config()


//DB config
const db = require('./config/keys').MongoURI


mongoose.connect(db , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err))


const app = express()

app.use(helmet())

// Bring in router modules
// My API routes (back-end to front-end)
const APIleagues = require('./routes/API/leagues')
const APIseasons = require('./routes/API/seasons')
const APIteams = require('./routes/API/teams')
const APIfixtures = require('./routes/API/fixtures')
const APIplayers = require('./routes/API/players')

// Sportsmonk API routes (getting info from sportsmonk)
const SMleagues = require('./routes/Sportsmonk/leagues')
const SMseasons = require('./routes/Sportsmonk/seasons')
const SMteams = require('./routes/Sportsmonk/teams')
const SMfixtures = require('./routes/Sportsmonk/fixtures')
const SMplayers = require('./routes/Sportsmonk/players')


app.use('/api/leagues', APIleagues)
app.use('/api/seasons', APIseasons)
app.use('/api/teams', APIteams)
app.use('/api/fixtures', APIfixtures)
app.use('/api/players', APIplayers)



app.use('/sportsmonk/leagues', SMleagues)
app.use('/sportsmonk/seasons', SMseasons)
app.use('/sportsmonk/teams', SMteams)
app.use('/sportsmonk/fixtures', SMfixtures)
app.use('/sportsmonk/players', SMplayers)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {console.log(`Server on port ${PORT}`)})
