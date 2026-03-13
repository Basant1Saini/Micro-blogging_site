# Project Setup Instructions

## Quick Start Guide

### Prerequisites Check
```bash
node --version  # Should be v18 or higher
npm --version   # Should be v9 or higher
mongod --version # Should be v6 or higher
```

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 2: Configure Backend Environment
Edit `backend/.env` file with your actual credentials:
- MongoDB URI (local or Atlas)
- JWT Secret (generate a random string)
- Cloudinary credentials (sign up at cloudinary.com)
- SMTP credentials (optional, for email features)

### Step 3: Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### Step 4: Configure Frontend Environment
The `frontend/.env` file is already configured for local development.
Update if your backend runs on a different port.

### Step 5: Start MongoDB
```bash
# If using local MongoDB
mongod --dbpath /path/to/your/data/directory

# Or use MongoDB Atlas (cloud) - just update MONGO_URI in backend/.env
```

### Step 6: Start Backend Server
```bash
cd backend
npm run dev
```
Backend will run on http://localhost:5000

### Step 7: Start Frontend Development Server
```bash
cd frontend
npm run dev
```
Frontend will run on http://localhost:5173

### Step 8: Access the Application
Open your browser and navigate to: http://localhost:5173

## Project Structure Overview

### Backend Architecture
- **Models**: MongoDB schemas for User, Post, Comment, Notification
- **Controllers**: Business logic for auth, users, posts, comments
- **Routes**: API endpoint definitions
- **Middleware**: Authentication, error handling, file uploads
- **Socket**: Real-time communication setup
- **Config**: Database and Cloudinary configuration

### Frontend Architecture
- **Pages**: Main application views (Home, Login, Register, Profile, Explore)
- **Components**: Reusable UI components organized by feature
- **Services**: API integration with Axios
- **Store**: Global state management with Zustand
- **Hooks**: Custom React hooks (can be added as needed)

## Key Features Implemented

### Authentication
- JWT-based authentication
- Secure password hashing with bcrypt
- Protected routes on both frontend and backend
- Token storage in localStorage
- Automatic token refresh on API calls

### User Management
- User registration and login
- Profile viewing and editing
- Follow/Unfollow functionality
- User search
- Followers and following lists

### Posts
- Create posts with text content
- View feed of all posts
- Like/Unlike posts
- Comment on posts
- Delete own posts
- Edit posts
- Image upload support (configured)

### Real-time Features
- Socket.io integration
- Online/Offline status
- Real-time notifications
- Live updates

### UI/UX
- Responsive design with Tailwind CSS
- Modern component library
- Toast notifications
- Loading states
- Error handling
- Form validation with Zod

## Technology Stack Details

### Backend
- **Express.js**: Web framework
- **MongoDB + Mongoose**: Database and ODM
- **JWT**: Authentication tokens
- **bcrypt**: Password hashing
- **Socket.io**: Real-time communication
- **Cloudinary**: Media storage
- **Multer**: File upload handling
- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing

### Frontend
- **React 18**: UI library with latest features
- **Vite**: Fast build tool and dev server
- **React Router v6**: Client-side routing
- **TanStack Query**: Server state management
- **Zustand**: Client state management
- **Axios**: HTTP client
- **React Hook Form**: Form handling
- **Zod**: Schema validation
- **Tailwind CSS**: Utility-first CSS
- **Lucide React**: Icon library
- **date-fns**: Date formatting
- **React Hot Toast**: Notifications

## API Endpoints Summary

### Authentication
- POST /api/auth/register - Register new user
- POST /api/auth/login - Login user
- POST /api/auth/logout - Logout user
- GET /api/auth/me - Get current user

### Users
- GET /api/users/:id - Get user profile
- PUT /api/users/:id - Update profile
- POST /api/users/:id/follow - Follow user
- DELETE /api/users/:id/follow - Unfollow user
- GET /api/users/search - Search users

### Posts
- GET /api/posts - Get all posts (feed)
- POST /api/posts - Create post
- GET /api/posts/:id - Get single post
- PUT /api/posts/:id - Update post
- DELETE /api/posts/:id - Delete post
- POST /api/posts/:id/like - Like post
- DELETE /api/posts/:id/like - Unlike post

### Comments
- GET /api/comments/posts/:postId/comments - Get comments
- POST /api/comments/posts/:postId/comments - Create comment
- PUT /api/comments/:id - Update comment
- DELETE /api/comments/:id - Delete comment

## Security Features

1. **Password Security**: bcrypt with 10 salt rounds
2. **JWT Authentication**: Secure token-based auth
3. **HTTP Headers**: Helmet.js for security headers
4. **CORS**: Configured for specific origin
5. **Input Validation**: Express Validator and Zod
6. **Protected Routes**: Middleware authentication
7. **XSS Protection**: Built-in with React
8. **MongoDB Injection Prevention**: Mongoose sanitization

## Development Tips

### Backend Development
```bash
# Run in development mode with auto-restart
npm run dev

# Run in production mode
npm start

# Run tests
npm test
```

### Frontend Development
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Common Issues and Solutions

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check MONGO_URI in .env
   - Verify network connectivity for Atlas

2. **Port Already in Use**
   - Change PORT in backend/.env
   - Kill process: `lsof -ti:5000 | xargs kill -9`

3. **CORS Errors**
   - Verify CLIENT_URL matches frontend URL
   - Check CORS configuration in server.js

4. **Cloudinary Upload Fails**
   - Verify credentials in .env
   - Check file size limits
   - Ensure proper file format

## Next Steps for Enhancement

1. **Add More Features**
   - Direct messaging
   - Notifications panel
   - Trending hashtags
   - User mentions
   - Post sharing
   - Video uploads

2. **Improve Performance**
   - Implement pagination
   - Add caching with Redis
   - Optimize database queries
   - Lazy load images

3. **Testing**
   - Unit tests with Jest
   - Integration tests
   - E2E tests with Cypress

4. **Deployment**
   - Deploy backend to Railway/Render
   - Deploy frontend to Vercel/Netlify
   - Set up CI/CD pipeline
   - Configure production environment variables

## Support and Resources

- React Documentation: https://react.dev/
- Express.js Guide: https://expressjs.com/
- MongoDB Manual: https://docs.mongodb.com/
- Vite Documentation: https://vitejs.dev/
- Tailwind CSS: https://tailwindcss.com/
- Socket.io: https://socket.io/docs/

## License
MIT License - Feel free to use this project for learning and development.
