const Joi = require('joi')

const schema = Joi.object().keys({
  account_id: Joi.string().required(),
  owner_id: Joi.string(),
  key: Joi.string().required(),
  value: Joi.boolean().required(),
})

module.exports = schema
