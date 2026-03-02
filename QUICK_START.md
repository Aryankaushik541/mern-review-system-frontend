# ⚡ Quick Start - Deploy in 5 Minutes

## 🎯 Goal
Connect frontend to backend API: `https://mern-review-system.vercel.app`

---

## 🚀 Deploy to Vercel (3 Steps)

### Step 1: Import to Vercel (1 minute)

1. Go to: https://vercel.com/new
2. Import: `https://github.com/Aryankaushik541/mern-review-system-frontend`
3. Click "Import"

### Step 2: Add Environment Variable (1 minute)

In the deployment screen, add:

```
Name: REACT_APP_API_URL
Value: https://mern-review-system.vercel.app
```

**Important:** Select all environments (Production, Preview, Development)

### Step 3: Deploy (2 minutes)

1. Click "Deploy"
2. Wait for deployment to complete
3. Click "Visit" to see your app

---

## ✅ Verify It Works

### Test 1: Open Your App
```
https://your-app-name.vercel.app
```

### Test 2: Try Signup
1. Click "Sign up"
2. Enter details
3. Should create account successfully

### Test 3: Check Network Tab
1. Open Browser DevTools (F12)
2. Go to Network tab
3. Try login
4. Should see requests to: `https://mern-review-system.vercel.app/api/auth/login`

---

## 🔧 If Already Deployed

### Update Environment Variable

1. **Vercel Dashboard** → Your Project
2. **Settings** → **Environment Variables**
3. **Add:**
   ```
   REACT_APP_API_URL=https://mern-review-system.vercel.app
   ```
4. **Deployments** → **Redeploy**

---

## 📱 Features Available

After deployment, you can:

- ✅ **Signup/Login** - User authentication
- ✅ **View Reviews** - Public reviews visible to all
- ✅ **Create Reviews** - Write reviews (requires login)
- ✅ **Star Ratings** - 1-5 star ratings
- ✅ **Nested Comments** - Reply to reviews
- ✅ **Forgot Password** - Email-based password reset
- ✅ **Admin Dashboard** - User and review management

---

## 🐛 Common Issues

### Issue: API calls fail

**Fix:**
```bash
# Check if environment variable is set
# In Vercel Dashboard → Settings → Environment Variables
# Should see: REACT_APP_API_URL = https://mern-review-system.vercel.app
```

### Issue: Still calling localhost

**Fix:**
1. Environment variable not set
2. Need to redeploy after adding variable
3. Clear browser cache

---

## 📞 Need Help?

Check these files:
- **Full Guide:** [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)
- **Backend Setup:** https://github.com/Aryankaushik541/mern-review-system

---

**That's it! Your app should be live in 5 minutes! 🎉**
