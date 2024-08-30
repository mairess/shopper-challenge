import { Router } from 'express';
import measureRouter from './measureRoute';
import customerRouter from './customerRoute';

const router = Router();

router.use('/upload', measureRouter);
router.use('/confirm', measureRouter);
router.use('/', customerRouter);

export default router;
