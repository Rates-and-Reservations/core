import { Response } from 'express';
import { successResponse, errorResponse } from '@/utils/responses';
import * as authService from '@/services/authService';
import logger from '@/utils/logger';
import { AuthenticatedRequest } from '@/types/api';

export const getCurrentUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = await authService.getCurrentUserDetails(req.user!.id);
    return successResponse(res, user, 'User information retrieved successfully');
  } catch (error) {
    logger.error('Get current user error:', error);
    return errorResponse(res, 'Failed to retrieve user information', 500);
  }
};

export const logout = async (req: AuthenticatedRequest, res: Response) => {
  try {
    // In a JWT-based system, logout is typically handled client-side
    // We can log the logout event for audit purposes
    await authService.logUserActivity(req.user!.id, 'logout', req.ip);
    return successResponse(res, null, 'User logged out successfully');
  } catch (error) {
    logger.error('Logout error:', error);
    return errorResponse(res, 'Failed to logout', 500);
  }
};

export const createApiKey = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const apiKey = await authService.createApiKey(
      req.merchant.id,
      req.body,
      req.user!.id
    );

    return successResponse(res, apiKey, 'API key created successfully', 201);
  } catch (error) {
    logger.error('Create API key error:', error);
    return errorResponse(res, 'Failed to create API key', 500);
  }
};

export const getApiKeys = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const apiKeys = await authService.getApiKeys(req.merchant.id);
    return successResponse(res, apiKeys, 'API keys retrieved successfully');
  } catch (error) {
    logger.error('Get API keys error:', error);
    return errorResponse(res, 'Failed to retrieve API keys', 500);
  }
};

export const updateApiKey = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const apiKey = await authService.updateApiKey(
      req.params.id,
      req.merchant.id,
      req.body
    );

    return successResponse(res, apiKey, 'API key updated successfully');
  } catch (error) {
    logger.error('Update API key error:', error);
    return errorResponse(res, 'Failed to update API key', 500);
  }
};

export const deleteApiKey = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    await authService.deleteApiKey(req.params.id, req.merchant.id);
    return successResponse(res, null, 'API key deleted successfully');
  } catch (error) {
    logger.error('Delete API key error:', error);
    return errorResponse(res, 'Failed to delete API key', 500);
  }
};
