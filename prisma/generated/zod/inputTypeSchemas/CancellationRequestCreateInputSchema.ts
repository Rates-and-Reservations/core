import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationSourceSchema } from './CancellationSourceSchema';
import { CancellationStatusSchema } from './CancellationStatusSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { BookingCreateNestedOneWithoutCancellationRequestInputSchema } from './BookingCreateNestedOneWithoutCancellationRequestInputSchema';
import { BookingItemCreateNestedOneWithoutCancellationRequestInputSchema } from './BookingItemCreateNestedOneWithoutCancellationRequestInputSchema';

export const CancellationRequestCreateInputSchema: z.ZodType<Prisma.CancellationRequestCreateInput> = z.object({
  id: z.string().cuid().optional(),
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
  updatedAt: z.coerce.date().optional(),
  booking: z.lazy(() => BookingCreateNestedOneWithoutCancellationRequestInputSchema),
  bookingItem: z.lazy(() => BookingItemCreateNestedOneWithoutCancellationRequestInputSchema).optional()
}).strict();

export default CancellationRequestCreateInputSchema;
