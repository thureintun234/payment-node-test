const router = require('express').Router()
const Order = require('../models/Order')

router.get('/history', async (req, res, next) => {
  try {
    const orders = await Order.find({})
    if (orders[0].voucherCode) {
      return res.send({ orders, voucherCode: orders[0].voucherCode })
    }
    res.json(orders)
  } catch (error) {
    next(error)
  }
})

module.exports = router