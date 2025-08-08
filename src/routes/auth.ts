import { Router } from 'express';
import { validateRequest } from '@/middleware/validation';
import { authRateLimit } from '@/middleware/rateLimit';
import { clerkAuthMiddleware } from '@/middleware/auth';
import * as authController from '@/controllers/authController';
import { 
  createApiKeySchema,
  updateApiKeySchema 
} from '@/validators/authValidators';

const router = Router();

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Get current user information
 *     tags: [Authentication]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: User information retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get('/me', clerkAuthMiddleware, authController.getCurrentUser);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Logout user
 *     tags: [Authentication]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: User logged out successfully
 */
router.post('/logout', authRateLimit, clerkAuthMiddleware, authController.logout);

/**
 * @swagger
 * /api/auth/api-keys:
 *   post:
 *     summary: Create a new API key
 *     tags: [API Keys]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               label:
 *                 type: string
 *               description:
 *                 type: string
 *               scopes:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: API key created successfully
 */
router.post('/api-keys', 
  authRateLimit,
  clerkAuthMiddleware, 
  validateRequest({ body: createApiKeySchema }), 
  authController.createApiKey
);

/**
 * @swagger
 * /api/auth/api-keys:
 *   get:
 *     summary: Get all API keys for the merchant
 *     tags: [API Keys]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: API keys retrieved successfully
 */
router.get('/api-keys', clerkAuthMiddleware, authController.getApiKeys);

/**
 * @swagger
 * /api/auth/api-keys/{id}:
 *   put:
 *     summary: Update an API key
 *     tags: [API Keys]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: API key updated successfully
 */
router.put('/api-keys/:id', 
  authRateLimit,
  clerkAuthMiddleware, 
  validateRequest({ body: updateApiKeySchema }), 
  authController.updateApiKey
);

/**
 * @swagger
 * /api/auth/api-keys/{id}:
 *   delete:
 *     summary: Delete an API key
 *     tags: [API Keys]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: API key deleted successfully
 */
router.delete('/api-keys/:id', 
  authRateLimit, 
  clerkAuthMiddleware, 
  authController.deleteApiKey
);

export default router;
