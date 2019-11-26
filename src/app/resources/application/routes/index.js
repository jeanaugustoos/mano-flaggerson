const express = require('express')
const validate = require('../../../middlewares/validate')
const controllers = require('../controllers')
const schemas = require('../schemas')

const router = express.Router()

router.post(
  '/',
  controllers.create
)

module.exports = router
