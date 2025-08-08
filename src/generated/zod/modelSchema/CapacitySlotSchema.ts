import { z } from 'zod';

/////////////////////////////////////////
// CAPACITY SLOT SCHEMA
/////////////////////////////////////////

/**
 * CapacitySlot: Tracks capacity utilization over time
 * @group Availability
 */
export const CapacitySlotSchema = z.object({
  id: z.string().cuid(),
  resourceId: z.string(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  totalCapacity: z.number().int(),
  bookedCount: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type CapacitySlot = z.infer<typeof CapacitySlotSchema>

export default CapacitySlotSchema;
