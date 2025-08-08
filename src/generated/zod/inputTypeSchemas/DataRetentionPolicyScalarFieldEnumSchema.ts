import { z } from 'zod';

export const DataRetentionPolicyScalarFieldEnumSchema = z.enum(['id','merchantId','dataType','retentionPeriod','isActive','lastRunAt','nextRunAt','createdAt','updatedAt']);

export default DataRetentionPolicyScalarFieldEnumSchema;
