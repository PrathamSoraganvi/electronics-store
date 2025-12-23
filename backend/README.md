# Backend

Backend server code, APIs, and database configurations for SMRT Electronics e-commerce platform.

## Structure

```
backend/
├── config/
│   └── database.js          # MongoDB connection configuration
├── models/                  # Mongoose schemas
│   ├── Product.js          # Product model
│   ├── User.js             # User model (with password hashing)
│   └── Order.js            # Order model
├── routes/                  # Express route handlers
│   ├── products.js         # Product CRUD operations
│   ├── auth.js             # Authentication (login/register)
│   └── orders.js           # Order creation and retrieval
└── scripts/                # Database seeding scripts
    ├── seedProducts.js     # Populate products
    └── seedUser.js         # Create test user
```

## Features Implemented

✅ **User Authentication**
- User login with database verification
- User registration (bonus feature)
- Password hashing with bcrypt

✅ **Product Management**
- Get all products
- Get product by ID
- Products stored in MongoDB

✅ **Order Processing**
- Create orders when payment is completed
- Store order details (user, product, quantity, prices)
- Order retrieval endpoints

## API Routes

See main README.md for complete API documentation.





