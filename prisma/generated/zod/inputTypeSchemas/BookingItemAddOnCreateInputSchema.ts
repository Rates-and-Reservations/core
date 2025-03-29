import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { BookingItemCreateNestedOneWithoutBookingItemAddOnInputSchema } from './BookingItemCreateNestedOneWithoutBookingItemAddOnInputSchema';
import { AddOnCreateNestedOneWithoutBookingItemAddOnInputSchema } from './AddOnCreateNestedOneWithoutBookingItemAddOnInputSchema';

export const BookingItemAddOnCreateInputSchema: z.ZodType<Prisma.BookingItemAddOnCreateInput> = z.object({
  id: z.string().cuid().optional(),
  addOnName: z.string(),
  unitPrice: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  quantity: z.number().int().optional(),
  totalPrice: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bookingItem: z.lazy(() => BookingItemCreateNestedOneWithoutBookingItemAddOnInputSchema),
  addOn: z.lazy(() => AddOnCreateNestedOneWithoutBookingItemAddOnInputSchema)
}).strict();

export default BookingItemAddOnCreateInputSchema;
