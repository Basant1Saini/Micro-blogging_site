# Deployment Checklist

## Pre-Deployment Checklist

### Backend

- [ ] Environment Variables Set
  - [ ] MONGO_URI (MongoDB Atlas connection string)
  - [ ] JWT_SECRET (strong random string)
  - [ ] CLOUDINARY credentials
  - [ ] SMTP credentials (if using email)
  - [ ] CLIENT_URL (production frontend URL)
  - [ ] NODE_ENV=production

- [ ] Security
  - [ ] Rate limiting configured
  - [ ] CORS properly configured
  - [ ] Helmet security headers enabled
  - [ ] Input validation on all endpoints
  - [ ] SQL injection prevention
  - [ ] XSS protection enabled

- [ ] Database
  - [ ] MongoDB Atlas cluster created
  - [ ] Database user created with proper permissions
  - [ ] IP whitelist configured (or 0.0.0.0/0 for all)
  - [ ] Indexes created for performance
  - [ ] Backup strategy in place

- [ ] Code Quality
  - [ ] All console.logs removed or replaced with proper logging
  - [ ] Error handling implemented
  - [ ] Code linted and formatted
  - [ ] Dependencies updated
  - [ ] No sensitive data in code

### Frontend

- [ ] Environment Variables Set
  - [ ] VITE_API_URL (production backend URL)
  - [ ] VITE_SOCKET_URL (production socket URL)

- [ ] Build & Optimization
  - [ ] Production build tested (`npm run build`)
  - [ ] Build size optimized
  - [ ] Images optimized
  - [ ] Lazy loading implemented
  - [ ] Code splitting configured

- [ ] Configuration
  - [ ] API endpoints point to production
  - [ ] Error boundaries implemented
  - [ ] 404 page created
  - [ ] Loading states for all async operations
  - [ ] Proper meta tags for SEO

- [ ] Testing
  - [ ] All features tested
  - [ ] Responsive design verified
  - [ ] Cross-browser compatibility checked
  - [ ] Performance tested
  - [ ] Accessibility checked

## Deployment Steps

### Backend Deployment (Railway/Render)

1. **Create Account**
   - [ ] Sign up for Railway/Render
   - [ ] Connect GitHub account

2. **Create New Project**
   - [ ] Select repository
   - [ ] Choose backend directory
   - [ ] Set build command: `npm install`
   - [ ] Set start command: `npm start`

3. **Configure Environment**
   - [ ] Add all environment variables
   - [ ] Set NODE_ENV to production
   - [ ] Configure port (Railway auto-assigns)

4. **Deploy**
   - [ ] Trigger deployment
   - [ ] Monitor build logs
   - [ ] Verify deployment success
   - [ ] Test API endpoints

5. **Post-Deployment**
   - [ ] Note the deployment URL
   - [ ] Test all API endpoints
   - [ ] Check database connection
   - [ ] Verify file uploads work
   - [ ] Test WebSocket connection

### Frontend Deployment (Vercel/Netlify)

1. **Create Account**
   - [ ] Sign up for Vercel/Netlify
   - [ ] Connect GitHub account

2. **Create New Project**
   - [ ] Import repository
   - [ ] Select frontend directory
   - [ ] Framework preset: Vite
   - [ ] Build command: `npm run build`
   - [ ] Output directory: `dist`

3. **Configure Environment**
   - [ ] Add VITE_API_URL (backend URL)
   - [ ] Add VITE_SOCKET_URL (backend URL)

4. **Configure Redirects**
   - [ ] Create vercel.json or netlify.toml
   - [ ] Add SPA redirect rules

5. **Deploy**
   - [ ] Trigger deployment
   - [ ] Monitor build logs
   - [ ] Verify deployment success

6. **Post-Deployment**
   - [ ] Test all pages
   - [ ] Verify API connection
   - [ ] Test authentication flow
   - [ ] Check real-time features
   - [ ] Test file uploads

### Database (MongoDB Atlas)

