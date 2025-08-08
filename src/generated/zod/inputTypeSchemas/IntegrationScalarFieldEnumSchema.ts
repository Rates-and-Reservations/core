import { z } from 'zod';

export const IntegrationScalarFieldEnumSchema = z.enum(['id','merchantId','name','integrationType','config','credentials','isActive','lastSyncAt','lastSyncStatus','syncErrors','createdAt','updatedAt']);

export default IntegrationScalarFieldEnumSchema;
