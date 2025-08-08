import { z } from 'zod';

export const ApiUsageStatScalarFieldEnumSchema = z.enum(['id','merchantId','apiKeyId','date','requestCount','successCount','errorCount','rateLimitHits','averageResponseTime','totalDataTransfer','isDeleted','deletedAt','createdAt']);

export default ApiUsageStatScalarFieldEnumSchema;
