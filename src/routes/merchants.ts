import { Router } from 'express';
import { validateRequest } from '@/middleware/validation';
import { requireRole, requireMerchantAccess } from '@/middleware/auth';
import * as merchantController from '@/controllers/merchantController';
import { 
  createMerchantSchema, 
  updateMerchantSchema,
  createMerchantContactSchema,
  updateMerchantContactSchema,
  inviteMerchantUserSchema,
  updateMerchantUserSchema
} from '@/validators/merchantValidators';

const router = Router();

// Merchant CRUD operations
/**
 * @swagger
 * /api/merchants:
 *   post:
 *     summary: Create a new merchant
 *     tags: [Merchants]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - tradingName
 *               - country
 *               - businessType
 *               - industry
 *               - category
 *             properties:
 *               name:
 *                 type: string
 *               tradingName:
 *                 type: string
 *               country:
 *                 type: string
 *               businessType:
 *                 type: string
 *                 enum: [SOLE_TRADER, LIMITED_COMPANY, PARTNERSHIP]
 *               industry:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Merchant created successfully
 */
router.post('/', validateRequest({ body: createMerchantSchema }), merchantController.createMerchant);

/**
 * @swagger
 * /api/merchants:
 *   get:
 *     summary: Get merchant information
 *     tags: [Merchants]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Merchant information retrieved successfully
 */
router.get('/', requireMerchantAccess, merchantController.getMerchant);

/**
 * @swagger
 * /api/merchants:
 *   put:
 *     summary: Update merchant information
 *     tags: [Merchants]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Merchant updated successfully
 */
router.put('/', 
  requireMerchantAccess, 
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: updateMerchantSchema }), 
  merchantController.updateMerchant
);

/**
 * @swagger
 * /api/merchants:
 *   delete:
 *     summary: Delete merchant
 *     tags: [Merchants]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Merchant deleted successfully
 */
router.delete('/', 
  requireMerchantAccess, 
  requireRole(['OWNER']), 
  merchantController.deleteMerchant
);

// Merchant Contacts
router.post('/contacts', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: createMerchantContactSchema }),
  merchantController.createMerchantContact
);

router.get('/contacts', requireMerchantAccess, merchantController.getMerchantContacts);

router.put('/contacts/:id', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: updateMerchantContactSchema }),
  merchantController.updateMerchantContact
);

router.delete('/contacts/:id', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  merchantController.deleteMerchantContact
);

// Merchant Users (Team Management)
router.post('/users', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: inviteMerchantUserSchema }),
  merchantController.inviteMerchantUser
);

router.get('/users', requireMerchantAccess, merchantController.getMerchantUsers);

router.put('/users/:id', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: updateMerchantUserSchema }),
  merchantController.updateMerchantUser
);

router.delete('/users/:id', 
  requireMerchantAccess,
  requireRole(['OWNER']),
  merchantController.removeMerchantUser
);

// Merchant Assets
router.post('/assets', requireMerchantAccess, merchantController.uploadMerchantAsset);
router.get('/assets', requireMerchantAccess, merchantController.getMerchantAssets);
router.delete('/assets/:id', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  merchantController.deleteMerchantAsset
);

export default router;