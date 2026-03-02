# 🎨 MERN Review System - Frontend

**Modern React application** with user reviews, admin dashboard, and Booking.com-inspired design.

> **Backend Repository:** [mern-review-system](https://github.com/Aryankaushik541/mern-review-system)

![React](https://img.shields.io/badge/React-18.2-blue)
![React Router](https://img.shields.io/badge/React_Router-6.11-red)
![License](https://img.shields.io/badge/License-MIT-green)

## 🔗 Live Demo

- **Frontend:** https://mern-review-system-frontend.vercel.app
- **Backend API:** https://mern-review-system.vercel.app

## 📦 Repository Links

- **Frontend (this repo):** https://github.com/Aryankaushik541/mern-review-system-frontend
- **Backend:** https://github.com/Aryankaushik541/mern-review-system

## ✨ Features

### 🔐 Authentication
- User registration and login
- Password reset via email
- JWT-based authentication
- Protected routes

### ⭐ Review System
- Public review submission
- Star rating system (1-5 stars)
- Category-wise ratings
- Review editing and deletion
- Nested comment system

### 👑 Admin Dashboard
- User management
- Review moderation
- Statistics and analytics
- Activity tracking
- Role management

### 🎨 UI/UX
- Booking.com-inspired design
- Responsive layout
- Modern gradients and animations
- Premium card designs
- Smooth transitions

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Backend API running

### Installation

```bash
# Clone repository
git clone https://github.com/Aryankaushik541/mern-review-system-frontend.git
cd mern-review-system-frontend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env and set REACT_APP_API_URL

# Start development server
npm start
```

**App runs on:** `http://localhost:3000`

## 📁 Project Structure

```
mern-review-system-frontend/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Auth.css              # Authentication styles
│   │   ├── Dashboard.css         # Admin dashboard styles
│   │   ├── Dashboard.js          # Admin dashboard component
│   │   ├── ForgotPassword.css    # Password reset styles
│   │   ├── ForgotPassword.js     # Password reset component
│   │   ├── Login.js              # Login component
│   │   ├── ResetPassword.css     # Reset password styles
│   │   ├── ResetPassword.js      # Reset password component
│   │   ├── ReviewPage.css        # Review page styles
│   │   ├── ReviewPage.js         # Review page component
│   │   └── Signup.js             # Signup component
│   ├── utils/
│   │   └── api.js                # API utility functions
│   ├── App.css                   # Global app styles
│   ├── App.js                    # Main app component
│   ├── index.css                 # Base styles
│   └── index.js                  # Entry point
├── .env                          # Environment variables
├── .env.example                  # Environment template
├── package.json                  # Dependencies
└── README.md                     # This file
```

## 🔧 Technology Stack

- **React 18** - UI library
- **React Router DOM 6** - Client-side routing
- **Fetch API** - HTTP requests
- **CSS3** - Modern styling with gradients & animations
- **LocalStorage** - Token management

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
# Backend API URL
# Development: http://localhost:5000
# Production: https://mern-review-system.vercel.app
REACT_APP_API_URL=https://mern-review-system.vercel.app

# App Configuration
REACT_APP_NAME=MERN Review System
REACT_APP_VERSION=2.0.0

# Feature Flags
REACT_APP_ENABLE_STAR_RATING=true
REACT_APP_ENABLE_NESTED_COMMENTS=true
REACT_APP_ENABLE_PUBLIC_REVIEWS=true

# UI Configuration
REACT_APP_REVIEWS_PER_PAGE=10
REACT_APP_MIN_COMMENT_LENGTH=10
REACT_APP_MAX_COMMENT_LENGTH=1000
```

## 📝 Available Scripts

```bash
# Development
npm start              # Run dev server on http://localhost:3000

# Production
npm run build          # Build optimized production bundle

# Testing
npm test               # Run test suite

# Utilities
npm run eject          # Eject from Create React App (one-way)
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (already done)

2. **Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com/)
   - Click "Add New Project"
   - Import `mern-review-system-frontend` repository
   - Framework Preset: **Create React App**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `build`

3. **Environment Variables** (Add in Vercel):
   ```
   REACT_APP_API_URL=https://mern-review-system.vercel.app
   REACT_APP_NAME=MERN Review System
   REACT_APP_VERSION=2.0.0
   REACT_APP_ENABLE_STAR_RATING=true
   REACT_APP_ENABLE_NESTED_COMMENTS=true
   REACT_APP_ENABLE_PUBLIC_REVIEWS=true
   ```

4. **Deploy!**

### Deploy to Netlify

```bash
# Build the app
npm run build

# Deploy to Netlify
# Drag and drop the 'build' folder to Netlify
# Or use Netlify CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### Manual Deployment

```bash
# Build for production
npm run build

# The build folder contains static files
# Upload to any static hosting service:
# - GitHub Pages
# - AWS S3
# - Firebase Hosting
# - Cloudflare Pages
```

## 🔌 API Integration

The app uses the API utility (`src/utils/api.js`) for all backend communication:

```javascript
import api from './utils/api';

// Example: Get all reviews
const reviews = await api.reviews.getAll();

// Example: Login
const response = await api.auth.login({ email, password });

// Example: Create review
const newReview = await api.reviews.create(reviewData);
```

## 🎨 Design System

### Color Palette
- **Primary:** `#003580` (Booking.com Blue)
- **Secondary:** `#febb02` (Booking.com Yellow)
- **Success:** `#10b981` (Green)
- **Danger:** `#ef4444` (Red)
- **Background:** `#f5f7fa` (Light Gray)

### Typography
- **Font Family:** -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'
- **Headings:** 700 weight
- **Body:** 400-500 weight

## 🔒 Security Features

- ✅ JWT token storage in localStorage
- ✅ Protected routes with authentication
- ✅ Automatic token expiration handling
- ✅ CORS-enabled API requests
- ✅ Input validation
- ✅ XSS protection

## 🐛 Troubleshooting

### Common Issues

**Issue: "Cannot connect to backend"**
- ✅ Check `REACT_APP_API_URL` in `.env`
- ✅ Ensure backend is running
- ✅ Check CORS settings in backend

**Issue: "Build fails"**
- ✅ Delete `node_modules` and `package-lock.json`
- ✅ Run `npm install` again
- ✅ Check Node.js version (v14+)

**Issue: "Environment variables not working"**
- ✅ Restart development server after changing `.env`
- ✅ Variables must start with `REACT_APP_`
- ✅ Don't use quotes around values

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aryan Kaushik**
- GitHub: [@Aryankaushik541](https://github.com/Aryankaushik541)

## 📞 Support

For issues or questions:
1. Check the documentation
2. Review troubleshooting section
3. Open a GitHub Issue
4. Check the backend repository for API-related issues

## 🎯 Features Summary

✅ Modern React 18 application  
✅ Booking.com-inspired design  
✅ User authentication system  
✅ Star rating reviews  
✅ Nested comment system  
✅ Admin dashboard  
✅ Responsive design  
✅ Production ready  
✅ Easy deployment  
✅ API utility included  

---

**Made with ❤️ using React & Modern CSS**

**Ready for production!** 🚀
