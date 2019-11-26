const { ForbiddenError } = require('../errors')

const errorHandler = (error, req, res, next) => {
  if (error instanceof ForbiddenError) {
    return res.status(error.statusCode).send(error.body)
  }

  console.fatal(error.message)

  return res.status(500).send({
    code: '0003',
    message: 'Internal server error'
  })
}

module.exports = errorHandler
