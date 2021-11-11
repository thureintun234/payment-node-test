const router = require('express').Router()


router.get('/', (req, res) => {
  const link = process.env.PAYMENT_METHOD_LINK
  res.send(`<a href='${link}' target='_blank'>payment</a>`)
})

module.exports = router