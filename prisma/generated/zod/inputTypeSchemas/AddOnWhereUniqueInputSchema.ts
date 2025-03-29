import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnWhereInputSchema } from './AddOnWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { RateAddOnListRelationFilterSchema } from './RateAddOnListRelationFilterSchema';
import { BookingItemAddOnListRelationFilterSchema } from './BookingItemAddOnListRelationFilterSchema';
import { BookingAddOnListRelationFilterSchema } from './BookingAddOnListRelationFilterSchema';

export const AddOnWhereUniqueInputSchema: z.ZodType<Prisma.AddOnWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => AddOnWhereInputSchema),z.lazy(() => AddOnWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AddOnWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AddOnWhereInputSchema),z.lazy(() => AddOnWhereInputSchema).array() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  currency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  showInBooking: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  RateAddOn: z.lazy(() => RateAddOnListRelationFilterSchema).optional(),
  BookingItemAddOn: z.lazy(() => BookingItemAddOnListRelationFilterSchema).optional(),
  BookingAddOn: z.lazy(() => BookingAddOnListRelationFilterSchema).optional()
}).strict());

export default AddOnWhereUniqueInputSchema;
