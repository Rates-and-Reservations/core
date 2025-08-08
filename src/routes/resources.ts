import { Router } from 'express';
import { validateRequest } from '../middleware/validation';
import { requireRole, requireMerchantAccess } from '../middleware/auth';
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
router.post('/:id/availability-blocks', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: createAvailabilityBlockSchema }),
  resourceController.createAvailabilityBlock
);

router.get('/:id/availability-blocks', requireMerchantAccess, resourceController.getAvailabilityBlocks);

router.put('/:id/availability-blocks/:blockId', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: updateAvailabilityBlockSchema }),
  resourceController.updateAvailabilityBlock
);

router.delete('/:id/availability-blocks/:blockId', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  resourceController.deleteAvailabilityBlock
);

// Availability Rules
router.post('/:id/availability-rules', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: createAvailabilityRuleSchema }),
  resourceController.createAvailabilityRule
);

router.get('/:id/availability-rules', requireMerchantAccess, resourceController.getAvailabilityRules);

router.put('/:id/availability-rules/:ruleId', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: updateAvailabilityRuleSchema }),
  resourceController.updateAvailabilityRule
);

router.delete('/:id/availability-rules/:ruleId', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  resourceController.deleteAvailabilityRule
);

// Booking Constraints
router.post('/:id/constraints', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: createBookingConstraintSchema }),
  resourceController.createBookingConstraint
);

router.get('/:id/constraints', requireMerchantAccess, resourceController.getBookingConstraints);

router.put('/:id/constraints/:constraintId', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: updateBookingConstraintSchema }),
  resourceController.updateBookingConstraint
);

router.delete('/:id/constraints/:constraintId', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  resourceController.deleteBookingConstraint
);

// Resource Assets
router.post('/:id/assets', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  resourceController.uploadResourceAsset
);

router.get('/:id/assets', requireMerchantAccess, resourceController.getResourceAssets);

router.put('/:id/assets/:assetId', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  resourceController.updateResourceAsset
);

router.delete('/:id/assets/:assetId', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  resourceController.deleteResourceAsset
);

export default router;
