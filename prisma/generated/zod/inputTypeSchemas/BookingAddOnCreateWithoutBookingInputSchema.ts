import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { AddOnCreateNestedOneWithoutBookingAddOnInputSchema } from './AddOnCreateNestedOneWithoutBookingAddOnInputSchema';

export const BookingAddOnCreateWithoutBookingInputSchema: z.ZodType<Prisma.BookingAddOnCreateWithoutBookingInput> = z.object({
  id: z.string().cuid().optional(),
  addOnName: z.string(),
  quantity: z.number().int().optional(),
  unitPrice: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  totalPrice: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  addOn: z.lazy(() => AddOnCreateNestedOneWithoutBookingAddOnInputSchema).optional()
}).strict();

export default BookingAddOnCreateWithoutBookingInputSchema;
