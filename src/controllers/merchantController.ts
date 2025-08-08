import { Response } from 'express';
import { successResponse, errorResponse } from '@/utils/responses';
import * as merchantService from '@/services/merchantService';
import logger from '@/utils/logger';
import { AuthenticatedRequest } from '@/types/api';

export const createMerchant = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return errorResponse(res, 'User authentication required', 401);
    }

    const merchant = await merchantService.createMerchant(req.body, req.user.id);
    return successResponse(res, merchant, 'Merchant created successfully', 201);
  } catch (error: any) {
    logger.error('Create merchant error:', error);
    
    if (error.message === 'User already has a merchant') {
      return errorResponse(res, 'User already has a merchant account', 409);
    }
    
    return errorResponse(res, 'Failed to create merchant', 500);
  }
};

export const getMerchant = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const merchant = await merchantService.getMerchantById(req.merchant.id);
    return successResponse(res, merchant, 'Merchant information retrieved successfully');
  } catch (error) {
    logger.error('Get merchant error:', error);
    return errorResponse(res, 'Failed to retrieve merchant information', 500);
  }
};

export const updateMerchant = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const merchant = await merchantService.updateMerchant(req.merchant.id, req.body);
    return successResponse(res, merchant, 'Merchant updated successfully');
  } catch (error) {
    logger.error('Update merchant error:', error);
    return errorResponse(res, 'Failed to update merchant', 500);
  }
};

export const deleteMerchant = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    await merchantService.deleteMerchant(req.merchant.id);
    return successResponse(res, null, 'Merchant deleted successfully');
  } catch (error) {
    logger.error('Delete merchant error:', error);
    return errorResponse(res, 'Failed to delete merchant', 500);
  }
};

export const createMerchantContact = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const contact = await merchantService.createMerchantContact(req.merchant.id, req.body);
    return successResponse(res, contact, 'Contact created successfully', 201);
  } catch (error) {
    logger.error('Create merchant contact error:', error);
    return errorResponse(res, 'Failed to create contact', 500);
  }
};

export const getMerchantContacts = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const contacts = await merchantService.getMerchantContacts(req.merchant.id);
    return successResponse(res, contacts, 'Contacts retrieved successfully');
  } catch (error) {
    logger.error('Get merchant contacts error:', error);
    return errorResponse(res, 'Failed to retrieve contacts', 500);
  }
};

export const updateMerchantContact = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const contact = await merchantService.updateMerchantContact(
      req.params.id,
      req.merchant.id,
      req.body
    );
    return successResponse(res, contact, 'Contact updated successfully');
  } catch (error) {
    logger.error('Update merchant contact error:', error);
    return errorResponse(res, 'Failed to update contact', 500);
  }
};

export const deleteMerchantContact = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    await merchantService.deleteMerchantContact(req.params.id, req.merchant.id);
    return successResponse(res, null, 'Contact deleted successfully');
  } catch (error) {
    logger.error('Delete merchant contact error:', error);
    return errorResponse(res, 'Failed to delete contact', 500);
  }
};

export const inviteMerchantUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const user = await merchantService.inviteMerchantUser(req.merchant.id, req.body);
    return successResponse(res, user, 'User invited successfully', 201);
  } catch (error: any) {
    logger.error('Invite merchant user error:', error);
    
    if (error.message === 'User already exists in merchant') {
      return errorResponse(res, 'User is already part of this merchant', 409);
    }
    
    return errorResponse(res, 'Failed to invite user', 500);
  }
};

export const getMerchantUsers = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const users = await merchantService.getMerchantUsers(req.merchant.id);
    return successResponse(res, users, 'Users retrieved successfully');
  } catch (error) {
    logger.error('Get merchant users error:', error);
    return errorResponse(res, 'Failed to retrieve users', 500);
  }
};

export const updateMerchantUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const user = await merchantService.updateMerchantUser(
      req.params.id,
      req.merchant.id,
      req.body
    );
    return successResponse(res, user, 'User updated successfully');
  } catch (error) {
    logger.error('Update merchant user error:', error);
    return errorResponse(res, 'Failed to update user', 500);
  }
};

export const removeMerchantUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    await merchantService.removeMerchantUser(req.params.id, req.merchant.id);
    return successResponse(res, null, 'User removed successfully');
  } catch (error) {
    logger.error('Remove merchant user error:', error);
    return errorResponse(res, 'Failed to remove user', 500);
  }
};

export const uploadMerchantAsset = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    // Note: File upload middleware would be added here
    const asset = await merchantService.uploadMerchantAsset(req.merchant.id, req.body);
    return successResponse(res, asset, 'Asset uploaded successfully', 201);
  } catch (error) {
    logger.error('Upload merchant asset error:', error);
    return errorResponse(res, 'Failed to upload asset', 500);
  }
};

export const getMerchantAssets = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const assets = await merchantService.getMerchantAssets(req.merchant.id);
    return successResponse(res, assets, 'Assets retrieved successfully');
  } catch (error) {
    logger.error('Get merchant assets error:', error);
    return errorResponse(res, 'Failed to retrieve assets', 500);
  }
};

export const deleteMerchantAsset = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    await merchantService.deleteMerchantAsset(req.params.id, req.merchant.id);
    return successResponse(res, null, 'Asset deleted successfully');
  } catch (error) {
    logger.error('Delete merchant asset error:', error);
    return errorResponse(res, 'Failed to delete asset', 500);
  }
};
