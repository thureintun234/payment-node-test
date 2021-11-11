# Node.js Payment API

Code test with nodejs

## Description

This is a payment api for online such as visa

### Dependencies

- Express
- Mongoose
- Helmat
- dotenv
- stripe
- cross-env
- nodemon

### Installing and Start

```
npm install
```

```
npm start
```

### API Endpoints

- http://localhost:3001/api/voucher/list (GET)
- http://localhost:3001/api/paylink (GET)
- http://localhost:3001/api/voucher/:id (GET)
- http://localhost:3001/api/checkout/orders (GET)
- http://localhost:3001/api/stripe/payment (GET)
- http://localhost:3001/api/purchase/history (GET)
- http://localhost:3001/api/voucher (POST)
- http://localhost:3001/api/checkout (POST)
- http://localhost:3001/api/voucher/:id (PUT)

### Stripe Usage

Go to the following [url](http://localhost:3001) and click checkout

- visa card (4242 4242 4242 4242) testing visa
