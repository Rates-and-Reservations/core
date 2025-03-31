import { Router } from 'express';
import { merchantRoutes, merchantContactRoutes, merchantUserRoutes } from "@/modules/merchant";
import { resourceRoutes, resourceConfigRoutes } from "@/modules/resource";

const router = Router();

router.use('/health', (_req, res) => { res.json({ status: 'UP' }) });

// Merchant routes
router.use('/merchant', merchantRoutes.default);
router.use('/merchant-contact', merchantContactRoutes.default);
router.use('/merchant-user', merchantUserRoutes.default);
router.use('/resource', resourceRoutes.default);
router.use('/resource-config', resourceConfigRoutes.default);

export default router;