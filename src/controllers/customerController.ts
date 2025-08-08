import { Response } from 'express';
import { successResponse, errorResponse, paginatedResponse } from '@/utils/responses';
import * as customerService from '@/services/customerService';
import logger from '@/utils/logger';
import { AuthenticatedRequest } from '@/types/api';

// Customer CRUD operations
export const createCustomer = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const customer = await customerService.createCustomer(req.merchant.id, req.body);
    return successResponse(res, customer, 'Customer created successfully', 201);
  } catch (error: any) {
    logger.error('Create customer error:', error);
    
    if (error.message === 'Customer with this email already exists') {
      return errorResponse(res, 'Customer with this email already exists', 409);
    }
    
    return errorResponse(res, 'Failed to create customer', 500);
  }
};

export const getCustomers = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { 
      page = 1, 
      limit = 20, 
      search,
      tags,
      sortBy,
      sortOrder
    } = req.query as any;
    
    const result = await customerService.getCustomers(req.merchant.id, {
      page: parseInt(page),
      limit: parseInt(limit),
      search,
      tags: tags ? (Array.isArray(tags) ? tags : [tags]) : undefined,
      sortBy,
      sortOrder,
    });

    return paginatedResponse(
      res,
      result.customers,
      {
        page: parseInt(page),
        limit: parseInt(limit),
        total: result.total,
      },
      'Customers retrieved successfully'
    );
  } catch (error) {
    logger.error('Get customers error:', error);
    return errorResponse(res, 'Failed to retrieve customers', 500);
  }
};

export const getCustomer = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const customer = await customerService.getCustomerById(req.params.id, req.merchant.id);
    
    if (!customer) {
      return errorResponse(res, 'Customer not found', 404);
    }

    return successResponse(res, customer, 'Customer retrieved successfully');
  } catch (error) {
    logger.error('Get customer error:', error);
    return errorResponse(res, 'Failed to retrieve customer', 500);
  }
};

export const getCustomerByEmail = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { email } = req.query;
    
    if (!email || typeof email !== 'string') {
      return errorResponse(res, 'Email parameter is required', 400);
    }

    const customer = await customerService.getCustomerByEmail(email, req.merchant.id);
    
    if (!customer) {
      return errorResponse(res, 'Customer not found', 404);
    }

    return successResponse(res, customer, 'Customer retrieved successfully');
  } catch (error) {
    logger.error('Get customer by email error:', error);
    return errorResponse(res, 'Failed to retrieve customer', 500);
  }
};

export const updateCustomer = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const customer = await customerService.updateCustomer(
      req.params.id, 
      req.merchant.id, 
      req.body
    );
    return successResponse(res, customer, 'Customer updated successfully');
  } catch (error: any) {
    logger.error('Update customer error:', error);
    
    if (error.message === 'Customer not found') {
      return errorResponse(res, 'Customer not found', 404);
    }
    
    if (error.message === 'Customer with this email already exists') {
      return errorResponse(res, 'Customer with this email already exists', 409);
    }
    
    return errorResponse(res, 'Failed to update customer', 500);
  }
};

export const deleteCustomer = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    await customerService.deleteCustomer(req.params.id, req.merchant.id);
    return successResponse(res, null, 'Customer deleted successfully');
  } catch (error: any) {
    logger.error('Delete customer error:', error);
    
    if (error.message === 'Customer not found') {
      return errorResponse(res, 'Customer not found', 404);
    }
    
    if (error.message === 'Cannot delete customer with active future bookings') {
      return errorResponse(res, 'Cannot delete customer with active future bookings', 400);
    }
    
    return errorResponse(res, 'Failed to delete customer', 500);
  }
};

// Customer Preferences Management
export const createCustomerPreference = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const preference = await customerService.createCustomerPreference(
      req.params.id,
      req.merchant.id,
      req.body
    );
    return successResponse(res, preference, 'Customer preference saved successfully', 201);
  } catch (error: any) {
    logger.error('Create customer preference error:', error);
    
    if (error.message === 'Customer not found') {
      return errorResponse(res, 'Customer not found', 404);
    }
    
    return errorResponse(res, 'Failed to save customer preference', 500);
  }
};

export const getCustomerPreferences = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const preferences = await customerService.getCustomerPreferences(
      req.params.id,
      req.merchant.id
    );
    return successResponse(res, preferences, 'Customer preferences retrieved successfully');
  } catch (error: any) {
    logger.error('Get customer preferences error:', error);
    
    if (error.message === 'Customer not found') {
      return errorResponse(res, 'Customer not found', 404);
    }
    
    return errorResponse(res, 'Failed to retrieve customer preferences', 500);
  }
};

