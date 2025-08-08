import { Response, NextFunction } from 'express';
import { createClerkClient, verifyToken } from '@clerk/backend';
import bcrypt from 'bcryptjs';
import prisma from '@/config/database';
import { errorResponse } from '@/utils/responses';
import logger from '@/utils/logger';
import { AuthenticatedRequest } from '@/types/api';

/**
 * Clerk authentication middleware
 */
export const clerkAuthMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return errorResponse(res, 'No authentication token provided', 401);
    }

    const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

    if (!clerkClient) {
      return errorResponse(res, 'Clerk client not initialized', 500);
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    try {
      // Verify the Clerk JWT token using the new SDK
      const payload = await verifyToken(token, {
        secretKey: process.env.CLERK_SECRET_KEY!,
      });

      if (!payload.sub) {
        return errorResponse(res, 'Invalid token payload', 401);
      }

      // Get user details from Clerk
      const clerkUser = await clerkClient.users.getUser(payload.sub);

      // Get the primary email
      const primaryEmail = clerkUser.emailAddresses.find(
        (email) => email.id === clerkUser.primaryEmailAddressId
      )?.emailAddress;

      if (!primaryEmail) {
        return errorResponse(res, 'No email found for user', 401);
      }

      // Check if user exists in our system and get merchant association
      const merchantUser = await prisma.merchantUser.findFirst({
        where: {
          userId: payload.sub,
          isActive: true,
          isDeleted: false,
        },
        include: {
          merchant: {
            select: {
              id: true,
              name: true,
              ownerId: true,
              isActive: true,
            },
          },
        },
      });

      // Set user information on request
      req.user = {
        id: payload.sub,
        email: primaryEmail,
        merchantId: merchantUser?.merchantId,
        role: merchantUser?.role,
      };

      // Set merchant information if available
      if (merchantUser?.merchant) {
        req.merchant = {
          id: merchantUser.merchant.id,
          name: merchantUser.merchant.name,
          ownerId: merchantUser.merchant.ownerId,
        };
      }

      next();
    } catch (clerkError: any) {
      logger.error('Clerk token verification failed:', clerkError);
      return errorResponse(res, 'Invalid authentication token', 401);
    }
  } catch (error) {
    logger.error('Authentication middleware error:', error);
    return errorResponse(res, 'Authentication failed', 500);
  }
};

/**
 * API Key authentication middleware (for programmatic access)
 */
export const apiKeyAuthMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const apiKey = req.headers['x-api-key'] as string;

    if (!apiKey) {
      return errorResponse(res, 'API key required', 401);
    }

    // Find the API key in database by comparing hashes
    const storedApiKeys = await prisma.apiKey.findMany({
      where: {
        isActive: true,
        isDeleted: false,
      },
      include: {
        merchant: {
          select: {
            id: true,
            name: true,
            ownerId: true,
            isActive: true,
          },
        },
      },
    });

    let validApiKey = null;
    
    // Check each stored API key hash against the provided key
    for (const stored of storedApiKeys) {
      const isValid = await bcrypt.compare(apiKey, stored.keyHash);
      if (isValid) {
        validApiKey = stored;
        break;
      }
    }

    if (!validApiKey || !validApiKey.merchant.isActive) {
      return errorResponse(res, 'Invalid API key', 401);
    }

    // Update last used timestamp
    await prisma.apiKey.update({
      where: { id: validApiKey.id },
      data: { lastUsedAt: new Date() },
    });

    // Set merchant information on request
    req.merchant = {
      id: validApiKey.merchant.id,
      name: validApiKey.merchant.name,
      ownerId: validApiKey.merchant.ownerId,
    };

    // Set API key information for rate limiting and logging
    req.user = {
      id: `api-key-${validApiKey.id}`,
      email: 'api-key-access',
      merchantId: validApiKey.merchantId,
      role: 'API_KEY',
    };

    next();
  } catch (error) {
    logger.error('API key authentication error:', error);
    return errorResponse(res, 'API key authentication failed', 500);
  }
};

/**
 * Combined authentication middleware (tries Clerk first, then API key)
 */
export const authMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  const apiKey = req.headers['x-api-key'];

  // Try Clerk authentication first
  if (authHeader?.startsWith('Bearer ')) {
    return clerkAuthMiddleware(req, res, next);
  }

  // Try API key authentication
  if (apiKey) {
    return apiKeyAuthMiddleware(req, res, next);
  }

  return errorResponse(res, 'Authentication required', 401);
};

/**
 * Role-based authorization middleware
 */
export const requireRole = (allowedRoles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user?.role) {
      return errorResponse(res, 'Access denied: No role assigned', 403);
    }

    if (!allowedRoles.includes(req.user.role)) {
      return errorResponse(res, 'Access denied: Insufficient permissions', 403);
    }

    next();
  };
};

/**
 * Merchant ownership verification middleware
 */
export const requireMerchantAccess = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.merchant) {
    return errorResponse(res, 'Merchant access required', 403);
  }

  next();
};

