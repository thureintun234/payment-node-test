const mongoose = require('mongoose')

const onlyMeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Name: {
    type: String,
    required: true
  },
  PhoneNo: {
    type: String,
    required: true,
    min: 9,
    max: 11
  },
  MaxLimitBuy: {
    type: Number,
    required: true
  }
})

const giftSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Name: {
    type: String,
    required: true
  },
  PhoneNo: {
    type: String,
    required: true,
    min: 9,
    max: 11
  },
  GiftUserLimit: {
    type: Number,
    required: true
  },
  MaxLimitBuy: {
    type: Number,
    required: true
  }
})

const voucherSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  describtion: {
    type: String,
    default: '',
    max: 200
  },
  expireDate: {
    type: Date,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ['Visa', 'Paypal'],
    default: 'Visa'
  },
  paymentMethodDiscount: {
    type: String,
    enum: ['Visa', 'Paypal'],
    default: 'Visa'
  },
  quantity: {
    type: Number,
    default: 1
  },
  onlyMePayment: [onlyMeSchema],
  giftOtherPayment: [giftSchema]
}, {
  timestamps: true,
})

module.exports = mongoose.model('Voucher', voucherSchema)