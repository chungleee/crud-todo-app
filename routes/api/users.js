const express = require('express')
const router = express.Router()

const User = require('../../models/User')

router.get('/test', (req, res) => {
  res.json({
    message: 'users test route works'
  })
})

module.exports = router