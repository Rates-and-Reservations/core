import { z } from 'zod';

export const NotificationTemplateScalarFieldEnumSchema = z.enum(['id','merchantId','type','channel','subject','body','isActive','isDeleted','deletedAt','createdAt','updatedAt']);

export default NotificationTemplateScalarFieldEnumSchema;
