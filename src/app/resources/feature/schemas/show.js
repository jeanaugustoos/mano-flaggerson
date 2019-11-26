const Joi = require('joi')

const schema = Joi.object().keys({
  key: Joi.string().required(),
})

module.exports = schema
