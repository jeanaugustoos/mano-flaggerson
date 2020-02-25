const cuid = require('cuid')

module.exports = (req, _, next) => {
  req.id = cuid()
  next()
}
