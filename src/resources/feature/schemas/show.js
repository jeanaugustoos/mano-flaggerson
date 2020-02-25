const Joi = require('joi')

const schema = Joi.object().keys({
  key: Joi.string().required(),
  owner_id: Joi.string(),
})

module.exports = schema
