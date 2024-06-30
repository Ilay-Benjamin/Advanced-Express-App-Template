import { Router } from 'express';
import { getProfile } from '../controllers/profile.controller';
import { auth } from '../middlewares/auth.middleware';
const router = Router();
router.get('/profile', auth, getProfile);
export default router;
