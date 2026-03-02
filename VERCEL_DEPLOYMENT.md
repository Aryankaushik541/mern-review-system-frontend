# 🚀 Frontend Vercel Deployment Guide

## Backend API URL
**Backend:** https://mern-review-system.vercel.app

---

## ✅ Frontend Already Configured

The frontend is already set up to connect to the backend API. The configuration is in:

- **`.env.example`** - Contains `REACT_APP_API_URL=https://mern-review-system.vercel.app`
- **`src/utils/api.js`** - Uses `process.env.REACT_APP_API_URL`

---

## 🔧 Vercel Deployment Steps

### Step 1: Deploy to Vercel

1. **Go to Vercel Dashboard:**
   - https://vercel.com/dashboard

2. **Click "Add New Project"**

3. **Import Git Repository:**
   - Select: `Aryankaushik541/mern-review-system-frontend`
   - Click "Import"

4. **Configure Project:**
   - **Framework Preset:** Create React App
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `build` (auto-detected)

5. **Add Environment Variables:**
   
   Click "Environment Variables" and add:
   
   ```
   Name: REACT_APP_API_URL
   Value: https://mern-review-system.vercel.app
   Environment: Production, Preview, Development (select all)
   ```

6. **Click "Deploy"**

7. **Wait 2-3 minutes** for deployment to complete

---

## 📝 Environment Variables Required

Add these in Vercel Dashboard → Settings → Environment Variables:

```env
# Backend API URL (REQUIRED)
REACT_APP_API_URL=https://mern-review-system.vercel.app

# App Configuration (Optional)
REACT_APP_NAME=MERN Review System
REACT_APP_VERSION=2.0.0

# Feature Flags (Optional)
REACT_APP_ENABLE_STAR_RATING=true
REACT_APP_ENABLE_NESTED_COMMENTS=true
REACT_APP_ENABLE_PUBLIC_REVIEWS=true

# UI Configuration (Optional)
REACT_APP_REVIEWS_PER_PAGE=10
REACT_APP_MIN_COMMENT_LENGTH=10
REACT_APP_MAX_COMMENT_LENGTH=1000
```

**Note:** Only `REACT_APP_API_URL` is required. Others are optional with defaults.

---

## 🧪 Testing After Deployment

### Test 1: Check Frontend URL

After deployment, Vercel will give you a URL like:
```
https://mern-review-system-frontend.vercel.app
```

or

```
https://booking-review-system.vercel.app
```

### Test 2: Verify API Connection

1. **Open Frontend URL** in browser
2. **Open Browser Console** (F12)
3. **Go to Network tab**
4. **Try to login or signup**
5. **Check Network requests** - should call `https://mern-review-system.vercel.app/api/auth/...`

### Test 3: Test Features

1. ✅ **Signup** - Create new account
2. ✅ **Login** - Login with credentials
3. ✅ **Forgot Password** - Request password reset
4. ✅ **Reviews** - View public reviews
5. ✅ **Create Review** - Add new review (after login)
6. ✅ **Comments** - Add nested comments

---

## 🔍 Troubleshooting

### Issue 1: API Calls Failing

**Symptoms:**
- Network errors in console
- "Failed to fetch" errors
- CORS errors

**Check:**
1. `REACT_APP_API_URL` is set in Vercel
2. Backend is running: https://mern-review-system.vercel.app/api/health
3. No typos in API URL

**Solution:**
1. Go to Vercel Dashboard
2. Settings → Environment Variables
3. Verify `REACT_APP_API_URL=https://mern-review-system.vercel.app`
4. Redeploy if needed

### Issue 2: Environment Variable Not Working

**Symptoms:**
- API calls go to `http://localhost:5000`
- Environment variable not recognized

**Cause:**
- Environment variables must start with `REACT_APP_`
- Need to redeploy after adding variables

**Solution:**
1. Ensure variable name is `REACT_APP_API_URL` (not `API_URL`)
2. Redeploy: Deployments → Latest → "..." → Redeploy
3. Clear browser cache

### Issue 3: CORS Error

**Symptoms:**
```
Access to fetch at 'https://mern-review-system.vercel.app/api/...' 
from origin 'https://your-frontend.vercel.app' has been blocked by CORS policy
```

**Solution:**
Backend already has CORS enabled. If still getting error:

1. **Update Backend CORS** (already done):
   ```javascript
   app.use(cors({
     origin: '*', // Allows all origins
     credentials: true
   }));
   ```

2. **Or specify frontend URL** in backend:
   - Go to backend Vercel
   - Add environment variable:
     ```
     FRONTEND_URL=https://your-frontend.vercel.app
     ```
   - Redeploy backend

---

## 📊 Deployment Checklist

- [ ] Frontend deployed to Vercel
- [ ] `REACT_APP_API_URL` environment variable set
- [ ] Deployment successful (green checkmark)
- [ ] Frontend URL accessible
- [ ] API calls working (check Network tab)
- [ ] Login/Signup working
- [ ] Forgot password working
- [ ] Reviews loading
- [ ] No CORS errors

---

## 🔗 Important URLs

### Frontend:
- **Production:** https://booking-review-system.vercel.app (or your Vercel URL)
- **Repository:** https://github.com/Aryankaushik541/mern-review-system-frontend

### Backend:
- **API:** https://mern-review-system.vercel.app
- **Health Check:** https://mern-review-system.vercel.app/api/health
- **Email Config:** https://mern-review-system.vercel.app/api/config/email
- **Repository:** https://github.com/Aryankaushik541/mern-review-system

---

## 🚀 Quick Deploy Commands

If deploying via Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variable
vercel env add REACT_APP_API_URL production
# Enter: https://mern-review-system.vercel.app

# Redeploy
vercel --prod
```

---

## 📝 Post-Deployment

### Update Backend with Frontend URL

1. **Go to Backend Vercel:**
   - https://vercel.com/dashboard
   - Select: `mern-review-system`

2. **Settings → Environment Variables**

3. **Add/Update:**
   ```
   Name: FRONTEND_URL
   Value: https://your-frontend-url.vercel.app
   ```

4. **Redeploy Backend**

This ensures:
- ✅ CORS works properly
- ✅ Password reset emails have correct links
- ✅ Email templates use correct URLs

---

## ✅ Success Indicators

After successful deployment:

1. ✅ Frontend loads without errors
2. ✅ Can signup/login
3. ✅ Reviews are visible
4. ✅ Can create reviews (when logged in)
5. ✅ Forgot password sends email
6. ✅ No console errors
7. ✅ Network tab shows API calls to backend

---

**Last Updated:** 2026-03-02

**Status:** Ready to Deploy 🚀
