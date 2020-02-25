const { STRING } = require('sequelize')
const cuid = require('cuid')

const attributes = {
  id: {
    type: STRING,
    primaryKey: true,
    allowNull: false,
    defaultValue: () => `ft_${cuid()}`,
  },
  account_id: {
    type: STRING,
    allowNull: false,
  },
  owner_id: {
    type: STRING,
    allowNull: true,
  },
  key: {
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
    { fields: ['account_id'] },
    { fields: ['account_id', 'key'] },
    { fields: ['account_id', 'owner_id'] },
    { fields: ['account_id', 'owner_id', 'key'] },
  ],
}

const create = (database) => database.define('Feature', attributes, options)

module.exports = {
  create,
}
