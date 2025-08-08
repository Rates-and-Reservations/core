import { z } from 'zod';

export const AvailabilityRuleScalarFieldEnumSchema = z.enum(['id','resourceId','dayOfWeek','startTime','endTime','validFrom','validTo','isActive','isDeleted','deletedAt','createdAt','updatedAt']);

export default AvailabilityRuleScalarFieldEnumSchema;
