import { z } from 'zod';

export const NotificationLogScalarFieldEnumSchema = z.enum(['id','notificationId','status','errorMessage','deliveredAt','openedAt','isDeleted','deletedAt','createdAt','updatedAt']);

export default NotificationLogScalarFieldEnumSchema;
