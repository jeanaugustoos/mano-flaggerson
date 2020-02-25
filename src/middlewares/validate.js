const { BadRequestError } = require('../errors')

const validateEntity = schema => (req, _, next) => {
  try {
    const parameteres = req.body || req.params

    const { error } = schema.validate(
      parameteres,
      { abortEarly: false }
    )
    
    if (error) {
      throw new BadRequestError({ errors: error.details })
    }

    next()
  } catch (error) {
    next(error)
  }
}

module.exports = validateEntity
