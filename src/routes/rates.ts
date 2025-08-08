import { Router } from 'express';
import { validateRequest } from '../middleware/validation';
import { requireRole, requireMerchantAccess } from '../middleware/auth';
import * as rateController from '../controllers/rateController';
import { 
  createRateSchema, 
  updateRateSchema,
  createAddOnSchema,
  updateAddOnSchema,
  rateQuerySchema
} from '@/validators/rateValidators';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Rate:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         price:
 *           type: number
 *         currency:
 *           type: string
 *         durationType:
 *           type: string
 *           enum: [PER_HOUR, PER_DAY, PER_NIGHT, PER_WEEK, PER_MONTH, FIXED_PRICE]
 *         isDefault:
 *           type: boolean
 *         isActive:
 *           type: boolean
 *         isPublished:
 *           type: boolean
 *         taxType:
 *           type: string
 *           enum: [NONE, PERCENTAGE, FIXED]
 *         taxAmount:
 *           type: number
 *         validFrom:
 *           type: string
 *           format: date-time
 *         validTo:
 *           type: string
 *           format: date-time
 *     AddOn:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         price:
 *           type: number
 *         currency:
 *           type: string
 *         showInBooking:
 *           type: boolean
 *         hasInventory:
 *           type: boolean
 *         inventoryCount:
 *           type: integer
 *         isActive:
 *           type: boolean
 */

// Rate CRUD operations
/**
 * @swagger
 * /api/rates:
 *   post:
 *     summary: Create a new rate for a resource
 *     tags: [Rates]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - resourceId
 *               - name
 *               - price
 *               - durationType
 *             properties:
 *               resourceId:
 *                 type: string
 *                 example: "res_123"
 *               name:
 *                 type: string
 *                 example: "Standard Rate"
 *               description:
 *                 type: string
 *                 example: "Standard hourly rate for conference room"
 *               price:
 *                 type: number
 *                 minimum: 0
 *                 example: 50.00
 *               currency:
 *                 type: string
 *                 default: "USD"
 *                 example: "USD"
 *               durationType:
 *                 type: string
 *                 enum: [PER_HOUR, PER_DAY, PER_NIGHT, PER_WEEK, PER_MONTH, FIXED_PRICE]
 *                 example: "PER_HOUR"
 *               isDefault:
 *                 type: boolean
 *                 default: false
 *                 example: true
 *               taxType:
 *                 type: string
 *                 enum: [NONE, PERCENTAGE, FIXED]
 *                 default: "PERCENTAGE"
 *               taxAmount:
 *                 type: number
 *                 minimum: 0
 *                 example: 10
 *               validFrom:
 *                 type: string
 *                 format: date-time
 *               validTo:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Rate created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Rate'
 *                 message:
 *                   type: string
 *                   example: "Rate created successfully"
 *       404:
 *         description: Resource not found
 */
router.post('/', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: createRateSchema }), 
  rateController.createRate
);

/**
 * @swagger
 * /api/rates:
 *   get:
 *     summary: Get all rates for the merchant
 *     tags: [Rates]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: resourceId
 *         schema:
 *           type: string
 *         description: Filter rates by resource ID
 *       - in: query
 *         name: isActive
 *         schema:
 *           type: boolean
 *         description: Filter by active status
 *     responses:
 *       200:
 *         description: Rates retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     allOf:
 *                       - $ref: '#/components/schemas/Rate'
 *                       - type: object
 *                         properties:
 *                           resource:
 *                             type: object
 *                             properties:
 *                               id:
 *                                 type: string
 *                               name:
 *                                 type: string
 */
router.get('/', 
  requireMerchantAccess,
  validateRequest({ query: rateQuerySchema }),
  rateController.getRates
);

/**
 * @swagger
 * /api/rates/{id}:
 *   get:
 *     summary: Get a specific rate
 *     tags: [Rates]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Rate ID
 *     responses:
 *       200:
 *         description: Rate retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   allOf:
 *                     - $ref: '#/components/schemas/Rate'
 *                     - type: object
 *                       properties:
 *                         resource:
 *                           type: object
 *                         addOns:
 *                           type: array
 *                           items:
 *                             $ref: '#/components/schemas/AddOn'
 *       404:
 *         description: Rate not found
 */
router.get('/:id', requireMerchantAccess, rateController.getRate);

/**
 * @swagger
 * /api/rates/{id}:
 *   put:
 *     summary: Update a rate
 *     tags: [Rates]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Rate ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *                 minimum: 0
 *               isDefault:
 *                 type: boolean
 *               isActive:
 *                 type: boolean
 *               isPublished:
 *                 type: boolean
 *               taxAmount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Rate updated successfully
 *       404:
 *         description: Rate not found
 */
router.put('/:id', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: updateRateSchema }), 
  rateController.updateRate
);

/**
 * @swagger
 * /api/rates/{id}:
 *   delete:
 *     summary: Delete a rate
 *     tags: [Rates]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Rate ID
 *     responses:
 *       200:
 *         description: Rate deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Rate deleted successfully"
 *       400:
 *         description: Cannot delete rate with active bookings
 *       404:
 *         description: Rate not found
 */
router.delete('/:id', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  rateController.deleteRate
);

// Add-ons management
/**
 * @swagger
 * /api/rates/add-ons:
 *   post:
 *     summary: Create a new add-on
 *     tags: [Add-ons]
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
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Extra Equipment"
 *               description:
 *                 type: string
 *                 example: "Projector and sound system"
 *               price:
 *                 type: number
 *                 minimum: 0
 *                 example: 25.00
 *               currency:
 *                 type: string
 *                 default: "USD"
 *               showInBooking:
 *                 type: boolean
 *                 default: true
 *               hasInventory:
 *                 type: boolean
 *                 default: false
 *               inventoryCount:
 *                 type: integer
 *                 minimum: 0
 *                 description: "Required if hasInventory is true"
 *               lowStockWarning:
 *                 type: integer
 *                 minimum: 0
 *     responses:
 *       201:
 *         description: Add-on created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/AddOn'
 */
router.post('/add-ons', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: createAddOnSchema }), 
  rateController.createAddOn
);

/**
 * @swagger
 * /api/rates/add-ons:
 *   get:
 *     summary: Get all add-ons for the merchant
 *     tags: [Add-ons]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Add-ons retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     allOf:
 *                       - $ref: '#/components/schemas/AddOn'
 *                       - type: object
 *                         properties:
 *                           _count:
 *                             type: object
 *                             properties:
 *                               RateAddOn:
 *                                 type: integer
 *                                 description: "Number of rates using this add-on"
 */
router.get('/add-ons', requireMerchantAccess, rateController.getAddOns);

/**
 * @swagger
 * /api/rates/add-ons/{id}:
 *   put:
 *     summary: Update an add-on
 *     tags: [Add-ons]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Add-on ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *                 minimum: 0
 *               showInBooking:
 *                 type: boolean
 *               isActive:
 *                 type: boolean
 *               inventoryCount:
 *                 type: integer
 *                 minimum: 0
 *     responses:
 *       200:
 *         description: Add-on updated successfully
 *       404:
 *         description: Add-on not found
 */
router.put('/add-ons/:id', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: updateAddOnSchema }), 
  rateController.updateAddOn
);

/**
 * @swagger
 * /api/rates/add-ons/{id}:
 *   delete:
 *     summary: Delete an add-on
 *     tags: [Add-ons]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Add-on ID
 *     responses:
 *       200:
 *         description: Add-on deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Add-on deleted successfully"
 *       404:
 *         description: Add-on not found
 */
router.delete('/add-ons/:id', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  rateController.deleteAddOn
);

export default router;
