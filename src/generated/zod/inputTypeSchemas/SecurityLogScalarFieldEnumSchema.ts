import { z } from 'zod';

export const SecurityLogScalarFieldEnumSchema = z.enum(['id','merchantId','eventType','severity','description','userId','ipAddress','userAgent','metadata','createdAt']);

export default SecurityLogScalarFieldEnumSchema;
