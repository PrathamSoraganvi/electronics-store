# Quick Setup Guide

Follow these steps to get your e-commerce backend up and running:

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up MongoDB

### Option A: Local MongoDB
1. Download and install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. Create `.env` file with:
   ```env
   MONGODB_URI=mongodb://localhost:27017/smrt_ecommerce
   PORT=8000
   ```

### Option B: MongoDB Atlas (Cloud)
1. Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Create `.env` file with:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/smrt_ecommerce
   PORT=8000
   ```

## Step 3: Seed the Database

```bash
# Seed products and test user
npm run seed

# Or individually:
npm run seed:products  # Add sample products
npm run seed:user      # Add test user (email: test@example.com, password: password123)
```

## Step 4: Start the Server

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

## Step 5: Test the Application

1. Open browser: `http://localhost:8000`
2. Go to Login: `http://localhost:8000/login.html`
3. Login with: `test@example.com` / `password123`
4. Browse products and complete an order

## Troubleshooting

- **MongoDB connection error**: Make sure MongoDB is running and `.env` file has correct connection string
- **Products not showing**: Run `npm run seed:products`
- **Can't login**: Run `npm run seed:user` to create test user


