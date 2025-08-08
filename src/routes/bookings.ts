import { Router } from 'express';
import { validateRequest } from '@/middleware/validation';
import { requireRole, requireMerchantAccess } from '@/middleware/auth';
import * as bookingController from '@/controllers/bookingController';
import { 
  createBookingSchema, 
  updateBookingSchema,
  bookingQuerySchema,
  updateBookingStatusSchema,
  cancelBookingSchema,
  availabilityCheckSchema,
  pricingCalculationSchema,
  calendarQuerySchema,
  bulkStatusUpdateSchema,
  exportBookingsSchema
} from '@/validators/bookingValidators';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Booking:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         merchantId:
 *           type: string
 *         customerId:
 *           type: string
 *         resourceId:
 *           type: string
 *         rateId:
 *           type: string
 *         startTime:
 *           type: string
 *           format: date-time
 *         endTime:
 *           type: string
 *           format: date-time
 *         partySize:
 *           type: integer
 *         basePrice:
 *           type: number
 *         totalPrice:
 *           type: number
 *         taxAmount:
 *           type: number
 *         currency:
 *           type: string
 *         currentStatus:
 *           type: string
 *           enum: [PENDING, CONFIRMED, CANCELLED, COMPLETED, NO_SHOW]
 *         notes:
 *           type: string
 *         internalNotes:
 *           type: string
 *         metadata:
 *           type: object
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     BookingCalendarEvent:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         start:
 *           type: string
 *           format: date-time
 *         end:
 *           type: string
 *           format: date-time
 *         resourceId:
 *           type: string
 *         resourceName:
 *           type: string
 *         customerName:
 *           type: string
 *         status:
 *           type: string
 *         color:
 *           type: string
 *         allDay:
 *           type: boolean
 */

// Core Booking CRUD
/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Create a new booking
 *     tags: [Bookings]
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
 *               - rateId
 *               - startTime
 *               - endTime
 *               - partySize
 *             properties:
 *               customerId:
 *                 type: string
 *                 description: "ID of existing customer"
 *               customerData:
 *                 type: object
 *                 description: "New customer data if customerId not provided"
 *                 properties:
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                     format: email
 *                   phone:
 *                     type: string
 *                   address:
 *                     type: string
 *                   city:
 *                     type: string
 *                   country:
 *                     type: string
 *               resourceId:
 *                 type: string
 *                 example: "res_123"
 *               rateId:
 *                 type: string
 *                 example: "rate_456"
 *               startTime:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-12-25T10:00:00Z"
 *               endTime:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-12-25T12:00:00Z"
 *               partySize:
 *                 type: integer
 *                 minimum: 1
 *                 example: 4
 *               addOnIds:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["addon_789"]
 *               notes:
 *                 type: string
 *                 example: "Birthday celebration"
 *               autoConfirm:
 *                 type: boolean
 *                 default: false
 *     responses:
 *       201:
 *         description: Booking created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   allOf:
 *                     - $ref: '#/components/schemas/Booking'
 *                     - type: object
 *                       properties:
 *                         customer:
 *                           type: object
 *                         resource:
 *                           type: object
 *                         rate:
 *                           type: object
 *                 message:
 *                   type: string
 *       409:
 *         description: Booking conflict or unavailable
 *       404:
 *         description: Resource or rate not found
 */
router.post('/', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN', 'STAFF']),
  validateRequest({ body: createBookingSchema }), 
  bookingController.createBooking
);

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Get all bookings for the merchant
 *     tags: [Bookings]
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
 *           maximum: 100
 *       - in: query
 *         name: customerId
 *         schema:
 *           type: string
 *         description: Filter by customer ID
 *       - in: query
 *         name: resourceId
 *         schema:
 *           type: string
 *         description: Filter by resource ID
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [PENDING, CONFIRMED, CANCELLED, COMPLETED, NO_SHOW]
 *         description: Filter by booking status
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Filter bookings starting from this date
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Filter bookings ending before this date
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search in customer name, email, or notes
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [startTime, createdAt, totalPrice, currentStatus]
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *     responses:
 *       200:
 *         description: Bookings retrieved successfully
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
 *                       - $ref: '#/components/schemas/Booking'
 *                       - type: object
 *                         properties:
 *                           customer:
 *                             type: object
 *                           resource:
 *                             type: object
 *                           rate:
 *                             type: object
 *                           duration:
 *                             type: integer
 *                           isPast:
 *                             type: boolean
 *                 pagination:
 *                   type: object
 */
router.get('/', 
  requireMerchantAccess,
  validateRequest({ query: bookingQuerySchema }),
  bookingController.getBookings
);

