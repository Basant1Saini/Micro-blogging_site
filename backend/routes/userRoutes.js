import express from 'express';
import {
  getUserProfile,
  updateUserProfile,
  followUser,
  unfollowUser,
  searchUsers,
  getFollowers,
  getFollowing
} from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.get('/search', protect, searchUsers);
router.get('/:id', protect, getUserProfile);
router.put('/:id', protect, upload.single('profilePicture'), updateUserProfile);
router.post('/:id/follow', protect, followUser);
router.delete('/:id/follow', protect, unfollowUser);
router.get('/:id/followers', protect, getFollowers);
router.get('/:id/following', protect, getFollowing);

export default router;
