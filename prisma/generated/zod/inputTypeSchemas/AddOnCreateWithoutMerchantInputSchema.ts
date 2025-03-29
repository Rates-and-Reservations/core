import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { RateAddOnCreateNestedManyWithoutAddOnInputSchema } from './RateAddOnCreateNestedManyWithoutAddOnInputSchema';
import { BookingItemAddOnCreateNestedManyWithoutAddOnInputSchema } from './BookingItemAddOnCreateNestedManyWithoutAddOnInputSchema';
import { BookingAddOnCreateNestedManyWithoutAddOnInputSchema } from './BookingAddOnCreateNestedManyWithoutAddOnInputSchema';

export const AddOnCreateWithoutMerchantInputSchema: z.ZodType<Prisma.AddOnCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  currency: z.string(),
  showInBooking: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  RateAddOn: z.lazy(() => RateAddOnCreateNestedManyWithoutAddOnInputSchema).optional(),
  BookingItemAddOn: z.lazy(() => BookingItemAddOnCreateNestedManyWithoutAddOnInputSchema).optional(),
  BookingAddOn: z.lazy(() => BookingAddOnCreateNestedManyWithoutAddOnInputSchema).optional()
}).strict();

export default AddOnCreateWithoutMerchantInputSchema;
