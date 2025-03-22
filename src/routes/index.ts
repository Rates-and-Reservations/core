import { Router } from 'express';
import merchantRouter from './onboarding/merchant.routes';
import merchantContactRouter from './onboarding/merchant-contacts.routes';
import merchantUserRouter from './onboarding/merchant-users.routes';

const router = Router();

router.use('/health', (_req, res) => { res.json({ status: 'UP' }) });
router.use('/merchant', merchantRouter);
router.use('/merchant', merchantContactRouter);
router.use('/merchant', merchantUserRouter);

export default router;