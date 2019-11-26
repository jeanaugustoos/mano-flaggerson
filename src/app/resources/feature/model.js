const { STRING } = require('sequelize')

const attributes = {
  application: {
    type: STRING,
    allowNull: false,
  },
  client_id: {
    type: STRING,
    allowNull: true,
  },
  feature: {
    type: STRING,
    allowNull: false,
  },
  value: {
    type: STRING,
    allowNull: false,
    defaultValue: 'false',
  },
}

const options = {
  indexes: [
    { fields: ['application', 'client_id'] },
    { fields: ['application', 'client_id', 'feature'] },
  ],
}

const create = (database) => database.define('Feature', attributes, options)

module.exports = {
  create,
}
