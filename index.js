const express = require('express')
const mongoose = require('mongoose')
const { mongoURI } = require('./config/keys')

const UsersRoute = require('./routes/api/users')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/users', UsersRoute)

mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
  console.log('***mongoose connected***')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})