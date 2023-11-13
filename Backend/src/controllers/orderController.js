const Order = require('../models/Order');

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('products', 'name price');
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { userId, products, totalPrice } = req.body;
    const newOrder = new Order({ userId, products, totalPrice });
    await newOrder.save();
    res.status(201).json({ order: newOrder });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
