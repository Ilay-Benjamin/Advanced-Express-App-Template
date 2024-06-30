import { Router } from 'express';
import { getSpecial } from '../controllers/special.controller';
import { auth } from '../middlewares/auth.middleware';
const router = Router();
router.get('/special', auth, getSpecial);
export default router;
