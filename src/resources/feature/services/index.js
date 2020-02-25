const database = require('../../../database')
const { Feature } = database.models

async function create (featurePayload) {
  try {
    const feature = await Feature.create(featurePayload)

    return feature
  } catch (error) {
    throw error
  }
}

module.exports = {
  create
}