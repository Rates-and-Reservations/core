import { z } from 'zod';

export const AuditLogScalarFieldEnumSchema = z.enum(['id','merchantId','userId','action','resourceType','resourceId','description','ipAddress','userAgent','performedAt','performedBy','isDeleted','deletedAt','createdAt']);

export default AuditLogScalarFieldEnumSchema;
