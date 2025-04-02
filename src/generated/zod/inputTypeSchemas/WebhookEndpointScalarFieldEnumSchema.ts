import { z } from 'zod';

export const WebhookEndpointScalarFieldEnumSchema = z.enum(['id','merchantId','name','url','secret','events','isActive','isDeleted','deletedAt','createdAt','updatedAt']);

export default WebhookEndpointScalarFieldEnumSchema;
