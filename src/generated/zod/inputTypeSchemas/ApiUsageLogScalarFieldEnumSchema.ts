import { z } from 'zod';

export const ApiUsageLogScalarFieldEnumSchema = z.enum(['id','merchantId','apiKeyId','endpoint','method','statusCode','ipAddress','userAgent','responseTimeMs','rateLimitExceeded','createdAt']);

export default ApiUsageLogScalarFieldEnumSchema;
