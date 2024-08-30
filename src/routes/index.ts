import { Router } from 'express';
import measureRouter from './measureRoute';

const router = Router();

router.use('/upload', measureRouter);

export default router;
