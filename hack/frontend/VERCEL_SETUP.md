# Frontend Vercel Deployment Setup

## What You Need

✅ GitHub account with code pushed  
✅ Vercel account (free)  
✅ Backend URL (from Render or other service)

## Step-by-Step

### Step 1: Create Production Environment File

In the `frontend` folder, create a new file called `.env.production`:

```
VITE_API_URL=https://your-backend-url.onrender.com/api
```

**Replace** `your-backend-url` with your actual backend URL.

Example:
```
VITE_API_URL=https://civicpulse-api.onrender.com/api
```

### Step 2: Push Code to GitHub

```bash
git add .
git commit -m "Add production env config"
git push origin main
```

### Step 3: Go to Vercel Dashboard

1. Open https://vercel.com/dashboard
2. Click **"Add New..."** button
3. Select **"Project"**

### Step 4: Import Repository

1. Click **"Import Git Repository"**
2. Find and select your `CivicPulse` repository
3. Click **"Import"**

### Step 5: Configure Project

Fill in these settings:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Vite |
| **Root Directory** | `frontend` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |

### Step 6: Add Environment Variables

1. Scroll down to **"Environment Variables"**
2. Click **"Add"**
3. Fill in:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://your-backend-url.onrender.com/api`
   - **Environments**: Select all (Production, Preview, Development)
4. Click **"Save"**

### Step 7: Deploy

1. Click **"Deploy"** button
2. Wait 2-3 minutes for build to complete
3. You'll see a success message with your live URL

### Step 8: Verify

1. Click the URL to visit your deployed site
2. Test login functionality
3. Open browser DevTools (F12) → Console to check for errors

## Your Deployment URL

After deployment, you'll get a URL like:
```
https://civicpulse.vercel.app
```

Or if you set a custom domain:
```
https://yourdomain.com
```

## Automatic Updates

Every time you push to GitHub:
```bash
git push origin main
```

Vercel automatically rebuilds and deploys! 🚀

## Troubleshooting

### Build Fails
- Check `frontend/package.json` has all dependencies
- Run `npm install` locally first
- Check for TypeScript errors

### API Calls Don't Work
- Verify backend is running
- Check `VITE_API_URL` is correct
- Open DevTools → Network tab to see API requests
- Check backend CORS settings

### Blank Page
- Check browser console for errors (F12)
- Verify environment variables are set
- Try hard refresh (Ctrl+Shift+R)

## Next Steps

1. **Custom Domain**: Settings → Domains → Add custom domain
2. **Analytics**: Settings → Analytics to track usage
3. **Monitoring**: Set up error tracking with Sentry
4. **CI/CD**: Configure automated tests before deploy

## Support

- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev
- React Docs: https://react.dev
