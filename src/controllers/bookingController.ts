import { Response } from 'express';
import { successResponse, errorResponse, paginatedResponse } from '@/utils/responses';
import * as bookingService from '@/services/bookingService';
import logger from '@/utils/logger';
import { AuthenticatedRequest } from '@/types/api';

// Booking CRUD operations
export const createBooking = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const booking = await bookingService.createBooking(req.merchant.id, req.body);
    return successResponse(res, booking, 'Booking created successfully', 201);
  } catch (error: any) {
    logger.error('Create booking error:', error);
    
    if (error.message.includes('not available')) {
      return errorResponse(res, error.message, 409);
    }
    
    if (error.message.includes('not found')) {
      return errorResponse(res, error.message, 404);
    }
    
    return errorResponse(res, 'Failed to create booking', 500);
  }
};

export const getBookings = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { 
      page = 1, 
      limit = 20, 
      customerId,
      resourceId,
      status,
      startDate,
      endDate,
      search,
      sortBy,
      sortOrder
    } = req.query as any;
    
    const result = await bookingService.getBookings(req.merchant.id, {
      page: parseInt(page),
      limit: parseInt(limit),
      customerId,
      resourceId,
      status,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
      search,
      sortBy,
      sortOrder,
    });

    return paginatedResponse(
      res,
      result.bookings,
      {
        page: parseInt(page),
        limit: parseInt(limit),
        total: result.total,
      },
      'Bookings retrieved successfully'
    );
  } catch (error) {
    logger.error('Get bookings error:', error);
    return errorResponse(res, 'Failed to retrieve bookings', 500);
  }
};

export const getBooking = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const booking = await bookingService.getBookingById(req.params.id, req.merchant.id);
    
    if (!booking) {
      return errorResponse(res, 'Booking not found', 404);
    }

    return successResponse(res, booking, 'Booking retrieved successfully');
  } catch (error) {
    logger.error('Get booking error:', error);
    return errorResponse(res, 'Failed to retrieve booking', 500);
  }
};

export const updateBooking = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const booking = await bookingService.updateBooking(
      req.params.id, 
      req.merchant.id, 
      req.body
    );
    return successResponse(res, booking, 'Booking updated successfully');
  } catch (error: any) {
    logger.error('Update booking error:', error);
    
    if (error.message === 'Booking not found') {
      return errorResponse(res, 'Booking not found', 404);
    }
    
    if (error.message.includes('cannot be modified')) {
      return errorResponse(res, error.message, 400);
    }
    
    if (error.message.includes('not available')) {
      return errorResponse(res, error.message, 409);
    }
    
    return errorResponse(res, 'Failed to update booking', 500);
  }
};

export const updateBookingStatus = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const booking = await bookingService.updateBookingStatus(
      req.params.id,
      req.merchant.id,
      req.body
    );
    return successResponse(res, booking, 'Booking status updated successfully');
  } catch (error: any) {
    logger.error('Update booking status error:', error);
    
    if (error.message === 'Booking not found') {
      return errorResponse(res, 'Booking not found', 404);
    }
    
    if (error.message.includes('Cannot change status')) {
      return errorResponse(res, error.message, 400);
    }
    
    return errorResponse(res, 'Failed to update booking status', 500);
  }
};

export const cancelBooking = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { reason } = req.body;
    const booking = await bookingService.cancelBooking(req.params.id, req.merchant.id, reason);
    return successResponse(res, booking, 'Booking cancelled successfully');
  } catch (error: any) {
    logger.error('Cancel booking error:', error);
    
    if (error.message === 'Booking not found') {
      return errorResponse(res, 'Booking not found', 404);
    }
    
    if (error.message.includes('Cannot change status')) {
      return errorResponse(res, error.message, 400);
    }
    
    return errorResponse(res, 'Failed to cancel booking', 500);
  }
};

export const deleteBooking = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    await bookingService.deleteBooking(req.params.id, req.merchant.id);
    return successResponse(res, null, 'Booking deleted successfully');
  } catch (error: any) {
    logger.error('Delete booking error:', error);
    
    if (error.message === 'Booking not found') {
      return errorResponse(res, 'Booking not found', 404);
    }
    
    if (error.message.includes('Cannot delete confirmed booking')) {
      return errorResponse(res, error.message, 400);
    }
    
    return errorResponse(res, 'Failed to delete booking', 500);
  }
};

// Availability and Validation
export const checkAvailability = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { resourceId, startTime, endTime, partySize, excludeBookingId } = req.query as any;
    
    if (!resourceId || !startTime || !endTime || !partySize) {
      return errorResponse(res, 'resourceId, startTime, endTime, and partySize are required', 400);
    }

    const availability = await bookingService.checkBookingAvailability(req.merchant.id, {
      resourceId,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      partySize: parseInt(partySize),
      excludeBookingId,
    });

    return successResponse(res, availability, 'Availability checked successfully');
  } catch (error) {
    logger.error('Check availability error:', error);
    return errorResponse(res, 'Failed to check availability', 500);
  }
};

export const calculatePricing = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { resourceId, rateId, startTime, endTime, partySize, addOnIds } = req.body;
    
    if (!resourceId || !rateId || !startTime || !endTime || !partySize) {
      return errorResponse(res, 'resourceId, rateId, startTime, endTime, and partySize are required', 400);
    }

    const pricing = await bookingService.calculateBookingPricing(req.merchant.id, {
      resourceId,
      rateId,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      partySize,
      addOnIds: addOnIds || [],
    });

    return successResponse(res, pricing, 'Pricing calculated successfully');
  } catch (error: any) {
    logger.error('Calculate pricing error:', error);
    
    if (error.message.includes('not found')) {
      return errorResponse(res, error.message, 404);
    }
    
    return errorResponse(res, 'Failed to calculate pricing', 500);
  }
};

