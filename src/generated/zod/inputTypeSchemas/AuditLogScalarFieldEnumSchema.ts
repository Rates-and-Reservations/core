import { z } from 'zod';

export const AuditLogScalarFieldEnumSchema = z.enum(['id','merchantId','userId','action','resourceType','resourceId','description','ipAddress','userAgent','performedAt','performedBy','createdAt']);

export default AuditLogScalarFieldEnumSchema;
