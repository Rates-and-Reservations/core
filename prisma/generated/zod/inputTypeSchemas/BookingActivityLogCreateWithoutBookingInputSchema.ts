import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionTypeSchema } from './BookingActionTypeSchema';
import { MerchantCreateNestedOneWithoutBookingActivityLogInputSchema } from './MerchantCreateNestedOneWithoutBookingActivityLogInputSchema';

export const BookingActivityLogCreateWithoutBookingInputSchema: z.ZodType<Prisma.BookingActivityLogCreateWithoutBookingInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string().optional().nullable(),
  systemAction: z.boolean().optional(),
  action: z.lazy(() => BookingActionTypeSchema),
  previousValue: z.string().optional().nullable(),
  newValue: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  performedAt: z.coerce.date().optional().nullable(),
  performedBy: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutBookingActivityLogInputSchema)
}).strict();

export default BookingActivityLogCreateWithoutBookingInputSchema;
