const { pick } = require('ramda')

const create = pick([
  'owner_id',
  'key',
  'value',
  'created_at',
  'updated_at',
])

module.exports = {
  create
}