import { Response } from 'express';
import { successResponse, errorResponse, paginatedResponse } from '@/utils/responses';
import * as resourceService from '@/services/resourceService';
import logger from '@/utils/logger';
import { AuthenticatedRequest } from '@/types/api';

export const createResource = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const resource = await resourceService.createResource(req.merchant.id, req.body);
    return successResponse(res, resource, 'Resource created successfully', 201);
  } catch (error) {
    logger.error('Create resource error:', error);
    return errorResponse(res, 'Failed to create resource', 500);
  }
};

export const getResources = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { page = 1, limit = 20, search, isActive } = req.query as any;
    
    const result = await resourceService.getResources(req.merchant.id, {
      page: parseInt(page),
      limit: parseInt(limit),
      search,
      isActive: isActive !== undefined ? isActive === 'true' : undefined,
    });

    return paginatedResponse(
      res, 
      result.resources, 
      {
        page: parseInt(page),
        limit: parseInt(limit),
        total: result.total,
      },
      'Resources retrieved successfully'
    );
  } catch (error) {
    logger.error('Get resources error:', error);
    return errorResponse(res, 'Failed to retrieve resources', 500);
  }
};

export const getResource = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const resource = await resourceService.getResourceById(req.params.id, req.merchant.id);
    
    if (!resource) {
      return errorResponse(res, 'Resource not found', 404);
    }

    return successResponse(res, resource, 'Resource retrieved successfully');
  } catch (error) {
    logger.error('Get resource error:', error);
    return errorResponse(res, 'Failed to retrieve resource', 500);
  }
};

export const updateResource = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const resource = await resourceService.updateResource(req.params.id, req.merchant.id, req.body);
    return successResponse(res, resource, 'Resource updated successfully');
  } catch (error: any) {
    logger.error('Update resource error:', error);
    
    if (error.message === 'Resource not found') {
      return errorResponse(res, 'Resource not found', 404);
    }
    
    return errorResponse(res, 'Failed to update resource', 500);
  }
};

export const deleteResource = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    await resourceService.deleteResource(req.params.id, req.merchant.id);
    return successResponse(res, null, 'Resource deleted successfully');
  } catch (error: any) {
    logger.error('Delete resource error:', error);
    
    if (error.message === 'Resource not found') {
      return errorResponse(res, 'Resource not found', 404);
    }
    
    return errorResponse(res, 'Failed to delete resource', 500);
  }
};

export const getResourceAvailability = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { startDate, endDate } = req.query as any;
    
    if (!startDate || !endDate) {
      return errorResponse(res, 'startDate and endDate are required', 400);
    }

    const availability = await resourceService.getResourceAvailability(
      req.params.id,
      req.merchant.id,
      new Date(startDate),
      new Date(endDate)
    );

    return successResponse(res, availability, 'Availability retrieved successfully');
  } catch (error) {
    logger.error('Get resource availability error:', error);
    return errorResponse(res, 'Failed to retrieve availability', 500);
  }
};

// Availability Blocks
export const createAvailabilityBlock = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const block = await resourceService.createAvailabilityBlock(req.params.id, req.merchant.id, req.body);
    return successResponse(res, block, 'Availability block created successfully', 201);
  } catch (error) {
    logger.error('Create availability block error:', error);
    return errorResponse(res, 'Failed to create availability block', 500);
  }
};

export const getAvailabilityBlocks = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const blocks = await resourceService.getAvailabilityBlocks(req.params.id, req.merchant.id);
    return successResponse(res, blocks, 'Availability blocks retrieved successfully');
  } catch (error) {
    logger.error('Get availability blocks error:', error);
    return errorResponse(res, 'Failed to retrieve availability blocks', 500);
  }
};

export const updateAvailabilityBlock = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const block = await resourceService.updateAvailabilityBlock(
      req.params.blockId,
      req.params.id,
      req.merchant.id,
      req.body
    );
    return successResponse(res, block, 'Availability block updated successfully');
  } catch (error) {
    logger.error('Update availability block error:', error);
    return errorResponse(res, 'Failed to update availability block', 500);
  }
};

export const deleteAvailabilityBlock = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    await resourceService.deleteAvailabilityBlock(req.params.blockId, req.params.id, req.merchant.id);
    return successResponse(res, null, 'Availability block deleted successfully');
  } catch (error) {
    logger.error('Delete availability block error:', error);
    return errorResponse(res, 'Failed to delete availability block', 500);
  }
};

