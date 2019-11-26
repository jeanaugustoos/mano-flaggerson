class UnauthorizedError extends Error {
  constructor () {
    super()

    this.statusCode = 401
    this.body = {
      code: '0004',
      message: `You're not allowed to perform this action`
    }
  }
}

module.exports = UnauthorizedError
