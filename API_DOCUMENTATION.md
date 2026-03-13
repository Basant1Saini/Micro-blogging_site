# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
Most endpoints require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

---

## Authentication Endpoints

### Register User
**POST** `/auth/register`

**Request Body:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123",
  "fullName": "John Doe"
}
```

**Response:** `201 Created`
```json
{
  "_id": "user_id",
  "username": "johndoe",
  "email": "john@example.com",
  "fullName": "John Doe",
  "token": "jwt_token"
}
```

---

### Login User
**POST** `/auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:** `200 OK`
```json
{
  "_id": "user_id",
  "username": "johndoe",
  "email": "john@example.com",
  "fullName": "John Doe",
  "profilePicture": "url",
  "token": "jwt_token"
}
```

---

### Get Current User
**GET** `/auth/me`

**Headers:** `Authorization: Bearer <token>`

**Response:** `200 OK`
```json
{
  "_id": "user_id",
  "username": "johndoe",
  "email": "john@example.com",
  "fullName": "John Doe",
  "bio": "User bio",
  "profilePicture": "url",
  "followers": [],
  "following": []
}
```

---

### Logout
**POST** `/auth/logout`

**Response:** `200 OK`
```json
{
  "message": "Logged out successfully"
}
```

---

### Verify Email
**POST** `/auth/verify-email`

**Request Body:**
```json
{
  "token": "verification_token"
}
```

**Response:** `200 OK`
```json
{
  "message": "Email verified successfully"
}
```

---

## User Endpoints

### Get User Profile
**GET** `/users/:id`

**Headers:** `Authorization: Bearer <token>`

**Response:** `200 OK`
```json
{
  "_id": "user_id",
  "username": "johndoe",
  "fullName": "John Doe",
  "bio": "User bio",
  "profilePicture": "url",
  "coverPhoto": "url",
  "followers": [...],
  "following": [...],
  "createdAt": "timestamp"
}
```

---

### Update User Profile
**PUT** `/users/:id`

**Headers:** 
- `Authorization: Bearer <token>`
- `Content-Type: multipart/form-data` (if uploading image)

**Request Body:**
```json
{
  "fullName": "John Updated",
  "bio": "New bio",
  "username": "johnupdated"
}
```

**Response:** `200 OK`
```json
{
  "_id": "user_id",
  "username": "johnupdated",
  "fullName": "John Updated",
  "bio": "New bio",
  ...
}
```

---

### Follow User
**POST** `/users/:id/follow`

**Headers:** `Authorization: Bearer <token>`

**Response:** `200 OK`
```json
{
  "message": "User followed successfully"
}
```

---

### Unfollow User
**DELETE** `/users/:id/follow`

**Headers:** `Authorization: Bearer <token>`

**Response:** `200 OK`
```json
{
  "message": "User unfollowed successfully"
}
```

---

### Get Followers
**GET** `/users/:id/followers`

**Headers:** `Authorization: Bearer <token>`

**Response:** `200 OK`
```json
[
  {
    "_id": "user_id",
    "username": "follower1",
    "fullName": "Follower One",
    "profilePicture": "url"
  }
]
```

---

### Get Following
**GET** `/users/:id/following`

**Headers:** `Authorization: Bearer <token>`

**Response:** `200 OK`
```json
[
  {
    "_id": "user_id",
    "username": "following1",
    "fullName": "Following One",
    "profilePicture": "url"
  }
]
```

---

### Search Users
**GET** `/users/search?query=john`

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `query` (required): Search term

**Response:** `200 OK`
```json
[
  {
    "_id": "user_id",
    "username": "johndoe",
    "fullName": "John Doe",
    "profilePicture": "url"
  }
]
```

---

## Post Endpoints

### Get All Posts (Feed)
**GET** `/posts?page=1&limit=10`

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Posts per page (default: 10)

**Response:** `200 OK`
```json
{
  "posts": [
    {
      "_id": "post_id",
      "user": {
        "_id": "user_id",
        "username": "johndoe",
        "fullName": "John Doe",
        "profilePicture": "url"
      },
      "content": "Post content",
      "images": ["url1", "url2"],
      "likes": ["user_id1", "user_id2"],
      "comments": [...],
      "hashtags": ["#tag1", "#tag2"],
      "createdAt": "timestamp"
    }
  ],
  "currentPage": 1,
  "totalPages": 5,
  "totalPosts": 50
}
```

---

### Get Single Post
**GET** `/posts/:id`

**Headers:** `Authorization: Bearer <token>`

**Response:** `200 OK`
```json
{
  "_id": "post_id",
  "user": {...},
  "content": "Post content",
  "images": [],
  "likes": [],
  "comments": [...],
  "createdAt": "timestamp"
}
```

---

### Create Post
**POST** `/posts`

**Headers:** 
- `Authorization: Bearer <token>`
- `Content-Type: multipart/form-data` (if uploading images)

**Request Body:**
```json
{
  "content": "This is my new post #awesome"
}
```

