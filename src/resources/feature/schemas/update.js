const Joi = require('joi')

const schema = Joi.object().keys({
  key: Joi.string().required(),
  value: Joi.boolean().required(),
})

module.exports = schema
