const Joi = require('joi')
const { BadRequestError } = require('../errors/bad-request')

const validateEntity = schema = entity => {
  const { value, error } = Joi.validate(
    entity,
    schema,
    { abortEarly: false }
  )

  if (error) {
    throw new BadRequestError({ errors: error.details })
  }

  return value
}

module.exports = validateEntity
