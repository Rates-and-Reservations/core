import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BookingRequestCountOutputTypeSelectSchema: z.ZodType<Prisma.BookingRequestCountOutputTypeSelect> = z.object({
  BookingRequestFlow: z.boolean().optional(),
  BookingRequestActionValue: z.boolean().optional(),
  Booking: z.boolean().optional(),
}).strict();

export default BookingRequestCountOutputTypeSelectSchema;