**Response:** `201 Created`
```json
{
  "_id": "post_id",
  "user": {...},
  "content": "This is my new post #awesome",
  "images": [],
  "likes": [],
  "comments": [],
  "hashtags": ["#awesome"],
  "createdAt": "timestamp"
}
```

---

### Update Post
**PUT** `/posts/:id`

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "content": "Updated post content"
}
```

**Response:** `200 OK`
```json
{
  "_id": "post_id",
  "content": "Updated post content",
  "isEdited": true,
  ...
}
```

---

### Delete Post
**DELETE** `/posts/:id`

**Headers:** `Authorization: Bearer <token>`

**Response:** `200 OK`
```json
{
  "message": "Post deleted successfully"
}
```

---

### Like Post
**POST** `/posts/:id/like`

**Headers:** `Authorization: Bearer <token>`

**Response:** `200 OK`
```json
{
  "message": "Post liked successfully",
  "likes": 5
}
```

---

### Unlike Post
**DELETE** `/posts/:id/like`

**Headers:** `Authorization: Bearer <token>`

**Response:** `200 OK`
```json
{
  "message": "Post unliked successfully",
  "likes": 4
}
```

---

### Get User Posts
**GET** `/posts/user/:userId`

**Headers:** `Authorization: Bearer <token>`

**Response:** `200 OK`
```json
[
  {
    "_id": "post_id",
    "user": {...},
    "content": "Post content",
    ...
  }
]
```

---

## Comment Endpoints

### Get Post Comments
**GET** `/comments/posts/:postId/comments`

**Headers:** `Authorization: Bearer <token>`

**Response:** `200 OK`
```json
[
  {
    "_id": "comment_id",
    "user": {
      "_id": "user_id",
      "username": "johndoe",
      "fullName": "John Doe",
      "profilePicture": "url"
    },
    "post": "post_id",
    "content": "Great post!",
    "likes": [],
    "createdAt": "timestamp"
  }
]
```

---

### Create Comment
**POST** `/comments/posts/:postId/comments`

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "content": "This is a comment"
}
```

**Response:** `201 Created`
```json
{
  "_id": "comment_id",
  "user": {...},
  "post": "post_id",
  "content": "This is a comment",
  "likes": [],
  "createdAt": "timestamp"
}
```

---

### Update Comment
**PUT** `/comments/:id`

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "content": "Updated comment"
}
```

**Response:** `200 OK`
```json
{
  "_id": "comment_id",
  "content": "Updated comment",
  ...
}
```

---

### Delete Comment
**DELETE** `/comments/:id`

**Headers:** `Authorization: Bearer <token>`

**Response:** `200 OK`
```json
{
  "message": "Comment deleted successfully"
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "message": "Error description"
}
```

### 401 Unauthorized
```json
{
  "message": "Not authorized, no token"
}
```

### 403 Forbidden
```json
{
  "message": "Not authorized"
}
```

### 404 Not Found
```json
{
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "error": "Server Error"
}
```

---

## Rate Limiting

API endpoints may be rate-limited to prevent abuse. If you exceed the rate limit, you'll receive a `429 Too Many Requests` response.

---

## File Upload

When uploading files (images), use `multipart/form-data` content type:

**Example using FormData:**
```javascript
const formData = new FormData();
formData.append('content', 'Post with image');
formData.append('images', fileInput.files[0]);

fetch('/api/posts', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`
  },
  body: formData
});
```

**File Restrictions:**
- Max file size: 10MB
- Allowed types: image/jpeg, image/png, image/gif, video/mp4
- Max images per post: 4

---

## Pagination

Endpoints that return lists support pagination:

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)

**Response includes:**
- `currentPage`: Current page number
- `totalPages`: Total number of pages
- `totalPosts`: Total number of items

---

## WebSocket Events (Socket.io)

### Client → Server

**user-online**
```javascript
socket.emit('user-online', userId);
```

**send-notification**
```javascript
socket.emit('send-notification', {
  recipientId: 'user_id',
  type: 'like',
  message: 'Someone liked your post'
});
```

### Server → Client

**receive-notification**
```javascript
socket.on('receive-notification', (data) => {
  console.log('New notification:', data);
});
```

**user-status**
```javascript
socket.on('user-status', ({ userId, status }) => {
  console.log(`User ${userId} is ${status}`);
});
```

---

## Testing with cURL

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"johndoe","email":"john@example.com","password":"password123","fullName":"John Doe"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

### Get Posts
```bash
curl -X GET http://localhost:5000/api/posts \
  -H "Authorization: Bearer YOUR_TOKEN"
```

---

## Best Practices

1. Always include the Authorization header for protected routes
2. Handle errors gracefully on the client side
3. Validate input before sending requests
4. Use pagination for large datasets
5. Implement proper error handling
6. Cache responses when appropriate
7. Use WebSocket for real-time features
8. Compress images before uploading
9. Implement retry logic for failed requests
10. Log errors for debugging

---

For more information, see the main README.md file.
