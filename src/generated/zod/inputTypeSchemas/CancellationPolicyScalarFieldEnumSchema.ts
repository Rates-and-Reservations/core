import { z } from 'zod';

export const CancellationPolicyScalarFieldEnumSchema = z.enum(['id','merchantId','name','description','refundType','refundAmount','timeLimitHours','appliesTo','isDeleted','deletedAt','createdAt','updatedAt']);

export default CancellationPolicyScalarFieldEnumSchema;
