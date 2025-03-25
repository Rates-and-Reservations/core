import { Router } from 'express';

const router = Router();

router.use('/health', (_req, res) => { res.json({ status: 'UP' }) });



export default router;