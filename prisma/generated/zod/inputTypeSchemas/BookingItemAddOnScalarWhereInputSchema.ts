import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const BookingItemAddOnScalarWhereInputSchema: z.ZodType<Prisma.BookingItemAddOnScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BookingItemAddOnScalarWhereInputSchema),z.lazy(() => BookingItemAddOnScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingItemAddOnScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingItemAddOnScalarWhereInputSchema),z.lazy(() => BookingItemAddOnScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingItemId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addOnId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addOnName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  unitPrice: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  totalPrice: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BookingItemAddOnScalarWhereInputSchema;
