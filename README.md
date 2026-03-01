# MERN Review System - Frontend

Frontend for MERN stack review system - React application with user reviews and admin dashboard.

## 🚀 Quick Setup

### Method 1: Automatic Copy (Recommended)

```bash
# Clone both repositories
git clone https://github.com/Aryankaushik541/mern-review-system.git original
git clone https://github.com/Aryankaushik541/mern-review-system-frontend.git frontend

# Copy all remaining frontend files
cp -r original/client/src/pages frontend/src/

# Go to frontend directory
cd frontend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env and set REACT_APP_API_URL to your backend URL

# Start the application
npm start

# Clean up
cd ..
rm -rf original
```

### Method 2: Manual File Copy

If you prefer to copy files manually:

1. **Clone the original repository:**
   ```bash
   git clone https://github.com/Aryankaushik541/mern-review-system.git
   ```

2. **Copy the `client/src/pages` folder** from the original repo to `src/pages` in this repo

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Configure environment:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and update `REACT_APP_API_URL` to your backend URL

5. **Run the app:**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
mern-review-system-frontend/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Auth.css
│   │   ├── BookingReviewStyles.css
│   │   ├── Dashboard.css
│   │   ├── Dashboard.js
│   │   ├── ForgotPassword.css
│   │   ├── ForgotPassword.js
│   │   ├── Login.js
│   │   ├── ResetPassword.css
│   │   ├── ResetPassword.js
│   │   ├── ReviewPage.css
│   │   ├── ReviewPage.js
│   │   ├── ReviewPage_Booking.js
│   │   └── Signup.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .env
├── .env.example
├── package.json
└── README.md
```

## 🔗 Backend Repository

The backend code is in the main repository:
**https://github.com/Aryankaushik541/mern-review-system**

Make sure to run the backend server before starting the frontend.

## ✨ Features

- 🔐 User authentication (Login/Signup)
- 🔑 Password reset functionality  
- ⭐ Public review submission with star ratings
- 👑 Admin dashboard with full management controls
- 💬 Review management with nested replies
- 🎨 Responsive Booking.com-inspired design
- 🏨 Booking.com review integration support

## 🛠️ Tech Stack

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Modern CSS** - Gradients, animations, responsive design
- **RESTful API** - Backend integration

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_NAME=MERN Review System
REACT_APP_VERSION=2.0.0
REACT_APP_ENABLE_STAR_RATING=true
REACT_APP_ENABLE_NESTED_COMMENTS=true
REACT_APP_ENABLE_PUBLIC_REVIEWS=true
REACT_APP_REVIEWS_PER_PAGE=10
REACT_APP_MIN_COMMENT_LENGTH=10
REACT_APP_MAX_COMMENT_LENGTH=1000
```

## 📝 Available Scripts

- `npm start` - Run development server (http://localhost:3000)
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build folder will contain optimized production files.

### Deploy to Vercel/Netlify

1. Connect your GitHub repository
2. Set environment variables in the platform
3. Deploy!

## 📄 License

This project is part of the MERN Review System.

## 👨‍💻 Author

Aryan Kaushik

---

**Note:** Make sure the backend server is running before starting the frontend application.
