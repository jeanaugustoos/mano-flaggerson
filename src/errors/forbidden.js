class ForbiddenError extends Error {
  constructor () {
    super()

    this.statusCode = 403
    this.body = {
      code: '0002',
      message: `You're not allowed to perform this action`
    }
  }
}

module.exports = ForbiddenError
