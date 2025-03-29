import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BookingItemScalarRelationFilterSchema } from './BookingItemScalarRelationFilterSchema';
import { BookingItemWhereInputSchema } from './BookingItemWhereInputSchema';
import { AddOnScalarRelationFilterSchema } from './AddOnScalarRelationFilterSchema';
import { AddOnWhereInputSchema } from './AddOnWhereInputSchema';

export const BookingItemAddOnWhereInputSchema: z.ZodType<Prisma.BookingItemAddOnWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BookingItemAddOnWhereInputSchema),z.lazy(() => BookingItemAddOnWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingItemAddOnWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingItemAddOnWhereInputSchema),z.lazy(() => BookingItemAddOnWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingItemId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addOnId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addOnName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  unitPrice: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  totalPrice: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  bookingItem: z.union([ z.lazy(() => BookingItemScalarRelationFilterSchema),z.lazy(() => BookingItemWhereInputSchema) ]).optional(),
  addOn: z.union([ z.lazy(() => AddOnScalarRelationFilterSchema),z.lazy(() => AddOnWhereInputSchema) ]).optional(),
}).strict();

export default BookingItemAddOnWhereInputSchema;
