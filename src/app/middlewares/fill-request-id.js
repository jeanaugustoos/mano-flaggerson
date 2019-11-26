const cuid = require('cuid')

module.exports = (req, res, next) => {
  req.id = cuid()
  next()
}
