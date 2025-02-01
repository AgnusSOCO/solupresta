# Deploying Solupresta Frontend to Vercel

This guide explains how to deploy the Solupresta React frontend to Vercel and connect it with the Railway backend.

## Prerequisites

1. Create a Vercel account at https://vercel.com
2. Install Vercel CLI:
```bash
npm i -g vercel
```

## Build Configuration

1. Create a `.env.production` file in the frontend directory:
```env
VITE_API_URL=https://your-railway-url.railway.app
```

2. Build the frontend locally:
```bash
cd frontend
npm run build
```

## Deployment Steps

1. Login to Vercel:
```bash
vercel login
```

2. Deploy the frontend:
```bash
vercel
```

When prompted:
- Set up and deploy: Yes
- Directory: ./dist
- Want to override settings? No
- Deploy to production? Yes

3. Configure environment variables in Vercel Dashboard:
- Go to Project Settings → Environment Variables
- Add `VITE_API_URL` with your Railway backend URL

## Domain Configuration

1. Add custom domain (optional):
- Go to Project Settings → Domains
- Add your domain
- Follow DNS configuration instructions

## Continuous Deployment

1. Connect to GitHub:
- Go to Vercel Dashboard → Import Project
- Import your GitHub repository
- Configure build settings:
  - Framework Preset: Vite
  - Build Command: `npm run build`
  - Output Directory: dist
  - Install Command: `npm install`

2. Configure automatic deployments:
- Every push to main will trigger deployment
- Preview deployments for pull requests

## Monitoring

- View deployments: Vercel Dashboard → Deployments
- Monitor performance: Vercel Dashboard → Analytics
- Check build logs: Click on any deployment

## Troubleshooting

1. Build failures:
- Check build logs in Vercel Dashboard
- Verify environment variables
- Test build locally: `npm run build`

2. API connection issues:
- Verify `VITE_API_URL` is correct
- Check CORS configuration in backend
- Test API endpoints locally

3. Performance issues:
- Use Vercel Analytics to identify bottlenecks
- Enable automatic performance optimization
- Configure caching headers

## Security Best Practices

1. Environment Variables:
- Never commit `.env` files
- Use Vercel's environment variable UI
- Separate staging/production variables

2. CORS Configuration:
- Configure allowed origins in backend
- Use environment-specific CORS settings
- Implement proper security headers

## Scaling

Vercel's free tier includes:
- Unlimited static site deployments
- Automatic CDN distribution
- SSL certificates
- Custom domains

For production, consider:
- Pro plan for team features
- Enterprise plan for advanced security
- Edge Functions for dynamic content
- Image Optimization API

## Complete Deployment Checklist

1. Backend (Railway):
```bash
# Deploy backend first
cd backend
railway login
railway init
railway add postgresql
railway up
railway domain  # Get backend URL
```

2. Frontend (Vercel):
```bash
# Update environment variables
echo "VITE_API_URL=https://your-railway-url.railway.app" > .env.production

# Build and deploy
cd frontend
npm run build
vercel
```

3. Verify Deployment:
- Test frontend functionality
- Verify API connections
- Check email notifications
- Monitor error logs

4. Post-Deployment:
- Set up monitoring
- Configure alerts
- Document deployment URLs
- Update team documentation
