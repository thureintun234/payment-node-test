const router = require('express').Router()
const Order = require('../models/Order')

router.post('/', async (req, res, next) => {
  try {
    const order = new Order(req.body)

    const savedOrder = await order.save()
    return res.status(200).json(savedOrder)
  } catch (error) {
    next(error)
  }
})

router.get('/orders', async (req, res, next) => {
  try {
    const orders = await Order.find({}).populate({ path: 'voucherCode' })
    res.json(orders)
  } catch (error) {
    next(error)
  }
})

module.exports = router