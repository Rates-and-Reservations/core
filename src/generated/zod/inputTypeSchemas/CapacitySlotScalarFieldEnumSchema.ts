import { z } from 'zod';

export const CapacitySlotScalarFieldEnumSchema = z.enum(['id','resourceId','startTime','endTime','totalCapacity','bookedCount','createdAt','updatedAt']);

export default CapacitySlotScalarFieldEnumSchema;
