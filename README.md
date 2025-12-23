# SMRT Electronics - E-commerce Website

A full-stack e-commerce application built with Node.js, Express, MongoDB, and vanilla HTML/CSS/JavaScript.

## 📁 Project Structure

```
website/
├── frontend/              # Frontend files (HTML, CSS, JS, Images)
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript files
│   ├── images/           # Image assets
│   └── *.html            # HTML pages
├── backend/              # Backend server code
│   ├── config/           # Configuration files
│   │   └── database.js   # MongoDB connection
│   ├── models/           # MongoDB schemas
│   │   ├── Product.js    # Product model
│   │   ├── User.js       # User model
│   │   └── Order.js      # Order model
│   ├── routes/           # API route handlers
│   │   ├── products.js   # Product routes
│   │   ├── auth.js       # Authentication routes
│   │   └── orders.js     # Order routes
│   └── scripts/          # Database seeding scripts
│       ├── seedProducts.js
│       └── seedUser.js
├── server.js             # Main Express server
├── package.json          # Node.js dependencies
└── .gitignore           # Git ignore file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - Either:
  - **Local MongoDB** - [Download here](https://www.mongodb.com/try/download/community)
  - **MongoDB Atlas** (Cloud) - [Sign up here](https://www.mongodb.com/cloud/atlas)

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   
   Create a `.env` file in the root directory:
   ```env
   # For local MongoDB
   MONGODB_URI=mongodb://localhost:27017/smrt_ecommerce
   
   # For MongoDB Atlas (replace with your connection string)
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/smrt_ecommerce
   
   # Server port (optional, defaults to 8000)
   PORT=8000
   ```

3. **Start MongoDB** (if using local MongoDB)
   
   - **Windows**: MongoDB should start automatically as a service
   - **Mac/Linux**: `sudo systemctl start mongod` or `brew services start mongodb-community`

4. **Seed the Database**
   
   Populate the database with sample products and a test user:
   ```bash
   # Seed products
   node backend/scripts/seedProducts.js
   
   # Seed test user (email: test@example.com, password: password123)
   node backend/scripts/seedUser.js
   ```

5. **Start the Server**
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

6. **Open in Browser**
   
   Navigate to: `http://localhost:8000`

## 🔌 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID

### Authentication
- `POST /api/auth/login` - User login
  ```json
  {
    "email": "test@example.com",
    "password": "password123"
  }
  ```
- `POST /api/auth/register` - User registration (bonus feature)
  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "name": "John Doe"
  }
  ```

### Orders
- `POST /api/orders` - Create a new order
  ```json
  {
    "userId": "user_id_here",
    "productId": "product_id_here",
    "productName": "Product Name",
    "quantity": 2,
    "unitPrice": 1000,
    "totalPrice": 2000
  }
  ```
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get order by ID

## 🗄️ Database Models

### Product
- `name` (String, required)
- `price` (Number, required)
- `originalPrice` (Number, optional)
- `description` (String, required)
- `image` (String, required)
- `info` (Array of Strings)
- `category` (String, default: "electronics")
- `stock` (Number, default: 100)
- `onSale` (Boolean, default: false)

### User
- `email` (String, required, unique)
- `password` (String, required, hashed with bcrypt)
- `name` (String, optional)

### Order
- `user` (ObjectId, reference to User)
- `product` (ObjectId, reference to Product)
- `productName` (String, required)
- `quantity` (Number, required)
- `unitPrice` (Number, required)
- `totalPrice` (Number, required)
- `status` (String, enum: ["pending", "completed", "cancelled"])

## 📝 Features

### ✅ Implemented
- ✅ Express server serving static HTML files
- ✅ MongoDB connection and schemas (Products, Users, Orders)
- ✅ Product API endpoint (GET /api/products/:id)
- ✅ Real user authentication with database verification
- ✅ Order saving to database when payment is completed
- ✅ Backward compatibility with old URL parameter format

### 🔄 Frontend Changes
- **product.html**: Now fetches product data from API using product ID
- **login.html**: Verifies credentials against MongoDB database
- **payment.html**: Saves orders to database when payment is completed

## 🧪 Testing the Application

1. **Test Login**
   - Go to `http://localhost:8000/login.html`
   - Use credentials: `test@example.com` / `password123`

2. **View Products**
   - Navigate to `http://localhost:8000/products.html`
   - Click on any product to view details (will use API if product ID is available)

3. **Complete an Order**
   - View a product detail page
   - Click "Buy Now"
   - Complete the payment form
   - Order will be saved to the database

## 🛠️ Dependencies

### Production Dependencies
- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling for Node.js
- **bcryptjs**: Password hashing library
- **dotenv**: Environment variable management
- **cors**: Cross-Origin Resource Sharing middleware

### Development Dependencies
- **nodemon**: Auto-restart server during development

## 📚 Why These Dependencies?

- **Express**: Provides robust routing, middleware support, and static file serving capabilities
- **Mongoose**: Simplifies MongoDB operations with schema validation and easy queries
- **bcryptjs**: Securely hashes passwords before storing them in the database (never store plain text passwords!)
- **dotenv**: Allows you to keep sensitive configuration (like database connection strings) separate from code
- **cors**: Enables your frontend to make API requests from different origins (important for production deployments)

## 🔐 Security Notes

- Passwords are hashed using bcrypt before storage
- Environment variables are used for sensitive configuration
- Input validation is performed on API endpoints

## 🐛 Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running (local) or connection string is correct (Atlas)
- Check that the `MONGODB_URI` in `.env` is correct

### Products Not Loading
- Run the seed script: `node backend/scripts/seedProducts.js`
- Check browser console (F12) for API errors

### Login Not Working
- Make sure you've seeded a test user: `node backend/scripts/seedUser.js`
- Check that the password is correct (default: `password123`)

### Port Already in Use
- Change the `PORT` in `.env` file
- Or stop the process using port 8000

## 📄 License

ISC

## 👤 Author

SMRT Electronics
