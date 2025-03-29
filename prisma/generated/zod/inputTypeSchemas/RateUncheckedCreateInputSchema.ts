import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { RateDurationTypeSchema } from './RateDurationTypeSchema';
import { TaxTypeSchema } from './TaxTypeSchema';
import { DiscountUncheckedCreateNestedManyWithoutAppliesToRatesInputSchema } from './DiscountUncheckedCreateNestedManyWithoutAppliesToRatesInputSchema';
import { RateAddOnUncheckedCreateNestedManyWithoutRateInputSchema } from './RateAddOnUncheckedCreateNestedManyWithoutRateInputSchema';
import { BookingRateSnapshotUncheckedCreateNestedManyWithoutRateInputSchema } from './BookingRateSnapshotUncheckedCreateNestedManyWithoutRateInputSchema';

export const RateUncheckedCreateInputSchema: z.ZodType<Prisma.RateUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  resourceId: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  currency: z.string(),
  durationType: z.lazy(() => RateDurationTypeSchema),
  isDefault: z.boolean().optional(),
  isPublished: z.boolean().optional(),
  isActive: z.boolean().optional(),
  orderIndex: z.number().int().optional(),
  bookingStartDate: z.coerce.date().optional().nullable(),
  bookingEndDate: z.coerce.date().optional().nullable(),
  usageStartDate: z.coerce.date().optional().nullable(),
  usageEndDate: z.coerce.date().optional().nullable(),
  taxType: z.lazy(() => TaxTypeSchema).optional(),
  taxAmount: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Discount: z.lazy(() => DiscountUncheckedCreateNestedManyWithoutAppliesToRatesInputSchema).optional(),
  RateAddOn: z.lazy(() => RateAddOnUncheckedCreateNestedManyWithoutRateInputSchema).optional(),
  BookingRateSnapshot: z.lazy(() => BookingRateSnapshotUncheckedCreateNestedManyWithoutRateInputSchema).optional()
}).strict();

export default RateUncheckedCreateInputSchema;
