# File Connections Verification

This document verifies that all HTML files are properly connected to each other and to the backend.

## ✅ Authentication Pages

### signup.html (NEW)
- ✅ Links to: `login.html` (in signup text)
- ✅ CSS: `css/login.css`
- ✅ API: `POST /api/auth/register`
- ✅ Redirects to: `electronics.html?signup=success` after successful registration

### login.html
- ✅ Links to: `signup.html` (in signup text)
- ✅ CSS: `css/login.css`
- ✅ API: `POST /api/auth/login`
- ✅ Redirects to: `electronics.html?login=success` after successful login
- ✅ Stores user data in localStorage

## ✅ Main Pages

### index.html
- ✅ Links to: `electronics.html`, `login.html`, `signup.html`

### electronics.html
- ✅ Links to: `login.html` (in header), `products.html` (view more buttons)
- ✅ Links to: `product.html` (product cards - uses URL parameters, will need product IDs later)
- ✅ CSS: `css/style.css`
- ✅ Font Awesome icons CDN
- ✅ JavaScript: Checks for `?login=success` or `?signup=success` URL parameter

### products.html
- ✅ Links to: `login.html` (in header)
- ✅ Links to: `product.html` (product cards - uses URL parameters)
- ✅ CSS: `css/style.css`
- ✅ Font Awesome icons (inherited from style.css)

### product.html
- ✅ Links to: `login.html` (in header)
- ✅ Links to: `payment.html` (Buy Now button)
- ✅ Links to: `electronics.html`, `products.html` (footer)
- ✅ CSS: `css/style.css`
- ✅ JavaScript: 
  - Fetches product from `/api/products/:id` if `id` parameter exists
  - Falls back to URL parameters (backward compatible)
  - Passes data to payment.html

### payment.html
- ✅ Links to: `success.html` (after payment)
- ✅ Redirects to: `login.html?redirect=...` if user not logged in
- ✅ JavaScript:
  - Fetches product from `/api/products/:id` if ID provided
  - Creates order via `POST /api/orders`
  - Requires user to be logged in (checks localStorage)

### success.html
- ✅ Links to: `electronics.html` (home button)
- ✅ CSS: Inline styles

### mobiles.html
- ✅ Links to: `login.html` (in header)
- ✅ CSS: `css/style.css`

## ✅ Backend API Connections

### Products API
- ✅ `GET /api/products` - Get all products
- ✅ `GET /api/products/:id` - Get product by ID
- ✅ Used by: `product.html` (fetches product details)

### Authentication API
- ✅ `POST /api/auth/login` - User login
- ✅ Used by: `login.html`
- ✅ `POST /api/auth/register` - User registration
- ✅ Used by: `signup.html`

### Orders API
- ✅ `POST /api/orders` - Create new order
- ✅ Used by: `payment.html` (saves order after payment)

## ✅ CSS Files

- ✅ `css/style.css` - Main stylesheet (used by most pages)
- ✅ `css/login.css` - Login/Signup stylesheet
- ✅ `css/products.css` - Products page stylesheet (if exists)

## ✅ JavaScript Files

- ✅ `js/script.js` - General JavaScript utilities
- ✅ Inline scripts in HTML files for page-specific functionality

## 🔄 Navigation Flow

### User Registration Flow
1. User visits `index.html` or `electronics.html`
2. Clicks "Log In" → goes to `login.html`
3. Clicks "Sign Up" → goes to `signup.html`
4. Fills form → API call to `/api/auth/register`
5. On success → redirects to `electronics.html?signup=success`

### User Login Flow
1. User visits `login.html`
2. Enters credentials → API call to `/api/auth/login`
3. On success → stores user in localStorage → redirects to `electronics.html?login=success`

### Shopping Flow
1. User browses `electronics.html` or `products.html`
2. Clicks product → goes to `product.html?id=PRODUCT_ID` (new) or `product.html?name=...&price=...` (old format)
3. `product.html` fetches product data from API (if ID provided)
4. User clicks "Buy Now" → goes to `payment.html?id=PRODUCT_ID&qty=QUANTITY`
5. `payment.html` fetches product data and creates order
6. On payment success → redirects to `success.html`

## ⚠️ Notes

### Backward Compatibility
- Product links still support old URL parameter format (`?name=...&price=...`)
- New format uses `?id=PRODUCT_ID` and fetches from API
- Both formats work, but new format is preferred

### Missing Connections (Future Enhancements)
- Product links in `electronics.html` and `products.html` still use old format
- Consider updating to use product IDs from database
- Logo could link to `electronics.html` or `index.html`

### Hardcoded URLs
- Some footer links use hardcoded `http://127.0.0.1:5500/frontend/...`
- These should be relative paths like `electronics.html` for better portability

## ✅ All Files Connected

All major navigation paths are functional:
- ✅ Authentication (login ↔ signup)
- ✅ Product browsing (electronics → products → product → payment → success)
- ✅ Backend API integration
- ✅ CSS styling
- ✅ JavaScript functionality

