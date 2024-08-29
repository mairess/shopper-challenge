import { Router } from 'express';
import measureRouter from './measureRoute';

const router = Router();

router.use('/measures', measureRouter);

export default router;
