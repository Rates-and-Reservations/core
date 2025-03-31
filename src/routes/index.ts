import { Router } from 'express';
import { merchantRoutes, merchantContactRoutes } from "@/modules/merchant";

const router = Router();

router.use('/health', (_req, res) => { res.json({ status: 'UP' }) });
router.use('/merchant', merchantRoutes.default);
router.use('/merchant-contact', merchantContactRoutes.default);

export default router;