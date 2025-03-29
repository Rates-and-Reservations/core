import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { RateDurationTypeSchema } from './RateDurationTypeSchema';
import { TaxTypeSchema } from './TaxTypeSchema';
import { RateCreateNestedOneWithoutBookingRateSnapshotInputSchema } from './RateCreateNestedOneWithoutBookingRateSnapshotInputSchema';
import { BookingItemCreateNestedManyWithoutBookingRateSnapshotInputSchema } from './BookingItemCreateNestedManyWithoutBookingRateSnapshotInputSchema';

export const BookingRateSnapshotCreateInputSchema: z.ZodType<Prisma.BookingRateSnapshotCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  currency: z.string(),
  durationType: z.lazy(() => RateDurationTypeSchema),
  isDefault: z.boolean().optional(),
  isActive: z.boolean().optional(),
  bookingStartDate: z.coerce.date().optional().nullable(),
  bookingEndDate: z.coerce.date().optional().nullable(),
  usageStartDate: z.coerce.date().optional().nullable(),
  usageEndDate: z.coerce.date().optional().nullable(),
  taxType: z.lazy(() => TaxTypeSchema).optional(),
  taxAmount: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  rate: z.lazy(() => RateCreateNestedOneWithoutBookingRateSnapshotInputSchema),
  BookingItem: z.lazy(() => BookingItemCreateNestedManyWithoutBookingRateSnapshotInputSchema).optional()
}).strict();

export default BookingRateSnapshotCreateInputSchema;
