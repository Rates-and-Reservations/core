import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { RateAddOnUncheckedCreateNestedManyWithoutAddOnInputSchema } from './RateAddOnUncheckedCreateNestedManyWithoutAddOnInputSchema';
import { BookingItemAddOnUncheckedCreateNestedManyWithoutAddOnInputSchema } from './BookingItemAddOnUncheckedCreateNestedManyWithoutAddOnInputSchema';
import { BookingAddOnUncheckedCreateNestedManyWithoutAddOnInputSchema } from './BookingAddOnUncheckedCreateNestedManyWithoutAddOnInputSchema';

export const AddOnUncheckedCreateWithoutMerchantInputSchema: z.ZodType<Prisma.AddOnUncheckedCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  currency: z.string(),
  showInBooking: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  RateAddOn: z.lazy(() => RateAddOnUncheckedCreateNestedManyWithoutAddOnInputSchema).optional(),
  BookingItemAddOn: z.lazy(() => BookingItemAddOnUncheckedCreateNestedManyWithoutAddOnInputSchema).optional(),
  BookingAddOn: z.lazy(() => BookingAddOnUncheckedCreateNestedManyWithoutAddOnInputSchema).optional()
}).strict();

export default AddOnUncheckedCreateWithoutMerchantInputSchema;
