import express from 'express';
import {
  createComment,
  getComments,
  updateComment,
  deleteComment
} from '../controllers/commentController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/posts/:postId/comments')
  .get(protect, getComments)
  .post(protect, createComment);

router.route('/:id')
  .put(protect, updateComment)
  .delete(protect, deleteComment);

export default router;
