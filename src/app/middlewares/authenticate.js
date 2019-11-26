const { ForbiddenError } = require('../errors')

const authenticate = (req, res, next) => {
  if (req.get('x-application-id') === 'foobar') {
    return next()
  }

  if (req.get('x-application-id') === 'admin-foobar') {
    req.isAdmin = true
    return next()
  }

  throw new ForbiddenError()
}

module.exports = authenticate
