const router = require('express').Router()
const Order = require('../models/Order')

router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body)

    const savedOrder = await order.save()
    return res.status(200).json(savedOrder)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})

router.get('/orders', async (req, res) => {
  const orders = await Order.find({}).populate({ path: 'voucherCode' })
  res.json(orders)
})

module.exports = router