import express from 'express';
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
  getUserPosts
} from '../controllers/postController.js';
import { protect } from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.route('/')
  .get(protect, getPosts)
  .post(protect, upload.array('images', 4), createPost);

router.route('/:id')
  .get(protect, getPost)
  .put(protect, updatePost)
  .delete(protect, deletePost);

router.post('/:id/like', protect, likePost);
router.delete('/:id/like', protect, unlikePost);
router.get('/user/:userId', protect, getUserPosts);

export default router;
