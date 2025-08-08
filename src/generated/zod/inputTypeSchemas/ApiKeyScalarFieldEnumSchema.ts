import { z } from 'zod';

export const ApiKeyScalarFieldEnumSchema = z.enum(['id','merchantId','keyHash','label','description','scopes','isActive','lastUsedAt','isDeleted','deletedAt','createdAt','updatedAt']);

export default ApiKeyScalarFieldEnumSchema;
