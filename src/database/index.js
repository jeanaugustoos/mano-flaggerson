const dotenv = require('dotenv')

if (process.env.NODE_ENV === 'production' && process.env.DOTENV_PATH) {
  dotenv.config({ path: process.env.DOTENV_PATH })
}

const Sequelize = require('sequelize')
const config = require('../config/database')[process.env.NODE_ENV]
const rawModels = require('./models')

const defaults = {
  define: {
    underscored: true,
  },
}

const initializeDatabase = () => {
  const database = new Sequelize(Object.assign(
    {},
    defaults,
    config
  ))

  const createInstance = model => ({
    model,
    instance: model.create(database),
  })

  const associateModels = ({ model, instance }) => {
    if (model.associate) {
      model.associate(instance, database.models)
    }
  }

  Object.values(rawModels)
    .map(createInstance)
    .map(associateModels)

  return database
}

module.exports = initializeDatabase()