// Run from project root: node backend/scripts/seedUser.js
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const connectDB = require('../config/database');

// Sample user for testing
const sampleUser = {
  email: "test@example.com",
  password: "password123", // Will be hashed automatically by the schema
  name: "Test User"
};

async function seedUser() {
  try {
    await connectDB();
    
    // Check if user already exists
    const existingUser = await User.findOne({ email: sampleUser.email });
    if (existingUser) {
      console.log('⏭️  User already exists:', sampleUser.email);
      console.log('   Email: test@example.com');
      console.log('   Password: password123');
      process.exit(0);
      return;
    }

    // Create sample user
    const user = await User.create(sampleUser);
    console.log('✅ Created test user:');
    console.log('   Email: test@example.com');
    console.log('   Password: password123');
    console.log('   ID:', user._id);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding user:', error);
    process.exit(1);
  }
}

seedUser();
