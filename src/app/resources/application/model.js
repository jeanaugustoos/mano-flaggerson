const dynamoose = require('dynamoose')

const model = dynamoose.model('Application', {
  key: String,
  value: String,
})

module.exports = model
