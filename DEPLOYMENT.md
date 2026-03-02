# 🚀 Deployment Guide

## Current Deployment Status

### Backend
- **Repository:** https://github.com/Aryankaushik541/mern-review-system
- **Deployed URL:** https://mern-review-system.vercel.app
- **Status:** ✅ Live
- **Platform:** Vercel

### Frontend
- **Repository:** https://github.com/Aryankaushik541/mern-review-system-frontend
- **Deployed URL:** (To be deployed)
- **Status:** 🔄 Ready for deployment
- **Platform:** Vercel (Recommended)

## 📋 Pre-Deployment Checklist

### Backend ✅
- [x] Vercel configuration (`vercel.json`)
- [x] Serverless-ready `server.js`
- [x] Environment variables configured
- [x] MongoDB connection optimized
- [x] CORS enabled for frontend
- [x] API endpoints tested

### Frontend ✅
- [x] Environment variables configured
- [x] API URL updated to production backend
- [x] API utility created (`src/utils/api.js`)
- [x] All pages created
- [x] Routing configured
- [x] Build tested locally

## 🌐 Environment Variables

### Backend (Vercel)
```env
MONGODB_URI=mongodb+srv://your-connection-string
JWT_SECRET=your-secret-key
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
FRONTEND_URL=https://your-frontend.vercel.app
NODE_ENV=production
```

### Frontend (Vercel)
```env
REACT_APP_API_URL=https://mern-review-system.vercel.app
REACT_APP_NAME=MERN Review System
REACT_APP_VERSION=2.0.0
REACT_APP_ENABLE_STAR_RATING=true
REACT_APP_ENABLE_NESTED_COMMENTS=true
REACT_APP_ENABLE_PUBLIC_REVIEWS=true
```

## 🚀 Deployment Steps

### Step 1: Deploy Frontend to Vercel

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Click "Add New Project"

2. **Import Repository**
   - Select: `mern-review-system-frontend`
   - Framework Preset: **Create React App**
   - Root Directory: `./`

3. **Configure Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

4. **Add Environment Variables**
   - Copy all variables from `.env.example`
   - Set `REACT_APP_API_URL=https://mern-review-system.vercel.app`

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete

### Step 2: Update Backend CORS

After frontend is deployed, update backend environment variable:

```env
FRONTEND_URL=https://your-frontend-url.vercel.app
```

### Step 3: Test Deployment

1. **Test Backend API**
   ```bash
   curl https://mern-review-system.vercel.app/api/health
   ```

2. **Test Frontend**
   - Visit your frontend URL
   - Try login/signup
   - Create a review
   - Test admin dashboard

## 🔧 Post-Deployment Configuration

### Update MongoDB Whitelist
1. Go to MongoDB Atlas
2. Network Access → IP Whitelist
3. Add: `0.0.0.0/0` (Allow from anywhere)
   - Or add Vercel's IP ranges

### Configure Custom Domain (Optional)
1. In Vercel project settings
2. Go to "Domains"
3. Add your custom domain
4. Update DNS records

## 📊 Monitoring

### Backend Health Check
```bash
curl https://mern-review-system.vercel.app/api/health
```

Expected response:
```json
{
  "success": true,
  "message": "Server is running"
}
```

### Frontend Health Check
- Visit: https://your-frontend.vercel.app
- Should load review page
- Check browser console for errors

## 🐛 Troubleshooting

### Issue: CORS Error
**Solution:** Update `FRONTEND_URL` in backend environment variables

### Issue: API Connection Failed
**Solution:** 
- Check `REACT_APP_API_URL` in frontend
- Verify backend is running
- Check network tab in browser

### Issue: MongoDB Connection Error
**Solution:**
- Verify `MONGODB_URI` in backend
- Check MongoDB Atlas IP whitelist
- Ensure database user has correct permissions

### Issue: Build Failed
**Solution:**
- Check build logs in Vercel
- Verify all dependencies in `package.json`
- Test build locally: `npm run build`

## 📈 Performance Optimization

### Backend
- ✅ Serverless functions
- ✅ MongoDB connection pooling
- ✅ Optimized queries
- ✅ Gzip compression

### Frontend
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Optimized images
- ✅ Minified CSS/JS

## 🔒 Security Checklist

- [x] Environment variables secured
- [x] JWT tokens properly handled
- [x] CORS configured correctly
- [x] MongoDB credentials protected
- [x] API rate limiting (consider adding)
- [x] HTTPS enabled (automatic on Vercel)

## 📝 Deployment Logs

### Backend Deployment
- **Date:** 2026-03-02
- **Status:** ✅ Success
- **URL:** https://mern-review-system.vercel.app
- **Commit:** cd7b4e9

### Frontend Deployment
- **Date:** Pending
- **Status:** 🔄 Ready
- **URL:** To be assigned
- **Commit:** Latest

## 🎯 Next Steps

1. ✅ Backend deployed successfully
2. 🔄 Deploy frontend to Vercel
3. ⏳ Update backend CORS with frontend URL
4. ⏳ Test complete application flow
5. ⏳ Monitor for errors
6. ⏳ Set up custom domain (optional)

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review browser console errors
3. Test API endpoints with Postman
4. Check MongoDB Atlas logs
5. Open GitHub issue if needed

---

**Deployment Guide Last Updated:** 2026-03-02

**Status:** Backend ✅ | Frontend 🔄
