const router = require('express').Router()
const Voucher = require('../models/Voucher')

// create a voucher
router.post('/', async (req, res) => {
  try {
    const newVoucher = new Voucher(req.body)
    await newVoucher.save()
    res.status(201).json(newVoucher)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})

// edit or update a voucher
router.put('/:id', async (req, res) => {
  try {
    const voucher = await Voucher.findById(req.params.id)
    if (voucher) {
      await voucher.updateOne({ $set: req.body })
      res.status(200).send({ voucher, message: 'voucher updated successfully' })
    }
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})

// get all voucher list
router.get('/list', async (req, res) => {
  try {
    const vouchers = await Voucher.find({})
    const voucherTitles = vouchers.map(v => v.title)
    return res.status(200).json(voucherTitles)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})

// get a voucher detail
router.get('/:id', async (req, res) => {
  try {
    const voucher = await Voucher.findById(req.params.id)
    return res.status(200).json(voucher)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})


module.exports = router