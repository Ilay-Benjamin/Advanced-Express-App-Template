import { getError } from './../controllers/error.controller';
import { Router } from 'express';
const router = Router();
router.get('/error', getError);
export default router;
