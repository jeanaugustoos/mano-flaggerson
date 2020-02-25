const { STRING } = require('sequelize')
const cuid = require('cuid')

const attributes = {
  id: {
    type: STRING,
    primaryKey: true,
    allowNull: false,
    defaultValue: () => `ac_${cuid()}`,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
}

const create = (database) => database.define('Feature', attributes, {})

module.exports = {
  create,
}
