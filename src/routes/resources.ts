import { Router } from 'express';
import { validateRequest } from '@/middleware/validation';
import { requireRole, requireMerchantAccess } from '@/middleware/auth';
import * as resourceController from '@/controllers/resourceController';
import {
  createResourceSchema,
  updateResourceSchema,
  createAvailabilityBlockSchema,
  updateAvailabilityBlockSchema,
  createAvailabilityRuleSchema,
  updateAvailabilityRuleSchema,
  createBookingConstraintSchema,
  updateBookingConstraintSchema,
  resourceQuerySchema
} from '@/validators/resourceValidators';

const router = Router();

// Resource CRUD operations
/**
 * @swagger
 * /api/resources:
 *   post:
 *     summary: Create a new resource
 *     tags: [Resources]
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
 *               - capacity
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               capacity:
 *                 type: integer
 *                 minimum: 1
 *               minDuration:
 *                 type: integer
 *               maxDuration:
 *                 type: integer
 *               bufferTime:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Resource created successfully
 */
router.post('/',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: createResourceSchema }),
  resourceController.createResource
);

/**
 * @swagger
 * /api/resources:
 *   get:
 *     summary: Get all resources for the merchant
 *     tags: [Resources]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 20
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *       - in: query
 *         name: isActive
 *         schema:
 *           type: boolean
 *     responses:
 *       200:
 *         description: Resources retrieved successfully
 */
router.get('/',
  requireMerchantAccess,
  validateRequest({ query: resourceQuerySchema }),
  resourceController.getResources
);

/**
 * @swagger
 * /api/resources/{id}:
 *   get:
 *     summary: Get a specific resource
 *     tags: [Resources]
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
 *         description: Resource retrieved successfully
 */
router.get('/:id', requireMerchantAccess, resourceController.getResource);

/**
 * @swagger
 * /api/resources/{id}:
 *   put:
 *     summary: Update a resource
 *     tags: [Resources]
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
 *         description: Resource updated successfully
 */
router.put('/:id',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: updateResourceSchema }),
  resourceController.updateResource
);

/**
 * @swagger
 * /api/resources/{id}:
 *   delete:
 *     summary: Delete a resource
 *     tags: [Resources]
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
 *         description: Resource deleted successfully
 */
router.delete('/:id',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  resourceController.deleteResource
);

// Resource Availability Management
/**
 * @swagger
 * /api/resources/{id}/availability:
 *   get:
 *     summary: Check resource availability
 *     tags: [Resource Availability]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: startDate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: endDate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: Availability retrieved successfully
 */
router.get('/:id/availability', requireMerchantAccess, resourceController.getResourceAvailability);

// Availability Blocks
/**
 * @swagger
 * /api/resources/{id}/availability-blocks:
 *   post:
 *     summary: Create an availability block for a resource
 *     tags: [Availability Blocks]
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
 *             required:
 *               - startTime
 *               - endTime
 *             properties:
 *               startTime:
 *                 type: string
 *                 format: date-time
 *               endTime:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Availability block created successfully
 */
router.post('/:id/availability-blocks',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: createAvailabilityBlockSchema }),
  resourceController.createAvailabilityBlock
);

/**
 * @swagger
 * /api/resources/{id}/availability-blocks:
 *   get:
 *     summary: Get availability blocks for a resource
 *     tags: [Availability Blocks]
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
 *         description: Availability blocks retrieved successfully
 */
router.get('/:id/availability-blocks', requireMerchantAccess, resourceController.getAvailabilityBlocks);

/**
 * @swagger
 * /api/resources/{id}/availability-blocks/{blockId}:
 *   put:
 *     summary: Update an availability block for a resource
 *     tags: [Availability Blocks]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: blockId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - startTime
 *               - endTime
 *             properties:
 *               startTime:
 *                 type: string
 *                 format: date-time
 *               endTime:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Availability block updated successfully
 */
router.put('/:id/availability-blocks/:blockId',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: updateAvailabilityBlockSchema }),
  resourceController.updateAvailabilityBlock
);

/**
 * @swagger
 * /api/resources/{id}/availability-blocks/{blockId}:
 *   delete:
 *     summary: Delete an availability block for a resource
 *     tags: [Availability Blocks]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: blockId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Availability block deleted successfully
 */
router.delete('/:id/availability-blocks/:blockId',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  resourceController.deleteAvailabilityBlock
);

// Availability Rules
/**
 * @swagger
 * /api/resources/{id}/availability-rules:
 *   post:
 *     summary: Create an availability rule for a resource
 *     tags: [Availability Rules]
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
 *             required:
 *               - dayOfWeek
 *               - startTime
 *               - endTime
 *             properties:
 *               dayOfWeek:
 *                 type: string
 *                 enum: [MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY]
 *               startTime:
 *                 type: string
 *                 format: time
 *               endTime:
 *                 type: string
 *                 format: time
 *     responses:
 *       201:
 *         description: Availability rule created successfully 
 */
