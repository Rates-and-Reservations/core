import { z } from 'zod';

export const AvailabilityBlockScalarFieldEnumSchema = z.enum(['id','resourceId','startTime','endTime','blockType','reason','isRecurring','recurrenceRule','isActive','isDeleted','deletedAt','createdAt','updatedAt']);

export default AvailabilityBlockScalarFieldEnumSchema;
