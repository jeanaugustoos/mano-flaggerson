const express = require('express')
const {
  authenticate,
  errorHandler,
  fillRequestId,
} = require('./middlewares')
const accountRouter = require('./resources/account/routes')
const featureRouter = require('./resources/feature/routes')

const app = express()

app.use(express.json())
app.use(fillRequestId)

app.get('/_health_check', (_, res) => res.json({ status: 'ok' }))

app.use(authenticate)

// app.use('/accounts', accountRouter)
app.use('/features', featureRouter)

app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log('Server running')
})
