import { Router } from 'express';
import measureRouter from './measureRoute';

const router = Router();

router.use('/upload', measureRouter);
router.use('/confirm', measureRouter);

export default router;