/**
 * @swagger
 * /api/bookings/stats:
 *   get:
 *     summary: Get booking statistics and analytics
 *     tags: [Bookings]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Booking statistics retrieved successfully
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
 *                     totalBookings:
 *                       type: integer
 *                     confirmedBookings:
 *                       type: integer
 *                     pendingBookings:
 *                       type: integer
 *                     cancelledBookings:
 *                       type: integer
 *                     completedBookings:
 *                       type: integer
 *                     totalRevenue:
 *                       type: number
 *                     averageBookingValue:
 *                       type: number
 *                     bookingGrowth:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           period:
 *                             type: string
 *                           bookingCount:
 *                             type: integer
 *                           revenue:
 *                             type: number
 *                     topResources:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           resourceId:
 *                             type: string
 *                           resourceName:
 *                             type: string
 *                           bookingCount:
 *                             type: integer
 *                           revenue:
 *                             type: number
 */
router.get('/stats', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  bookingController.getBookingStats
);

/**
 * @swagger
 * /api/bookings/export:
 *   get:
 *     summary: Export bookings as CSV
 *     tags: [Bookings]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date-time
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date-time
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [PENDING, CONFIRMED, CANCELLED, COMPLETED, NO_SHOW]
 *       - in: query
 *         name: resourceId
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: CSV file with booking data
 *         content:
 *           text/csv:
 *             schema:
 *               type: string
 *               format: binary
 */
router.get('/export', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ query: exportBookingsSchema }),
  bookingController.exportBookings
);

/**
 * @swagger
 * /api/bookings/calendar:
 *   get:
 *     summary: Get bookings in calendar format
 *     tags: [Bookings]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: startDate
 *         required: true
 *         schema:
 *           type: string
 *           format: date-time
 *       - in: query
 *         name: endDate
 *         required: true
 *         schema:
 *           type: string
 *           format: date-time
 *       - in: query
 *         name: resourceIds
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *         description: Filter by specific resource IDs
 *     responses:
 *       200:
 *         description: Calendar events retrieved successfully
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
 *                     events:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/BookingCalendarEvent'
 *                     dateRange:
 *                       type: object
 *                       properties:
 *                         start:
 *                           type: string
 *                           format: date-time
 *                         end:
 *                           type: string
 *                           format: date-time
 *                     resources:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                           name:
 *                             type: string
 *                           color:
 *                             type: string
 */
router.get('/calendar', 
  requireMerchantAccess,
  validateRequest({ query: calendarQuerySchema }),
  bookingController.getBookingCalendar
);

/**
 * @swagger
 * /api/bookings/check-availability:
 *   get:
 *     summary: Check booking availability for a resource
 *     tags: [Bookings]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: resourceId
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: startTime
 *         required: true
 *         schema:
 *           type: string
 *           format: date-time
 *       - in: query
 *         name: endTime
 *         required: true
 *         schema:
 *           type: string
 *           format: date-time
 *       - in: query
 *         name: partySize
 *         required: true
 *         schema:
 *           type: integer
 *       - in: query
 *         name: excludeBookingId
 *         schema:
 *           type: string
 *         description: Exclude this booking from availability check (for updates)
 *     responses:
 *       200:
 *         description: Availability check completed
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
 *                     isAvailable:
 *                       type: boolean
 *                     conflicts:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           type:
 *                             type: string
 *                           message:
 *                             type: string
 *                     suggestions:
 *                       type: array
 *                       items:
 *                         type: object
 */
router.get('/check-availability', 
  requireMerchantAccess,
  validateRequest({ query: availabilityCheckSchema }),
  bookingController.checkAvailability
);

/**
 * @swagger
 * /api/bookings/calculate-pricing:
 *   post:
 *     summary: Calculate pricing for a booking
 *     tags: [Bookings]
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
 *               - rateId
 *               - startTime
 *               - endTime
 *               - partySize
 *             properties:
 *               resourceId:
 *                 type: string
 *               rateId:
 *                 type: string
 *               startTime:
 *                 type: string
 *                 format: date-time
 *               endTime:
 *                 type: string
 *                 format: date-time
 *               partySize:
 *                 type: integer
 *               addOnIds:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Pricing calculated successfully
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
 *                     basePrice:
 *                       type: number
 *                     addOnTotal:
 *                       type: number
 *                     subtotal:
 *                       type: number
 *                     taxAmount:
 *                       type: number
 *                     totalPrice:
 *                       type: number
 *                     currency:
 *                       type: string
 *                     breakdown:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           item:
 *                             type: string
 *                           type:
 *                             type: string
 *                           quantity:
 *                             type: number
 *                           unitPrice:
 *                             type: number
 *                           total:
 *                             type: number
 */
router.post('/calculate-pricing', 
  requireMerchantAccess,
  validateRequest({ body: pricingCalculationSchema }),
  bookingController.calculatePricing
);

/**
 * @swagger
 * /api/bookings/bulk-status:
 *   put:
 *     summary: Bulk update booking status
 *     tags: [Bookings]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bookingIds
 *               - status
 *             properties:
 *               bookingIds:
 *                 type: array
 *                 items:
 *                   type: string
 *                 maxItems: 100
 *               status:
 *                 type: string
 *                 enum: [PENDING, CONFIRMED, CANCELLED, COMPLETED, NO_SHOW]
 *               reason:
 *                 type: string
 *     responses:
 *       200:
 *         description: Bulk update completed successfully (all succeeded)
 *       207:
 *         description: Bulk update completed with some failures
 */
