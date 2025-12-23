const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Product = require('../models/Product');

// POST /api/orders - Create a new order
router.post('/', async (req, res) => {
  try {
    const { userId, productId, quantity, productName, unitPrice, totalPrice } = req.body;

    // Validate required fields
    if (!userId || !productId || !quantity || !productName || !unitPrice || !totalPrice) {
      return res.status(400).json({ 
        error: 'Missing required fields: userId, productId, quantity, productName, unitPrice, totalPrice' 
      });
    }

    // Verify product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Create order
    const order = new Order({
      user: userId,
      product: productId,
      productName,
      quantity,
      unitPrice,
      totalPrice,
      status: 'completed' // Since payment was successful
    });

    await order.save();

    res.status(201).json({ 
      success: true, 
      message: 'Order created successfully',
      order 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/orders - Get all orders (optional - for admin use)
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'email name')
      .populate('product', 'name price image')
      .sort({ createdAt: -1 });
    
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/orders/:id - Get order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'email name')
      .populate('product', 'name price image');
    
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

