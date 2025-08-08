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

/**
 * @swagger
 * /api/merchants/contacts:
 *   post:
 *     summary: Create a new merchant contact
 *     tags: [Merchant Contacts]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - phone
 *               - address
 *               - city
 *               - postcode
 *             properties:
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               postcode:
 *                 type: string
 *     responses:
 *       201:
 *         description: Merchant contact created successfully
 */
router.post('/contacts', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: createMerchantContactSchema }),
  merchantController.createMerchantContact
);

/**
 * @swagger
 * /api/merchants/contacts:
 *   get:
 *     summary: Get merchant contacts
 *     tags: [Merchant Contacts]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Merchant contacts retrieved successfully
 */
router.get('/contacts', requireMerchantAccess, merchantController.getMerchantContacts);

/**
 * @swagger
 * /api/merchants/contacts/{id}:
 *   put:
 *     summary: Update a merchant contact
 *     tags: [Merchant Contacts]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Merchant contact updated successfully
 */
router.put('/contacts/:id', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: updateMerchantContactSchema }),
  merchantController.updateMerchantContact
);

/** * @swagger
 * /api/merchants/contacts/{id}:
 *   delete:
 *     summary: Delete a merchant contact
 *     tags: [Merchant Contacts]
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
 *         description: Merchant contact deleted successfully
 */
router.delete('/contacts/:id', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  merchantController.deleteMerchantContact
);

// Merchant Users (Team Management)
/**
 * @swagger
 * /api/merchants/users:
 *   post:
 *     summary: Invite a new user to the merchant
 *     tags: [Merchant Users]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - role
 *             properties:
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [OWNER, ADMIN, USER]
 *     responses:
 *       201:
 *         description: User invited successfully
 *       409:
 *         description: User already exists in the merchant
 *       500:
 *         description: Failed to invite user 
 */
router.post('/users', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: inviteMerchantUserSchema }),
  merchantController.inviteMerchantUser
);

/**
 * @swagger
 * /api/merchants/users:
 *   get:
 *     summary: Get all users in the merchant
 *     tags: [Merchant Users]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Users retrieved successfully 
 */
router.get('/users', requireMerchantAccess, merchantController.getMerchantUsers);

/**
 * @swagger
 * /api/merchants/users/{id}:
 *   put:
 *     summary: Update a merchant user
 *     tags: [Merchant Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: User updated successfully
 */
router.put('/users/:id', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: updateMerchantUserSchema }),
  merchantController.updateMerchantUser
);

/**
 * @swagger
 * /api/merchants/users/{id}:
 *   delete:
 *     summary: Remove a user from the merchant
 *     tags: [Merchant Users]
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
 *         description: User removed successfully
 */
router.delete('/users/:id', 
  requireMerchantAccess,
  requireRole(['OWNER']),
  merchantController.removeMerchantUser
);

// Merchant Assets
/**
 * @swagger
 * /api/merchants/assets:
 *   post:
 *     summary: Upload an asset for the merchant
 *     tags: [Merchant Assets]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Asset uploaded successfully
 */
router.post('/assets', requireMerchantAccess, merchantController.uploadMerchantAsset);

/**
 * @swagger
 * /api/merchants/assets:
 *   get:
 *     summary: Get all assets for the merchant
 *     tags: [Merchant Assets]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Assets retrieved successfully
 */
router.get('/assets', requireMerchantAccess, merchantController.getMerchantAssets);

/**
 * @swagger
 * /api/merchants/assets/{id}:
 *   delete:
 *     summary: Remove an asset from the merchant
 *     tags: [Merchant Assets]
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
 *         description: Asset removed successfully
 */
router.delete('/assets/:id', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  merchantController.deleteMerchantAsset
);

export default router;