router.put('/bulk-status', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: bulkStatusUpdateSchema }),
  bookingController.bulkUpdateBookingStatus
);

/**
 * @swagger
 * /api/bookings/{id}:
 *   get:
 *     summary: Get a specific booking with detailed information
 *     tags: [Bookings]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   allOf:
 *                     - $ref: '#/components/schemas/Booking'
 *                     - type: object
 *                       properties:
 *                         customer:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                             name:
 *                               type: string
 *                             email:
 *                               type: string
 *                             phone:
 *                               type: string
 *                         resource:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                             name:
 *                               type: string
 *                             capacity:
 *                               type: integer
 *                             isVirtual:
 *                               type: boolean
 *                         rate:
 *                           type: object
 *                         addOns:
 *                           type: array
 *                           items:
 *                             type: object
 *                         payments:
 *                           type: array
 *                           items:
 *                             type: object
 *                         duration:
 *                           type: integer
 *                         isPast:
 *                           type: boolean
 *                         isCancellable:
 *                           type: boolean
 *                         isModifiable:
 *                           type: boolean
 *       404:
 *         description: Booking not found
 */
router.get('/:id', requireMerchantAccess, bookingController.getBooking);

/**
 * @swagger
 * /api/bookings/{id}:
 *   put:
 *     summary: Update a booking
 *     tags: [Bookings]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               startTime:
 *                 type: string
 *                 format: date-time
 *               endTime:
 *                 type: string
 *                 format: date-time
 *               partySize:
 *                 type: integer
 *                 minimum: 1
 *               notes:
 *                 type: string
 *               internalNotes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Booking updated successfully
 *       400:
 *         description: Booking cannot be modified
 *       404:
 *         description: Booking not found
 *       409:
 *         description: Updated booking conflicts with availability
 */
router.put('/:id', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN', 'STAFF']),
  validateRequest({ body: updateBookingSchema }), 
  bookingController.updateBooking
);

/**
 * @swagger
 * /api/bookings/{id}/status:
 *   put:
 *     summary: Update booking status
 *     tags: [Bookings]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [PENDING, CONFIRMED, CANCELLED, COMPLETED, NO_SHOW]
 *               reason:
 *                 type: string
 *               internalNotes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Booking status updated successfully
 *       400:
 *         description: Invalid status transition
 *       404:
 *         description: Booking not found
 */
router.put('/:id/status', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN', 'STAFF']),
  validateRequest({ body: updateBookingStatusSchema }),
  bookingController.updateBookingStatus
);

/**
 * @swagger
 * /api/bookings/{id}/cancel:
 *   put:
 *     summary: Cancel a booking
 *     tags: [Bookings]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reason:
 *                 type: string
 *                 example: "Customer requested cancellation"
 *     responses:
 *       200:
 *         description: Booking cancelled successfully
 *       400:
 *         description: Booking cannot be cancelled
 *       404:
 *         description: Booking not found
 */
router.put('/:id/cancel', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN', 'STAFF']),
  validateRequest({ body: cancelBookingSchema }),
  bookingController.cancelBooking
);

/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     summary: Delete a booking (only pending bookings)
 *     tags: [Bookings]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking deleted successfully
 *       400:
 *         description: Cannot delete confirmed booking. Cancel it instead.
 *       404:
 *         description: Booking not found
 */
router.delete('/:id', 
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  bookingController.deleteBooking
);

// Customer-specific booking routes
/**
 * @swagger
 * /api/bookings/customers/{customerId}:
 *   get:
 *     summary: Get all bookings for a specific customer
 *     tags: [Bookings]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         schema:
 *           type: string
 *         description: Customer ID
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
 *         name: status
 *         schema:
 *           type: string
 *           enum: [PENDING, CONFIRMED, CANCELLED, COMPLETED, NO_SHOW]
 *     responses:
 *       200:
 *         description: Customer bookings retrieved successfully
 */
router.get('/customers/:customerId', 
  requireMerchantAccess,
  bookingController.getCustomerBookings
);

// Resource-specific booking routes
/**
 * @swagger
 * /api/bookings/resources/{resourceId}:
 *   get:
 *     summary: Get all bookings for a specific resource
 *     tags: [Bookings]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: resourceId
 *         required: true
 *         schema:
 *           type: string
 *         description: Resource ID
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
 *         name: status
 *         schema:
 *           type: string
 *           enum: [PENDING, CONFIRMED, CANCELLED, COMPLETED, NO_SHOW]
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date-time
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date-time
 *     responses:
 *       200:
 *         description: Resource bookings retrieved successfully
 */
router.get('/resources/:resourceId', 
  requireMerchantAccess,
  bookingController.getResourceBookings
);

export default router;
