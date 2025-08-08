import { z } from 'zod';

export const OAuthTokenScalarFieldEnumSchema = z.enum(['id','appId','merchantId','accessToken','refreshToken','tokenType','expiresAt','scopes','isRevoked','revokedAt','isDeleted','deletedAt','createdAt','updatedAt']);

export default OAuthTokenScalarFieldEnumSchema;
