require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const connectDB = require('../config/database');

// Sample products based on your existing HTML
const sampleProducts = [
  {
    name: "Round Mini Portable Bluetooth Speaker",
    price: 1199,
    description: "Portable Bluetooth Speaker, Black Mesh Fabric, Wireless Audio Device with Red Logo, Cylindrical Design, Small and lightweight for easy portability, allowing you to take it wherever you go.",
    image: "c22c23_d4488c12f2bc40dfbd1bbd82956eb97a~mv2.avif",
    info: ["24.2MP APS-C sensor", "4K video recording", "Lightweight body"],
    category: "electronics",
    stock: 50
  },
  {
    name: "Fire-Boltt Ninja Call Pro Max Smart Watch",
    price: 1299,
    originalPrice: 2000,
    description: "Fire-Boltt Ninja Call Pro Max Smart Watch 2.01 inch Display, Bluetooth Calling, 120+ Sports Modes, Health Suite, Voice Assistance (Black)",
    image: "c22c23_4567980aa0eb4bfba21b3706eaa8b2ca~mv2.avif",
    info: ["24.2MP APS-C sensor", "4K video recording", "Lightweight body"],
    category: "electronics",
    stock: 30,
    onSale: true
  },
  {
    name: "Arcnet 3D VR Headset Virtual Reality Headset",
    price: 9499,
    description: "Arcnet 3D VR Headset Virtual Reality Headset with in Buit Headphones with 3.5mm Aux Jack Gift for Kids Virtual Reality Goggles for Games,Videos & Movies Compatible for All Android & iOS Smartphones",
    image: "c22c23_991175ea1f9140648365694757467456~mv2.avif",
    info: ["24.2MP APS-C sensor", "4K video recording", "Lightweight body"],
    category: "electronics",
    stock: 25
  },
  {
    name: "Canon EOS R50 V Mirrorless Camera",
    price: 72999,
    description: "Canon EOS R50 RF-S18-45mm f/4.5-6.3 is STM Mirrorless Camera (Black)- 4K Video Vlogging with 24.2 MP, Full frame CMOS AF II Sensor with 24.2 MP,DIGIC X with 651 autofocus points,WiFi, NFC and Bluetooth built-in",
    image: "c22c23_3fd6a46235b34d158ce2ad1628900bb2~mv2.avif",
    info: ["24.2MP APS-C sensor", "4K video recording", "Lightweight body"],
    category: "electronics",
    stock: 15
  },
  {
    name: "DJI Mavic 3 Thermal Ultra Reta Drone",
    price: 84999,
    description: "DJI Mavic 3 - Camera Drone with 4/3 CMOS Hasselblad Camera, 5.1K Video, Omnidirectional Obstacle Sensing, 46-Min Flight, RC Quadcopter with Advanced Auto Return, Max 15km Video Transmission",
    image: "c22c23_2d5a87c251274b8083356fd1e61cf68d~mv2.avif",
    info: ["24.2MP APS-C sensor", "4K video recording", "Lightweight body"],
    category: "electronics",
    stock: 10
  },
  {
    name: "Apple MacBook Air Laptop with M2 chip",
    price: 74549,
    originalPrice: 92940,
    description: "Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Midnight",
    image: "istockphoto-1394988455-612x612.jpg",
    info: ["24.2MP APS-C sensor", "4K video recording", "Lightweight body"],
    category: "electronics",
    stock: 20,
    onSale: true
  },
  {
    name: "Crossbeats Lumex Projector 4k Ultra",
    price: 8499,
    description: "Crossbeats Lumex Cine Smart Home Projector 4k Ultra HD, Native 1080p, Mini Projector for Room,16000 Lumens Android OS, Built-in - Netflix, Prime, YouTube, Portable, Speaker, WiFi, 300 Display Cinema",
    image: "c22c23_4fc66d5377a64a80a4c5a303bf338a5d~mv2.avif",
    info: ["24.2MP APS-C sensor", "4K video recording", "Lightweight body"],
    category: "electronics",
    stock: 35
  },
  {
    name: "iPhone 16 128 GB: 5G Mobile Phone",
    price: 62549,
    description: "iPhone 16 Pro 128 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Natural Titanium",
    image: "apple-iphone-16-white-isolated-white-background_570051-851.avif",
    info: ["24.2MP APS-C sensor", "4K video recording", "Lightweight body"],
    category: "electronics",
    stock: 40
  }
];

async function seedProducts() {
  try {
    await connectDB();
    
    // Clear existing products (optional - comment out if you want to keep existing data)
    // await Product.deleteMany({});
    // console.log('✅ Cleared existing products');

    // Insert sample products
    for (const product of sampleProducts) {
      const existingProduct = await Product.findOne({ name: product.name });
      if (!existingProduct) {
        await Product.create(product);
        console.log(`✅ Added product: ${product.name}`);
      } else {
        console.log(`⏭️  Product already exists: ${product.name}`);
      }
    }

    console.log('\n✅ Product seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding products:', error);
    process.exit(1);
  }
}

seedProducts();

