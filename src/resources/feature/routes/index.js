const express = require('express')
const validate = require('../../../middlewares/validate')
const controllers = require('../controllers')
const schemas = require('../schemas')

const router = express.Router()

router.post(
  '/',
  validate(schemas.create),
  controllers.create
)

router.patch(
  '/:id',
  validate(schemas.update),
  controllers.update
)

router.get(
  '/',
  validate(schemas.list),
  controllers.list
)

router.get(
  '/:id',
  validate(schemas.show),
  controllers.show
)

module.exports = router
