import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ResourceCountOutputTypeSelectSchema: z.ZodType<Prisma.ResourceCountOutputTypeSelect> = z.object({
  Rate: z.boolean().optional(),
  ResourceBookingConfig: z.boolean().optional(),
  WaitlistEntry: z.boolean().optional(),
  BookingRequest: z.boolean().optional(),
  ResourceAsset: z.boolean().optional(),
}).strict();

export default ResourceCountOutputTypeSelectSchema;
