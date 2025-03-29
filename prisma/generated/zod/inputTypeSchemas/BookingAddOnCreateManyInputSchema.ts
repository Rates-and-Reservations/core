import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';

export const BookingAddOnCreateManyInputSchema: z.ZodType<Prisma.BookingAddOnCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  bookingId: z.string(),
  addOnId: z.string().optional().nullable(),
  addOnName: z.string(),
  quantity: z.number().int().optional(),
  unitPrice: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  totalPrice: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BookingAddOnCreateManyInputSchema;
