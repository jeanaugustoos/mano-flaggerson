const { ForbiddenError } = require('../errors')

const admin = (req, res, next) => {
  if (req.isAdmin) {
    return next()
  }

  throw new ForbiddenError()
}

module.exports = admin