1. **Setup**
   - [ ] Create MongoDB Atlas account
   - [ ] Create new cluster
   - [ ] Choose region (close to backend)
   - [ ] Select tier (free or paid)

2. **Configuration**
   - [ ] Create database user
   - [ ] Set strong password
   - [ ] Configure IP whitelist
   - [ ] Get connection string

3. **Security**
   - [ ] Enable authentication
   - [ ] Set up network access
   - [ ] Configure backup schedule
   - [ ] Enable monitoring

### Media Storage (Cloudinary)

1. **Setup**
   - [ ] Create Cloudinary account
   - [ ] Note cloud name
   - [ ] Get API key and secret

2. **Configuration**
   - [ ] Set upload presets
   - [ ] Configure transformations
   - [ ] Set storage limits
   - [ ] Enable auto-optimization

## Post-Deployment Verification

### Functionality Tests

- [ ] User Registration
  - [ ] Can create new account
  - [ ] Email validation works
  - [ ] Password requirements enforced

- [ ] User Login
  - [ ] Can login with credentials
  - [ ] JWT token received
  - [ ] Redirected to home page

- [ ] Posts
  - [ ] Can create posts
  - [ ] Can view feed
  - [ ] Can like/unlike posts
  - [ ] Can comment on posts
  - [ ] Can delete own posts

- [ ] User Profile
  - [ ] Can view profile
  - [ ] Can edit profile
  - [ ] Can upload profile picture
  - [ ] Can follow/unfollow users

- [ ] Search
  - [ ] Can search users
  - [ ] Results display correctly

- [ ] Real-time
  - [ ] Notifications work
  - [ ] Online status updates
  - [ ] Live updates appear

### Performance Tests

- [ ] Page load time < 3 seconds
- [ ] API response time < 500ms
- [ ] Images load quickly
- [ ] No memory leaks
- [ ] Smooth scrolling

### Security Tests

- [ ] Protected routes work
- [ ] Unauthorized access blocked
- [ ] XSS attempts blocked
- [ ] SQL injection prevented
- [ ] HTTPS enabled
- [ ] Secure headers present

## Monitoring & Maintenance

### Setup Monitoring

- [ ] Error tracking (Sentry)
- [ ] Performance monitoring
- [ ] Uptime monitoring
- [ ] Database monitoring
- [ ] Log aggregation

### Regular Maintenance

- [ ] Update dependencies monthly
- [ ] Review error logs weekly
- [ ] Check performance metrics
- [ ] Backup database regularly
- [ ] Review security alerts

## Rollback Plan

- [ ] Document current version
- [ ] Keep previous deployment accessible
- [ ] Have rollback procedure ready
- [ ] Test rollback process
- [ ] Document known issues

## Domain & SSL

- [ ] Purchase domain (optional)
- [ ] Configure DNS records
- [ ] Enable SSL/HTTPS
- [ ] Verify SSL certificate
- [ ] Test with custom domain

## Documentation

- [ ] Update README with production URLs
- [ ] Document deployment process
- [ ] Create troubleshooting guide
- [ ] Document API changes
- [ ] Update environment variables list

## Team Communication

- [ ] Notify team of deployment
- [ ] Share production URLs
- [ ] Document any issues
- [ ] Schedule post-deployment review
- [ ] Update project status

## Success Criteria

- [ ] All features working in production
- [ ] No critical errors in logs
- [ ] Performance meets requirements
- [ ] Security tests passed
- [ ] User acceptance testing completed
- [ ] Documentation updated
- [ ] Team trained on new features

---

## Quick Deployment Commands

### Backend (Railway)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Link project
railway link

# Deploy
railway up
```

### Frontend (Vercel)
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Frontend (Netlify)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

## Support Resources

- Railway Docs: https://docs.railway.app/
- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com/
- MongoDB Atlas: https://docs.atlas.mongodb.com/
- Cloudinary Docs: https://cloudinary.com/documentation

---

**Remember:** Always test in a staging environment before deploying to production!
