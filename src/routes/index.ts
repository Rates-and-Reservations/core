import { Router } from 'express';
import merchantRouter from './merchant.routes';

const router = Router();

router.use('/health', (_req, res) => { res.json({ status: 'UP' }) });
router.use('/merchant', merchantRouter);

export default router;