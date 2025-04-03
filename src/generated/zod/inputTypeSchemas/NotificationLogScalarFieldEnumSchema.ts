import { z } from 'zod';

export const NotificationLogScalarFieldEnumSchema = z.enum(['id','notificationId','status','errorMessage','isDeleted','deletedAt','createdAt','updatedAt']);

export default NotificationLogScalarFieldEnumSchema;
