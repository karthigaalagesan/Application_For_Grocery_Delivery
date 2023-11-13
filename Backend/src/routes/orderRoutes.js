const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to get all orders
router.get('/', orderController.getAllOrders);

// Route to create a new order
router.post('/', orderController.createOrder);

module.exports = router;
