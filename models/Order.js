const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  voucherCode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Voucher'
  }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)