const { 
  BadRequestError,
  ForbiddenError,
} = require('../errors')

const errorHandler = (error, req, res, next) => {
  if (error instanceof ForbiddenError) {
    return res.status(error.statusCode).send(error.body)
  }

  if (error instanceof BadRequestError) {
    return res.status(error.statusCode).send(error.body)
  }

  console.log(error)

  return res.status(500).send({
    code: '0003',
    message: 'Internal server error'
  })
}

module.exports = errorHandler
