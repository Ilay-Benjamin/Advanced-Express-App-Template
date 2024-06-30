import { getHome } from './../controllers/home.controller';
import { Router } from 'express';

const router = Router();
router.get('/home', getHome);

export default router;