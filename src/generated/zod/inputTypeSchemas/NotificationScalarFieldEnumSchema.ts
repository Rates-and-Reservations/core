import { z } from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum(['id','merchantId','bookingId','customerId','type','channel','recipient','subject','message','errorMessage','sentAt','isDeleted','deletedAt','createdAt','updatedAt','notificationTemplateId']);

export default NotificationScalarFieldEnumSchema;
