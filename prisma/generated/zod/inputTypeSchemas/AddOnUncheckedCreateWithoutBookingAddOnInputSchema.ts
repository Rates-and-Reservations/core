import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { RateAddOnUncheckedCreateNestedManyWithoutAddOnInputSchema } from './RateAddOnUncheckedCreateNestedManyWithoutAddOnInputSchema';
import { BookingItemAddOnUncheckedCreateNestedManyWithoutAddOnInputSchema } from './BookingItemAddOnUncheckedCreateNestedManyWithoutAddOnInputSchema';

export const AddOnUncheckedCreateWithoutBookingAddOnInputSchema: z.ZodType<Prisma.AddOnUncheckedCreateWithoutBookingAddOnInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  currency: z.string(),
  showInBooking: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  RateAddOn: z.lazy(() => RateAddOnUncheckedCreateNestedManyWithoutAddOnInputSchema).optional(),
  BookingItemAddOn: z.lazy(() => BookingItemAddOnUncheckedCreateNestedManyWithoutAddOnInputSchema).optional()
}).strict();

export default AddOnUncheckedCreateWithoutBookingAddOnInputSchema;
