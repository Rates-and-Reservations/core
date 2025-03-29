import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { BookingCreateNestedOneWithoutBookingAddOnInputSchema } from './BookingCreateNestedOneWithoutBookingAddOnInputSchema';

export const BookingAddOnCreateWithoutAddOnInputSchema: z.ZodType<Prisma.BookingAddOnCreateWithoutAddOnInput> = z.object({
  id: z.string().cuid().optional(),
  addOnName: z.string(),
  quantity: z.number().int().optional(),
  unitPrice: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  totalPrice: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  booking: z.lazy(() => BookingCreateNestedOneWithoutBookingAddOnInputSchema)
}).strict();

export default BookingAddOnCreateWithoutAddOnInputSchema;
