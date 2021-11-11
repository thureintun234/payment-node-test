const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_KEY)
const Order = require('../models/Order')

router.post('/payment', async (req, res) => {
  const orders = await Order.find({})
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: orders.map(item => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name
          },
          unit_amount: item.voucherCode ?
            ((item.amount * 100) - (item.amount * 100) * (10 / 100)) :
            item.amount * 100
        },
        quantity: item.quantity
      }
    }),
    mode: 'payment',
    success_url: `${process.env.SERVER_URL}/success.html`,
    cancel_url: `${process.env.SERVER_URL}/cancel.html`,
  })
  res.redirect(303, session.url)
})

module.exports = router