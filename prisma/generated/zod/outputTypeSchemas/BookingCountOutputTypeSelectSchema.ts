import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BookingCountOutputTypeSelectSchema: z.ZodType<Prisma.BookingCountOutputTypeSelect> = z.object({
  PaymentActions: z.boolean().optional(),
  Notification: z.boolean().optional(),
  Invoice: z.boolean().optional(),
  BookingActivityLog: z.boolean().optional(),
  RefundRequest: z.boolean().optional(),
  BookingItem: z.boolean().optional(),
  BookingAddOn: z.boolean().optional(),
  CancellationRequest: z.boolean().optional(),
}).strict();

export default BookingCountOutputTypeSelectSchema;
