# Micro-blogging Site

A full-stack social media platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring real-time updates, user authentication, and modern UI/UX.

## 🚀 Features

- **User Authentication & Authorization**
  - JWT-based authentication
  - Secure password hashing with bcrypt
  - Protected routes and API endpoints
  - Email verification

- **User Profiles**
  - Customizable profile pages
  - Profile picture upload
  - Bio and personal information
  - Follow/Unfollow functionality

- **Posts & Content**
  - Create, read, update, delete posts
  - Image/video uploads
  - Like and comment on posts
  - Share posts
  - Hashtag support

- **Real-time Features**
  - Live notifications
  - Real-time messaging
  - Online status indicators

- **Social Interactions**
  - News feed with personalized content
  - Search users and posts
  - Trending topics
  - User suggestions

## 🛠️ Tech Stack

### Frontend
- **React 18+** - UI library
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **Axios** - HTTP client
- **TanStack Query (React Query)** - Server state management
- **Zustand** - Client state management
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Component library
- **Socket.io-client** - Real-time communication
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT (jsonwebtoken)** - Authentication
- **bcrypt** - Password hashing
- **Socket.io** - Real-time bidirectional communication
- **Cloudinary** - Media storage and optimization
- **Multer** - File upload handling
- **Express Validator** - Input validation
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📋 Prerequisites

Before running this project, ensure you have:

- Node.js (v18 or higher)
- MongoDB (v6 or higher) or MongoDB Atlas account
- npm or yarn package manager
- Cloudinary account (for media uploads)

## 🔧 Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd Micro-blogging_site
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/microblog
# Or for MongoDB Atlas:
# MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/microblog

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email Configuration (Optional - for email verification)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Frontend URL
CLIENT_URL=http://localhost:5173
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

## 🚀 Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

### Production Build

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

## 📁 Project Structure

```
Micro-blogging_site/
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── cloudinary.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── postController.js
│   │   └── commentController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── upload.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   ├── Comment.js
│   │   └── Notification.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── postRoutes.js
│   │   └── commentRoutes.js
│   ├── utils/
│   │   ├── generateToken.js
│   │   └── sendEmail.js
│   ├── socket/
│   │   └── socket.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── layout/
│   │   │   ├── post/
│   │   │   └── user/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Explore.jsx
│   │   ├── hooks/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── store/
│   │   │   └── authStore.js
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── README.md
```

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register          - Register new user
POST   /api/auth/login             - Login user
POST   /api/auth/logout            - Logout user
GET    /api/auth/me                - Get current user
POST   /api/auth/verify-email      - Verify email
```

### Users
```
GET    /api/users/:id              - Get user profile
PUT    /api/users/:id              - Update user profile
POST   /api/users/:id/follow       - Follow user
DELETE /api/users/:id/follow       - Unfollow user
GET    /api/users/:id/followers    - Get followers
GET    /api/users/:id/following    - Get following
GET    /api/users/search           - Search users
```

### Posts
```
GET    /api/posts                  - Get all posts (feed)
GET    /api/posts/:id              - Get single post
POST   /api/posts                  - Create post
PUT    /api/posts/:id              - Update post
DELETE /api/posts/:id              - Delete post
POST   /api/posts/:id/like         - Like post
DELETE /api/posts/:id/like         - Unlike post
GET    /api/posts/user/:userId     - Get user posts
```

### Comments
```
GET    /api/posts/:postId/comments - Get post comments
POST   /api/posts/:postId/comments - Create comment
PUT    /api/comments/:id           - Update comment
DELETE /api/comments/:id           - Delete comment
```

### Notifications
```
GET    /api/notifications          - Get user notifications
PUT    /api/notifications/:id/read - Mark as read
DELETE /api/notifications/:id      - Delete notification
```

## 🔐 Environment Variables

### Backend Required Variables
| Variable | Description | Example |
|----------|-------------|----------|
| PORT | Server port | 5000 |
| MONGO_URI | MongoDB connection string | mongodb://localhost:27017/microblog |
| JWT_SECRET | Secret key for JWT | random_secret_key |
| JWT_EXPIRE | JWT expiration time | 7d |
| CLOUDINARY_CLOUD_NAME | Cloudinary cloud name | your_cloud_name |
| CLOUDINARY_API_KEY | Cloudinary API key | your_api_key |
| CLOUDINARY_API_SECRET | Cloudinary API secret | your_api_secret |
| CLIENT_URL | Frontend URL | http://localhost:5173 |

### Frontend Required Variables
| Variable | Description | Example |
|----------|-------------|----------|
| VITE_API_URL | Backend API URL | http://localhost:5000/api |
| VITE_SOCKET_URL | Socket.io server URL | http://localhost:5000 |

## 📦 Package Scripts

### Backend
```json
{
  "dev": "nodemon server.js",
  "start": "node server.js",
  "test": "jest"
}
```

### Frontend
```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext js,jsx"
}
```

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## 🚢 Deployment

### Backend Deployment (Railway/Render/Heroku)

1. Set environment variables in your hosting platform
2. Deploy from GitHub repository
3. Ensure MongoDB Atlas is configured

### Frontend Deployment (Vercel/Netlify)

1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables
4. Configure redirects for SPA routing

### Vercel Configuration (vercel.json)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt (10 rounds)
- HTTP-only cookies for token storage
- CORS configuration
- Helmet.js for security headers
- Input validation and sanitization
- Rate limiting on API endpoints
- XSS protection
- MongoDB injection prevention

## 🎨 UI/UX Features

- Responsive design (mobile-first)
- Dark/Light mode toggle
- Infinite scroll for feeds
- Image lazy loading
- Optimistic UI updates
- Loading skeletons
- Toast notifications
- Error boundaries

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error:**
```bash
# Ensure MongoDB is running
mongod --dbpath /path/to/data

# Or check MongoDB Atlas connection string
```

**Port Already in Use:**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

**CORS Errors:**
- Verify CLIENT_URL in backend .env matches frontend URL
- Check CORS configuration in server.js

**Cloudinary Upload Fails:**
- Verify Cloudinary credentials
- Check file size limits
- Ensure proper file format

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Socket.io Documentation](https://socket.io/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Authors

Your Name - [@yourhandle](https://twitter.com/yourhandle)

## 🙏 Acknowledgments

- React community for excellent documentation
- MongoDB team for the robust database
- All contributors who help improve this project

---

**Note:** This is a learning project. For production use, implement additional security measures, comprehensive testing, and proper error handling.