// Analytics and Statistics
export const getBookingStats = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const stats = await bookingService.getBookingStats(req.merchant.id);
    return successResponse(res, stats, 'Booking statistics retrieved successfully');
  } catch (error) {
    logger.error('Get booking stats error:', error);
    return errorResponse(res, 'Failed to retrieve booking statistics', 500);
  }
};

// Calendar and Schedule
export const getBookingCalendar = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { startDate, endDate, resourceIds } = req.query as any;
    
    if (!startDate || !endDate) {
      return errorResponse(res, 'startDate and endDate are required', 400);
    }

    const resourceIdArray = resourceIds ? (Array.isArray(resourceIds) ? resourceIds : [resourceIds]) : undefined;
    
    const calendar = await bookingService.getBookingCalendar(
      req.merchant.id,
      new Date(startDate),
      new Date(endDate),
      resourceIdArray
    );

    return successResponse(res, calendar, 'Booking calendar retrieved successfully');
  } catch (error) {
    logger.error('Get booking calendar error:', error);
    return errorResponse(res, 'Failed to retrieve booking calendar', 500);
  }
};

// Customer Booking History
export const getCustomerBookings = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { customerId } = req.params;
    const { page = 1, limit = 20, status } = req.query as any;
    
    const result = await bookingService.getBookings(req.merchant.id, {
      page: parseInt(page),
      limit: parseInt(limit),
      customerId,
      status,
      sortBy: 'startTime',
      sortOrder: 'desc',
    });

    return paginatedResponse(
      res,
      result.bookings,
      {
        page: parseInt(page),
        limit: parseInt(limit),
        total: result.total,
      },
      'Customer bookings retrieved successfully'
    );
  } catch (error) {
    logger.error('Get customer bookings error:', error);
    return errorResponse(res, 'Failed to retrieve customer bookings', 500);
  }
};

// Resource Booking History
export const getResourceBookings = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { resourceId } = req.params;
    const { page = 1, limit = 20, status, startDate, endDate } = req.query as any;
    
    const result = await bookingService.getBookings(req.merchant.id, {
      page: parseInt(page),
      limit: parseInt(limit),
      resourceId,
      status,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
      sortBy: 'startTime',
      sortOrder: 'asc',
    });

    return paginatedResponse(
      res,
      result.bookings,
      {
        page: parseInt(page),
        limit: parseInt(limit),
        total: result.total,
      },
      'Resource bookings retrieved successfully'
    );
  } catch (error) {
    logger.error('Get resource bookings error:', error);
    return errorResponse(res, 'Failed to retrieve resource bookings', 500);
  }
};

// Bulk Operations
export const bulkUpdateBookingStatus = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { bookingIds, status, reason } = req.body;
    
    if (!Array.isArray(bookingIds) || bookingIds.length === 0) {
      return errorResponse(res, 'bookingIds array is required and must not be empty', 400);
    }

    if (!status) {
      return errorResponse(res, 'status is required', 400);
    }

    const results = {
      successful: [] as any[],
      failed: [] as { bookingId: string; error: string }[],
    };

    for (const bookingId of bookingIds) {
      try {
        const booking = await bookingService.updateBookingStatus(req.merchant.id, bookingId, {
          status,
          reason,
        });
        results.successful.push(booking);
      } catch (error: any) {
        results.failed.push({
          bookingId,
          error: error.message,
        });
      }
    }

    return successResponse(
      res,
      results,
      `Bulk status update completed. ${results.successful.length} successful, ${results.failed.length} failed.`,
      results.failed.length > 0 ? 207 : 200 // 207 Multi-Status if some failed
    );
  } catch (error) {
    logger.error('Bulk update booking status error:', error);
    return errorResponse(res, 'Failed to bulk update booking status', 500);
  }
};

// Export bookings
export const exportBookings = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { startDate, endDate, status, resourceId } = req.query as any;
    
    // Get all bookings matching criteria (no pagination for export)
    const result = await bookingService.getBookings(req.merchant.id, {
      page: 1,
      limit: 10000, // Large limit for export
      status,
      resourceId,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
      sortBy: 'startTime',
      sortOrder: 'asc',
    });

    // Set headers for CSV download
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=bookings_export.csv');

    // Convert to CSV format
    const csvHeaders = [
      'Booking ID',
      'Customer Name',
      'Customer Email',
      'Resource Name',
      'Rate Name',
      'Start Time',
      'End Time',
      'Duration (minutes)',
      'Party Size',
      'Status',
      'Total Price',
      'Currency',
      'Notes',
      'Created At'
    ].join(',');

    const csvRows = result.bookings.map(booking => [
      `"${booking.id}"`,
      `"${booking.customer?.name || 'Guest'}"`,
      `"${booking.customer?.email || ''}"`,
      `"${booking.resource.name}"`,
      `"${booking.rate.name}"`,
      `"${booking.startTime.toISOString()}"`,
      `"${booking.endTime.toISOString()}"`,
      booking.duration,
      booking.partySize,
      `"${booking.currentStatus}"`,
      booking.totalPrice,
      `"${booking.currency}"`,
      `"${booking.notes || ''}"`,
      `"${booking.createdAt.toISOString()}"`,
    ].join(','));

    const csvContent = [csvHeaders, ...csvRows].join('\n');

    return res.send(csvContent);
  } catch (error) {
    logger.error('Export bookings error:', error);
    return errorResponse(res, 'Failed to export bookings', 500);
  }
};