export const updateCustomerPreference = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const preference = await customerService.updateCustomerPreference(
      req.params.id,
      req.merchant.id,
      req.params.key,
      req.body
    );
    return successResponse(res, preference, 'Customer preference updated successfully');
  } catch (error: any) {
    logger.error('Update customer preference error:', error);
    
    if (error.message === 'Customer not found') {
      return errorResponse(res, 'Customer not found', 404);
    }
    
    return errorResponse(res, 'Failed to update customer preference', 500);
  }
};

export const deleteCustomerPreference = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    await customerService.deleteCustomerPreference(
      req.params.id,
      req.merchant.id,
      req.params.key
    );
    return successResponse(res, null, 'Customer preference deleted successfully');
  } catch (error: any) {
    logger.error('Delete customer preference error:', error);
    
    if (error.message === 'Customer not found') {
      return errorResponse(res, 'Customer not found', 404);
    }
    
    return errorResponse(res, 'Failed to delete customer preference', 500);
  }
};

// Customer Search and Analytics
export const searchCustomers = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { q: searchTerm, limit = 10 } = req.query as any;
    
    if (!searchTerm) {
      return errorResponse(res, 'Search term is required', 400);
    }

    const customers = await customerService.searchCustomers(
      req.merchant.id,
      searchTerm,
      parseInt(limit)
    );

    return successResponse(res, customers, 'Customer search completed successfully');
  } catch (error) {
    logger.error('Search customers error:', error);
    return errorResponse(res, 'Failed to search customers', 500);
  }
};

export const getCustomerStats = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const stats = await customerService.getCustomerStats(req.merchant.id);
    return successResponse(res, stats, 'Customer statistics retrieved successfully');
  } catch (error) {
    logger.error('Get customer stats error:', error);
    return errorResponse(res, 'Failed to retrieve customer statistics', 500);
  }
};

export const getCustomersByTag = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { tag } = req.params;
    const { page = 1, limit = 20 } = req.query as any;

    const result = await customerService.getCustomersByTag(
      req.merchant.id,
      tag,
      parseInt(page),
      parseInt(limit)
    );

    return paginatedResponse(
      res,
      result.customers,
      {
        page: parseInt(page),
        limit: parseInt(limit),
        total: result.total,
      },
      `Customers with tag "${tag}" retrieved successfully`
    );
  } catch (error) {
    logger.error('Get customers by tag error:', error);
    return errorResponse(res, 'Failed to retrieve customers by tag', 500);
  }
};

// Bulk Operations
export const bulkCreateCustomers = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { customers } = req.body;

    if (!Array.isArray(customers) || customers.length === 0) {
      return errorResponse(res, 'Customers array is required and must not be empty', 400);
    }

    if (customers.length > 1000) {
      return errorResponse(res, 'Cannot import more than 1000 customers at once', 400);
    }

    const result = await customerService.bulkCreateCustomers(req.merchant.id, customers);

    return successResponse(
      res,
      result,
      `Bulk import completed. ${result.successful.length} customers created, ${result.failed.length} failed.`,
      result.failed.length > 0 ? 207 : 201 // 207 Multi-Status if some failed
    );
  } catch (error) {
    logger.error('Bulk create customers error:', error);
    return errorResponse(res, 'Failed to bulk create customers', 500);
  }
};

export const exportCustomers = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const customers = await customerService.getCustomersForExport(req.merchant.id);

    // Set headers for CSV download
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=customers_export.csv');

    // Convert to CSV format
    const csvHeaders = [
      'Name',
      'Email',
      'Phone',
      'Address',
      'City',
      'Postcode',
      'Country',
      'Preferred Language',
      'Preferred Timezone',
      'Total Bookings',
      'Total Spent',
      'Loyalty Points',
      'Tags',
      'Created At'
    ].join(',');

    const csvRows = customers.map(customer => [
      `"${customer.name}"`,
      `"${customer.email}"`,
      `"${customer.phone || ''}"`,
      `"${customer.address || ''}"`,
      `"${customer.city || ''}"`,
      `"${customer.postcode || ''}"`,
      `"${customer.country || ''}"`,
      `"${customer.preferredLanguage || ''}"`,
      `"${customer.preferredTimezone || ''}"`,
      customer.totalBookings,
      customer.totalSpent,
      customer.loyaltyPoints,
      `"${customer.tags.join('; ')}"`,
      `"${customer.createdAt.toISOString()}"`,
    ].join(','));

    const csvContent = [csvHeaders, ...csvRows].join('\n');

    return res.send(csvContent);
  } catch (error) {
    logger.error('Export customers error:', error);
    return errorResponse(res, 'Failed to export customers', 500);
  }
};
