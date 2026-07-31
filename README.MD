# 🏡 WanderLust

A full-stack Airbnb-inspired web application where users can discover, create, and manage property listings.

## ✨ Features

- User Authentication (Sign Up / Login / Logout)
- Create, Edit and Delete Listings
- Upload Listing Images
- Add and Delete Reviews
- Flash Messages
- Server-side Validation
- Responsive UI
- Category Configuration
- Type Configuration
- Country Configuration

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Bootstrap
- Passport.js
- Cloudinary
- Multer
- Joi

## 📁 Project Structure

```
controllers/
models/
routes/
views/
public/
utils/
init/
app.js
```

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/itsArvindSingh/WanderLust.git
```

Move into the project

```bash
cd WanderLust
```

Install dependencies

```bash
npm install
```

Create a `.env` file in the project root.

Example:

```env
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MONGO_URL=mongodb://127.0.0.1:27017/wanderlust

SESSION_SECRET=your_secret
```

Start MongoDB locally.

Run the application

```bash
npm start
```

or

```bash
npm run dev
```

Open

```
http://localhost:8080
```

## 📌 Future Improvements

- Search functionality
- Wishlist/Favorites
- Booking system
- Interactive Maps
- Payment Integration

## 👨‍💻 Author

**Arvind Singh**

GitHub: https://github.com/itsArvindSingh