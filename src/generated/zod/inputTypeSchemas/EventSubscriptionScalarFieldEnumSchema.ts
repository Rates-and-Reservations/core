import { z } from 'zod';

export const EventSubscriptionScalarFieldEnumSchema = z.enum(['id','merchantId','endpoint','events','isActive','lastPingAt','createdAt','updatedAt']);

export default EventSubscriptionScalarFieldEnumSchema;
