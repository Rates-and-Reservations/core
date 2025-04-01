import { z } from 'zod';

export const ApiUsageStatScalarFieldEnumSchema = z.enum(['id','merchantId','apiKeyId','date','requestCount','successCount','errorCount','rateLimitHits','createdAt']);

export default ApiUsageStatScalarFieldEnumSchema;
