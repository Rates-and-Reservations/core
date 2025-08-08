import { z } from 'zod';

export const ResourceBookingConfigScalarFieldEnumSchema = z.enum(['id','resourceId','availableDays','blackoutDates','allowMultipleBookings','enableWaitlist','autoConfirm','cancellationPolicyId','isActive','isDeleted','deletedAt','createdAt','updatedAt']);

export default ResourceBookingConfigScalarFieldEnumSchema;
