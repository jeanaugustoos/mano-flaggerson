const express = require('express')
const morgan = require('morgan')
const {
  admin,
  authenticate,
  errorHandler,
  fillRequestId,
} = require('./middlewares')
const featureRouter = require('./resources/feature/routes')
const applicationRouter = require('./resources/application/routes')

morgan.token('x-request-id', req => req.id)

const app = express()

app.use(express.json())
app.use(fillRequestId)
app.use(morgan(':method :url :x-request-id'))

app.use(authenticate)

app.use('/features', featureRouter)
app.use('/applications', admin, applicationRouter)

app.use(errorHandler)

app.listen(3000, (error) => {
  console.log('Server running')
})
