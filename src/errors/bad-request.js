class BadRequestError extends Error {
  constructor ({ errors }) {
    super()

    this.statusCode = 400
    this.body = {
      code: '0001',
      message: 'The server cannot or will not process the request due to something that is perceived to be a client error',
      details: errors,
    }
  }
}

module.exports = BadRequestError
