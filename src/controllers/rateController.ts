import { Response } from 'express';
import { successResponse, errorResponse, paginatedResponse } from '@/utils/responses';
import * as rateService from '@/services/rateService';
import logger from '@/utils/logger';
import { AuthenticatedRequest } from '@/types/api';

// Rate CRUD
export const createRate = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const rate = await rateService.createRate(req.merchant.id, req.body);
    return successResponse(res, rate, 'Rate created successfully', 201);
  } catch (error: any) {
    logger.error('Create rate error:', error);
    
    if (error.message === 'Resource not found') {
      return errorResponse(res, 'Resource not found', 404);
    }
    
    return errorResponse(res, 'Failed to create rate', 500);
  }
};

export const getRates = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { page = 1, limit = 20, ...filters } = req.query as any;
    
    const result = await rateService.getRates(req.merchant.id, {
      page: parseInt(page),
      limit: parseInt(limit),
      ...filters,
    });

    return paginatedResponse(
      res,
      result.rates,
      {
        page: parseInt(page),
        limit: parseInt(limit),
        total: result.total,
      },
      'Rates retrieved successfully'
    );
  } catch (error) {
    logger.error('Get rates error:', error);
    return errorResponse(res, 'Failed to retrieve rates', 500);
  }
};

export const getRate = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const rate = await rateService.getRateById(req.params.id, req.merchant.id);
    
    if (!rate) {
      return errorResponse(res, 'Rate not found', 404);
    }

    return successResponse(res, rate, 'Rate retrieved successfully');
  } catch (error) {
    logger.error('Get rate error:', error);
    return errorResponse(res, 'Failed to retrieve rate', 500);
  }
};

export const updateRate = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const rate = await rateService.updateRate(req.params.id, req.merchant.id, req.body);
    return successResponse(res, rate, 'Rate updated successfully');
  } catch (error: any) {
    logger.error('Update rate error:', error);
    
    if (error.message === 'Rate not found') {
      return errorResponse(res, 'Rate not found', 404);
    }
    
    return errorResponse(res, 'Failed to update rate', 500);
  }
};

export const deleteRate = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    await rateService.deleteRate(req.params.id, req.merchant.id);
    return successResponse(res, null, 'Rate deleted successfully');
  } catch (error: any) {
    logger.error('Delete rate error:', error);
    
    if (error.message === 'Rate not found') {
      return errorResponse(res, 'Rate not found', 404);
    }
    
    if (error.message === 'Cannot delete rate with active bookings') {
      return errorResponse(res, 'Cannot delete rate with active bookings', 400);
    }
    
    return errorResponse(res, 'Failed to delete rate', 500);
  }
};

// Add-on CRUD
export const createAddOn = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const addOn = await rateService.createAddOn(req.merchant.id, req.body);
    return successResponse(res, addOn, 'Add-on created successfully', 201);
  } catch (error) {
    logger.error('Create add-on error:', error);
    return errorResponse(res, 'Failed to create add-on', 500);
  }
};

export const getAddOns = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const addOns = await rateService.getAddOns(req.merchant.id);
    return successResponse(res, addOns, 'Add-ons retrieved successfully');
  } catch (error) {
    logger.error('Get add-ons error:', error);
    return errorResponse(res, 'Failed to retrieve add-ons', 500);
  }
};

export const updateAddOn = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const addOn = await rateService.updateAddOn(req.params.id, req.merchant.id, req.body);
    return successResponse(res, addOn, 'Add-on updated successfully');
  } catch (error: any) {
    logger.error('Update add-on error:', error);
    
    if (error.message === 'Add-on not found') {
      return errorResponse(res, 'Add-on not found', 404);
    }
    
    return errorResponse(res, 'Failed to update add-on', 500);
  }
};

export const deleteAddOn = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    await rateService.deleteAddOn(req.params.id, req.merchant.id);
    return successResponse(res, null, 'Add-on deleted successfully');
  } catch (error: any) {
    logger.error('Delete add-on error:', error);
    
    if (error.message === 'Add-on not found') {
      return errorResponse(res, 'Add-on not found', 404);
    }
    
    return errorResponse(res, 'Failed to delete add-on', 500);
  }
};
