import { z } from 'zod';

export const OAuthTokenScalarFieldEnumSchema = z.enum(['id','appId','merchantId','accessToken','refreshToken','expiresAt','scopes','createdAt','updatedAt']);

export default OAuthTokenScalarFieldEnumSchema;
