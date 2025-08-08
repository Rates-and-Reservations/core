import { z } from 'zod';

export const ReportTemplateScalarFieldEnumSchema = z.enum(['id','merchantId','name','description','reportType','config','schedule','isActive','createdBy','createdAt','updatedAt']);

export default ReportTemplateScalarFieldEnumSchema;
