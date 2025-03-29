import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingAddOnWhereInputSchema } from './BookingAddOnWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BookingScalarRelationFilterSchema } from './BookingScalarRelationFilterSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { AddOnNullableScalarRelationFilterSchema } from './AddOnNullableScalarRelationFilterSchema';
import { AddOnWhereInputSchema } from './AddOnWhereInputSchema';

export const BookingAddOnWhereUniqueInputSchema: z.ZodType<Prisma.BookingAddOnWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => BookingAddOnWhereInputSchema),z.lazy(() => BookingAddOnWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingAddOnWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingAddOnWhereInputSchema),z.lazy(() => BookingAddOnWhereInputSchema).array() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addOnId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  addOnName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  unitPrice: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  totalPrice: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  booking: z.union([ z.lazy(() => BookingScalarRelationFilterSchema),z.lazy(() => BookingWhereInputSchema) ]).optional(),
  addOn: z.union([ z.lazy(() => AddOnNullableScalarRelationFilterSchema),z.lazy(() => AddOnWhereInputSchema) ]).optional().nullable(),
}).strict());

export default BookingAddOnWhereUniqueInputSchema;