router.post('/:id/availability-rules',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: createAvailabilityRuleSchema }),
  resourceController.createAvailabilityRule
);

/**
 * @swagger
 * /api/resources/{id}/availability-rules:
 *   get:
 *     summary: Get availability rules for a resource
 *     tags: [Availability Rules]
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
 *         description: Availability rules retrieved successfully
 */
router.get('/:id/availability-rules', requireMerchantAccess, resourceController.getAvailabilityRules);

/**
 * @swagger
 * /api/resources/{id}/availability-rules/{ruleId}:
 *   put:
 *     summary: Update an availability rule for a resource
 *     tags: [Availability Rules]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: ruleId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - dayOfWeek
 *               - startTime
 *               - endTime
 *             properties:
 *               dayOfWeek:
 *                 type: string
 *                 enum: [MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY]
 *               startTime:
 *                 type: string
 *                 format: time
 *               endTime:
 *                 type: string
 *                 format: time
 *    responses:
 *      200:
 *        description: Availability rule updated successfully
 */
router.put('/:id/availability-rules/:ruleId',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: updateAvailabilityRuleSchema }),
  resourceController.updateAvailabilityRule
);

/**
 * @swagger
 * /api/resources/{id}/availability-rules/{ruleId}:
 *   delete:
 *     summary: Delete an availability rule for a resource
 *     tags: [Availability Rules]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: ruleId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Availability rule deleted successfully
 */
router.delete('/:id/availability-rules/:ruleId',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  resourceController.deleteAvailabilityRule
);

// Booking Constraints
/**
 * @swagger
 * /api/resources/{id}/constraints:
 *   post:
 *     summary: Create a booking constraint for a resource
 *     tags: [Booking Constraints]
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
 *             required:
 *               - key
 *               - value
 *             properties:
 *               key:
 *                type: string
 *               value:
 *                type: string
 *     responses:
 *       201:
 *         description: Booking constraint created successfully
 */
router.post('/:id/constraints',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: createBookingConstraintSchema }),
  resourceController.createBookingConstraint
);

/**
 * @swagger
 * /api/resources/{id}/constraints:
 *   get:
 *     summary: Get booking constraints for a resource
 *     tags: [Booking Constraints]
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
 *         description: Booking constraints retrieved successfully
 */
router.get('/:id/constraints', requireMerchantAccess, resourceController.getBookingConstraints);

/**
 * @swagger
 * /api/resources/{id}/constraints/{constraintId}:
 *   put:
 *     summary: Update a booking constraint for a resource
 *     tags: [Booking Constraints]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: constraintId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - key
 *               - value
 *             properties:
 *               key:
 *                 type: string
 *               value:
 *                 type: string
 *     responses:
 *       200:
 *         description: Booking constraint updated successfully
 */
router.put('/:id/constraints/:constraintId',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: updateBookingConstraintSchema }),
  resourceController.updateBookingConstraint
);

/**
 * @swagger
 * /api/resources/{id}/constraints/{constraintId}:
 *   delete:
 *     summary: Delete a booking constraint for a resource
 *     tags: [Booking Constraints]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: constraintId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Booking constraint deleted successfully
 */
router.delete('/:id/constraints/:constraintId',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  resourceController.deleteBookingConstraint
);

// Resource Assets
/**
 * @swagger
 * /api/resources/{id}/assets:
 *   post:
 *     summary: Upload an asset for a resource
 *     tags: [Resource Assets]
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
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *    responses:
 *      201:
 *        description: Asset uploaded successfully
 */
router.post('/:id/assets',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  resourceController.uploadResourceAsset
);

/**
 * @swagger
 * /api/resources/{id}/assets:
 *   get:
 *     summary: Get assets for a resource
 *     tags: [Resource Assets]
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
 *         description: Assets retrieved successfully
 */
router.get('/:id/assets', requireMerchantAccess, resourceController.getResourceAssets);

/**
 * @swagger
 * /api/resources/{id}/assets/{assetId}:
 *   put:
 *     summary: Update an asset for a resource
 *     tags: [Resource Assets]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: assetId
 *         required: true
 *         schema:
 *           type: string
 * requestBody:
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
 *       200:
 *         description: Asset updated successfully
 */
router.put('/:id/assets/:assetId',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  resourceController.updateResourceAsset
);

/**
 * @swagger
 * /api/resources/{id}/assets/{assetId}:
 *   delete:
 *     summary: Delete an asset for a resource
 *     tags: [Resource Assets]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: assetId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Asset deleted successfully
 */
router.delete('/:id/assets/:assetId',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  resourceController.deleteResourceAsset
);

export default router;
