import { Router } from 'express';
import { merchantRoutes, merchantContactRoutes, merchantUserRoutes } from "@/modules/merchant";

const router = Router();

router.use('/health', (_req, res) => { res.json({ status: 'UP' }) });

// Merchant routes
router.use('/merchant', merchantRoutes.default);
router.use('/merchant-contact', merchantContactRoutes.default);
router.use('/merchant-user', merchantUserRoutes.default);

export default router;