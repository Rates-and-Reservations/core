import { z } from 'zod';

export const ResourceBookingConfigScalarFieldEnumSchema = z.enum(['id','resourceId','minDuration','maxDuration','bufferTime','availableDays','blackoutDates','allowMultipleBookings','enableWaitlist','cancellationPolicyId','isActive','isDeleted','deletedAt','createdAt','updatedAt']);

export default ResourceBookingConfigScalarFieldEnumSchema;