// Availability Rules
export const createAvailabilityRule = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const rule = await resourceService.createAvailabilityRule(req.params.id, req.merchant.id, req.body);
    return successResponse(res, rule, 'Availability rule created successfully', 201);
  } catch (error) {
    logger.error('Create availability rule error:', error);
    return errorResponse(res, 'Failed to create availability rule', 500);
  }
};

export const getAvailabilityRules = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const rules = await resourceService.getAvailabilityRules(req.params.id, req.merchant.id);
    return successResponse(res, rules, 'Availability rules retrieved successfully');
  } catch (error) {
    logger.error('Get availability rules error:', error);
    return errorResponse(res, 'Failed to retrieve availability rules', 500);
  }
};

export const updateAvailabilityRule = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const rule = await resourceService.updateAvailabilityRule(
      req.params.ruleId,
      req.params.id,
      req.merchant.id,
      req.body
    );
    return successResponse(res, rule, 'Availability rule updated successfully');
  } catch (error) {
    logger.error('Update availability rule error:', error);
    return errorResponse(res, 'Failed to update availability rule', 500);
  }
};

export const deleteAvailabilityRule = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    await resourceService.deleteAvailabilityRule(req.params.ruleId, req.params.id, req.merchant.id);
    return successResponse(res, null, 'Availability rule deleted successfully');
  } catch (error) {
    logger.error('Delete availability rule error:', error);
    return errorResponse(res, 'Failed to delete availability rule', 500);
  }
};

// Booking Constraints
export const createBookingConstraint = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const constraint = await resourceService.createBookingConstraint(req.params.id, req.merchant.id, req.body);
    return successResponse(res, constraint, 'Booking constraint created successfully', 201);
  } catch (error) {
    logger.error('Create booking constraint error:', error);
    return errorResponse(res, 'Failed to create booking constraint', 500);
  }
};

export const getBookingConstraints = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const constraints = await resourceService.getBookingConstraints(req.params.id, req.merchant.id);
    return successResponse(res, constraints, 'Booking constraints retrieved successfully');
  } catch (error) {
    logger.error('Get booking constraints error:', error);
    return errorResponse(res, 'Failed to retrieve booking constraints', 500);
  }
};

export const updateBookingConstraint = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const constraint = await resourceService.updateBookingConstraint(
      req.params.constraintId,
      req.params.id,
      req.merchant.id,
      req.body
    );
    return successResponse(res, constraint, 'Booking constraint updated successfully');
  } catch (error) {
    logger.error('Update booking constraint error:', error);
    return errorResponse(res, 'Failed to update booking constraint', 500);
  }
};

export const deleteBookingConstraint = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    await resourceService.deleteBookingConstraint(req.params.constraintId, req.params.id, req.merchant.id);
    return successResponse(res, null, 'Booking constraint deleted successfully');
  } catch (error) {
    logger.error('Delete booking constraint error:', error);
    return errorResponse(res, 'Failed to delete booking constraint', 500);
  }
};

// Resource Assets
export const uploadResourceAsset = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const asset = await resourceService.uploadResourceAsset(req.params.id, req.merchant.id, req.body);
    return successResponse(res, asset, 'Asset uploaded successfully', 201);
  } catch (error) {
    logger.error('Upload resource asset error:', error);
    return errorResponse(res, 'Failed to upload asset', 500);
  }
};

export const getResourceAssets = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const assets = await resourceService.getResourceAssets(req.params.id, req.merchant.id);
    return successResponse(res, assets, 'Assets retrieved successfully');
  } catch (error) {
    logger.error('Get resource assets error:', error);
    return errorResponse(res, 'Failed to retrieve assets', 500);
  }
};

export const updateResourceAsset = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const asset = await resourceService.updateResourceAsset(
      req.params.assetId,
      req.params.id,
      req.merchant.id,
      req.body
    );
    return successResponse(res, asset, 'Asset updated successfully');
  } catch (error) {
    logger.error('Update resource asset error:', error);
    return errorResponse(res, 'Failed to update asset', 500);
  }
};

export const deleteResourceAsset = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    await resourceService.deleteResourceAsset(req.params.assetId, req.params.id, req.merchant.id);
    return successResponse(res, null, 'Asset deleted successfully');
  } catch (error) {
    logger.error('Delete resource asset error:', error);
    return errorResponse(res, 'Failed to delete asset', 500);
  }
};
