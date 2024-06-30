import { Router } from 'express';
import { getLogin } from '../controllers/login.controller';

const router = Router();
router.get('/login', getLogin);

export default router;