import { z } from 'zod';

export const ApiKeyScalarFieldEnumSchema = z.enum(['id','merchantId','keyHash','label','description','scopes','isActive','lastUsedAt','createdAt','updatedAt']);

export default ApiKeyScalarFieldEnumSchema;
