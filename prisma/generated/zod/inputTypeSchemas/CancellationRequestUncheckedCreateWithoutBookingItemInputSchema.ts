import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationSourceSchema } from './CancellationSourceSchema';
import { CancellationStatusSchema } from './CancellationStatusSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';

export const CancellationRequestUncheckedCreateWithoutBookingItemInputSchema: z.ZodType<Prisma.CancellationRequestUncheckedCreateWithoutBookingItemInput> = z.object({
  id: z.string().cuid().optional(),
  bookingId: z.string(),
  requestedBy: z.string().optional().nullable(),
  reason: z.string().optional().nullable(),
  source: z.lazy(() => CancellationSourceSchema).optional(),
  status: z.lazy(() => CancellationStatusSchema).optional(),
  processedAt: z.coerce.date().optional().nullable(),
  approvedBy: z.string().optional().nullable(),
  approvedAt: z.coerce.date().optional().nullable(),
  declinedAt: z.coerce.date().optional().nullable(),
  refundAmount: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default CancellationRequestUncheckedCreateWithoutBookingItemInputSchema;
