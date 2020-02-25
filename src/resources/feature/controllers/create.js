const featureService = require('../services')
const featurePresenter = require('../presenters')

async function create (req, res) {
  try {
    const feature = await featureService.create(req.body)

    const response = featurePresenter.create(feature)

    return res.status(201).send(response)
  } catch (error) {
    throw error
  }
}

module.exports = create
