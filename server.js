require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./backend/config/database');

// Import routes
const productRoutes = require('./backend/routes/products');
const authRoutes = require('./backend/routes/auth');
const orderRoutes = require('./backend/routes/orders');

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from frontend directory
app.use(express.static(path.join(__dirname, 'frontend')));

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

// Default route - serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log('\n========================================');
  console.log('   SMRT Electronics - E-commerce Server');
  console.log('========================================');
  console.log(`\n✅ Server running at http://localhost:${PORT}`);
  console.log(`\n📁 Static files served from: frontend/`);
  console.log(`\n🔌 API Endpoints:`);
  console.log(`   GET  /api/products        - Get all products`);
  console.log(`   GET  /api/products/:id    - Get product by ID`);
  console.log(`   POST /api/auth/login      - User login`);
  console.log(`   POST /api/auth/register   - User registration`);
  console.log(`   POST /api/orders          - Create order`);
  console.log(`   GET  /api/orders          - Get all orders`);
  console.log(`\n🌐 Open in your browser:`);
  console.log(`   http://localhost:${PORT}/`);
  console.log(`   http://localhost:${PORT}/electronics.html`);
  console.log(`   http://localhost:${PORT}/login.html`);
  console.log(`\nPress Ctrl+C to stop the server\n`);
});