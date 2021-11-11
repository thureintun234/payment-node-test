const express = require('express')
const app = express()
require('dotenv').config()
const helmet = require('helmet')
const mongoose = require('mongoose')
const voucherRouter = require('./routes/vouchers')
const checkoutRouter = require('./routes/checkout')
const stripeRouter = require('./routes/stripe')
const paymentLinkRouter = require('./routes/paymentLink')

// middlewares
app.use(helmet())
app.use(express.json())

// db
const url = process.env.MONGODB_URI
mongoose.connect(url)
  .then(() => console.log('connected mongodb successfully'))
  .catch(err => console.error('error in connecting mongodb', err))

// routes
app.use(express.static('public'))
app.use('/api/voucher', voucherRouter)
app.use('/api/checkout', checkoutRouter)
app.use('/api/stripe', stripeRouter)
app.use('/api/paylink', paymentLinkRouter)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})