import express from 'express';
import { register, login, getMe, logout, verifyEmail } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', protect, getMe);
router.post('/verify-email', verifyEmail);

export default router;
