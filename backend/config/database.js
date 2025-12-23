const mongoose = require('mongoose');

// MongoDB connection string - defaults to localhost if not provided
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/smrt_ecommerce';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

