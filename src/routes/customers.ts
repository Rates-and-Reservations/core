import { Router } from 'express';
import { validateRequest } from '@/middleware/validation';
import { requireRole, requireMerchantAccess } from '@/middleware/auth';
import * as customerController from '@/controllers/customerController';
import { 
  createCustomerSchema, 
  updateCustomerSchema,
  customerQuerySchema,
  createCustomerPreferenceSchema,
  updateCustomerPreferenceSchema,
  customerSearchSchema,
  bulkCreateCustomersSchema,
  customerEmailQuerySchema,
  customerTagSchema
} from '@/validators/customerValidators';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         phone:
 *           type: string
 *         address:
 *           type: string
 *         city:
 *           type: string
 *         postcode:
 *           type: string
 *         country:
 *           type: string
 *         preferredLanguage:
 *           type: string
 *         preferredTimezone:
 *           type: string
 *         loyaltyPoints:
 *           type: integer
 *         totalBookings:
 *           type: integer
 *         totalSpent:
 *           type: number
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *         notes:
 *           type: string
 *         metadata:
 *           type: object
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     CustomerPreference:
 *       type: object
 *       properties:
 *         key:
 *           type: string
 *         value:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

// Customer CRUD operations
/**
 * @swagger
 * /api/customers:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customers]
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
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john.doe@example.com"
 *               phone:
 *                 type: string
 *                 example: "+1234567890"
 *               address:
 *                 type: string
 *                 example: "123 Main St"
 *               city:
 *                 type: string
 *                 example: "New York"
 *               postcode:
 *                 type: string
 *                 example: "10001"
 *               country:
 *                 type: string
 *                 example: "US"
 *               preferredLanguage:
 *                 type: string
 *                 example: "en"
 *               preferredTimezone:
 *                 type: string
 *                 example: "America/New_York"
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["vip", "regular"]
 *               notes:
 *                 type: string
 *                 example: "Prefers morning appointments"
 *     responses:
 *       201:
 *         description: Customer created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Customer'
 *                 message:
 *                   type: string
 *                   example: "Customer created successfully"
 *       409:
 *         description: Customer with this email already exists
 */
router.post('/', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN', 'STAFF']),
  validateRequest({ body: createCustomerSchema }), 
  customerController.createCustomer
);

/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Get all customers for the merchant
 *     tags: [Customers]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 20
 *           maximum: 100
 *         description: Number of customers per page
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term for name, email, phone, or city
 *       - in: query
 *         name: tags
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *         description: Filter by customer tags
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [name, email, totalBookings, totalSpent, createdAt, loyaltyPoints]
 *         description: Field to sort by
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort order
 *     responses:
 *       200:
 *         description: Customers retrieved successfully
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
 *                       - $ref: '#/components/schemas/Customer'
 *                       - type: object
 *                         properties:
 *                           bookingCount:
 *                             type: integer
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *                     total:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 */
router.get('/', 
  requireMerchantAccess,
  validateRequest({ query: customerQuerySchema }),
  customerController.getCustomers
);

/**
 * @swagger
 * /api/customers/search:
 *   get:
 *     summary: Search customers by name, email, or phone
 *     tags: [Customers]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         description: Search term
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *           maximum: 50
 *         description: Maximum number of results
 *     responses:
 *       200:
 *         description: Customer search completed successfully
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
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *                       phone:
 *                         type: string
 *                       totalBookings:
 *                         type: integer
 *                       totalSpent:
 *                         type: number
 */
router.get('/search', 
  requireMerchantAccess,
  validateRequest({ query: customerSearchSchema }),
  customerController.searchCustomers
);

/**
 * @swagger
 * /api/customers/stats:
 *   get:
 *     summary: Get customer statistics and analytics
 *     tags: [Customers]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Customer statistics retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     totalCustomers:
 *                       type: integer
 *                     newCustomersThisMonth:
 *                       type: integer
 *                     topCustomers:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                           name:
 *                             type: string
 *                           email:
 *                             type: string
 *                           bookingCount:
 *                             type: integer
 *                           totalSpent:
 *                             type: number
 *                           loyaltyPoints:
 *                             type: integer
 *                     customerGrowth:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           month:
 *                             type: string
 *                             format: date
 *                           count:
 *                             type: integer
 */
router.get('/stats', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  customerController.getCustomerStats
);

/**
 * @swagger
 * /api/customers/export:
 *   get:
 *     summary: Export all customers as CSV
 *     tags: [Customers]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: CSV file with customer data
 *         content:
 *           text/csv:
 *             schema:
 *               type: string
 *               format: binary
 */
router.get('/export', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  customerController.exportCustomers
);

/**
 * @swagger
 * /api/customers/bulk:
 *   post:
 *     summary: Bulk create customers
 *     tags: [Customers]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customers
 *             properties:
 *               customers:
 *                 type: array
 *                 maxItems: 1000
 *                 items:
 *                   type: object
 *                   required:
 *                     - name
 *                     - email
 *                   properties:
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *                       format: email
 *                     phone:
 *                       type: string
 *                     address:
 *                       type: string
 *                     city:
 *                       type: string
 *                     country:
 *                       type: string
 *                     tags:
 *                       type: array
 *                       items:
 *                         type: string
 *     responses:
 *       201:
 *         description: Bulk import completed successfully (all succeeded)
 *       207:
 *         description: Bulk import completed with some failures
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     successful:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Customer'
 *                     failed:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           data:
 *                             type: object
 *                           error:
 *                             type: string
 */
router.post('/bulk', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: bulkCreateCustomersSchema }),
  customerController.bulkCreateCustomers
);

