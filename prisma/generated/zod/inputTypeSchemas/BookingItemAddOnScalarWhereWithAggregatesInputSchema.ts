import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DecimalWithAggregatesFilterSchema } from './DecimalWithAggregatesFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const BookingItemAddOnScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BookingItemAddOnScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BookingItemAddOnScalarWhereWithAggregatesInputSchema),z.lazy(() => BookingItemAddOnScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingItemAddOnScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingItemAddOnScalarWhereWithAggregatesInputSchema),z.lazy(() => BookingItemAddOnScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  bookingItemId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  addOnId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  addOnName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  unitPrice: z.union([ z.lazy(() => DecimalWithAggregatesFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  totalPrice: z.union([ z.lazy(() => DecimalWithAggregatesFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BookingItemAddOnScalarWhereWithAggregatesInputSchema;
