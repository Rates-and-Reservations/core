import { z } from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum(['id','merchantId','bookingId','customerId','type','channel','notificationTemplateId','recipient','subject','message','status','errorMessage','sentAt','isDeleted','deletedAt','createdAt','updatedAt']);

export default NotificationScalarFieldEnumSchema;