/**
 * @swagger
 * /api/customers/by-email:
 *   get:
 *     summary: Get customer by email address
 *     tags: [Customers]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *           format: email
 *         description: Customer email address
 *     responses:
 *       200:
 *         description: Customer retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Customer'
 *       404:
 *         description: Customer not found
 */
router.get('/by-email', 
  requireMerchantAccess,
  validateRequest({ query: customerEmailQuerySchema }),
  customerController.getCustomerByEmail
);

/**
 * @swagger
 * /api/customers/tags/{tag}:
 *   get:
 *     summary: Get customers by tag
 *     tags: [Customers]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tag
 *         required: true
 *         schema:
 *           type: string
 *         description: Customer tag
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
 *     responses:
 *       200:
 *         description: Customers with specified tag retrieved successfully
 */
router.get('/tags/:tag', 
  requireMerchantAccess,
  validateRequest({ params: customerTagSchema }),
  customerController.getCustomersByTag
);

/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     summary: Get a specific customer with detailed information
 *     tags: [Customers]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Customer retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   allOf:
 *                     - $ref: '#/components/schemas/Customer'
 *                     - type: object
 *                       properties:
 *                         bookings:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               id:
 *                                 type: string
 *                               startTime:
 *                                 type: string
 *                                 format: date-time
 *                               endTime:
 *                                 type: string
 *                                 format: date-time
 *                               currentStatus:
 *                                 type: string
 *                               totalPrice:
 *                                 type: number
 *                               currency:
 *                                 type: string
 *                               resource:
 *                                 type: object
 *                                 properties:
 *                                   id:
 *                                     type: string
 *                                   name:
 *                                     type: string
 *                         preferences:
 *                           type: object
 *                           additionalProperties:
 *                             type: string
 *                         bookingCount:
 *                           type: integer
 *                         activeWaitlistEntries:
 *                           type: integer
 *       404:
 *         description: Customer not found
 */
router.get('/:id', requireMerchantAccess, customerController.getCustomer);

/**
 * @swagger
 * /api/customers/{id}:
 *   put:
 *     summary: Update a customer
 *     tags: [Customers]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Customer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               postcode:
 *                 type: string
 *               country:
 *                 type: string
 *               preferredLanguage:
 *                 type: string
 *               preferredTimezone:
 *                 type: string
 *               loyaltyPoints:
 *                 type: integer
 *                 minimum: 0
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *               notes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Customer updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Customer'
 *                 message:
 *                   type: string
 *       404:
 *         description: Customer not found
 *       409:
 *         description: Customer with this email already exists
 */
router.put('/:id', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN', 'STAFF']),
  validateRequest({ body: updateCustomerSchema }), 
  customerController.updateCustomer
);

/**
 * @swagger
 * /api/customers/{id}:
 *   delete:
 *     summary: Delete a customer
 *     tags: [Customers]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Customer deleted successfully
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
 *                   example: "Customer deleted successfully"
 *       400:
 *         description: Cannot delete customer with active future bookings
 *       404:
 *         description: Customer not found
 */
router.delete('/:id', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  customerController.deleteCustomer
);

// Customer Preferences Management
/**
 * @swagger
 * /api/customers/{id}/preferences:
 *   post:
 *     summary: Create or update a customer preference
 *     tags: [Customer Preferences]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Customer ID
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
 *                 example: "preferred_time"
 *                 description: "Preference key (e.g., preferred_time, notification_method, dietary_requirements)"
 *               value:
 *                 type: string
 *                 example: "morning"
 *                 description: "Preference value"
 *     responses:
 *       201:
 *         description: Customer preference saved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/CustomerPreference'
 *       404:
 *         description: Customer not found
 */
router.post('/:id/preferences', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN', 'STAFF']),
  validateRequest({ body: createCustomerPreferenceSchema }),
  customerController.createCustomerPreference
);

/**
 * @swagger
 * /api/customers/{id}/preferences:
 *   get:
 *     summary: Get all preferences for a customer
 *     tags: [Customer Preferences]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Customer preferences retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   additionalProperties:
 *                     type: string
 *                   example:
 *                     preferred_time: "morning"
 *                     notification_method: "email"
 *                     dietary_requirements: "vegetarian"
 *       404:
 *         description: Customer not found
 */
router.get('/:id/preferences', 
  requireMerchantAccess,
  customerController.getCustomerPreferences
);

/**
 * @swagger
 * /api/customers/{id}/preferences/{key}:
 *   put:
 *     summary: Update a specific customer preference
 *     tags: [Customer Preferences]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Customer ID
 *       - in: path
 *         name: key
 *         required: true
 *         schema:
 *           type: string
 *         description: Preference key
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - value
 *             properties:
 *               value:
 *                 type: string
 *                 example: "afternoon"
 *     responses:
 *       200:
 *         description: Customer preference updated successfully
 *       404:
 *         description: Customer or preference not found
 */
router.put('/:id/preferences/:key', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN', 'STAFF']),
  validateRequest({ body: updateCustomerPreferenceSchema }),
  customerController.updateCustomerPreference
);

/**
 * @swagger
 * /api/customers/{id}/preferences/{key}:
 *   delete:
 *     summary: Delete a customer preference
 *     tags: [Customer Preferences]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Customer ID
 *       - in: path
 *         name: key
 *         required: true
 *         schema:
 *           type: string
 *         description: Preference key
 *     responses:
 *       200:
 *         description: Customer preference deleted successfully
 *       404:
 *         description: Customer or preference not found
 */
router.delete('/:id/preferences/:key', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN', 'STAFF']),
  customerController.deleteCustomerPreference
);

export default router;
