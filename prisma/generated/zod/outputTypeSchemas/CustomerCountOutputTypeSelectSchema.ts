import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CustomerCountOutputTypeSelectSchema: z.ZodType<Prisma.CustomerCountOutputTypeSelect> = z.object({
  Notification: z.boolean().optional(),
  WaitlistEntry: z.boolean().optional(),
  Invoice: z.boolean().optional(),
  BookingRequest: z.boolean().optional(),
  Booking: z.boolean().optional(),
}).strict();

export default CustomerCountOutputTypeSelectSchema;
