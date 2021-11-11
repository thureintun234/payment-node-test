const config = require('./utils/config')
const express = require('express')
const app = express()
const voucherRouter = require('./routes/vouchers')
const checkoutRouter = require('./routes/checkout')
const stripeRouter = require('./routes/stripe')
const paymentLinkRouter = require('./routes/paymentLink')
const purchaseHistoryRouter = require('./routes/purchaseHistorys')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const helmet = require('helmet')

logger.info('connectiong to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to mongodb')
  })
  .catch(err => {
    logger.error('error connecting to mongodb', err.message)
  })

// middlewares
app.use(express.static('public'))
app.use(express.json())
app.use(middleware.requestLogger)
app.use(helmet())

// routes
app.use(express.static('public'))
app.use('/api/voucher', voucherRouter)
app.use('/api/checkout', checkoutRouter)
app.use('/api/stripe', stripeRouter)
app.use('/api/paylink', paymentLinkRouter)
app.use('/api/purchase', purchaseHistoryRouter)

// validation middlewares
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app