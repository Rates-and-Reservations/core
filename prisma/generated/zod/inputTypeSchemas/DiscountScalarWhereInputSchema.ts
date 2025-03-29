import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumDiscountTypeFilterSchema } from './EnumDiscountTypeFilterSchema';
import { DiscountTypeSchema } from './DiscountTypeSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const DiscountScalarWhereInputSchema: z.ZodType<Prisma.DiscountScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DiscountScalarWhereInputSchema),z.lazy(() => DiscountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DiscountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DiscountScalarWhereInputSchema),z.lazy(() => DiscountScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  code: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  discountType: z.union([ z.lazy(() => EnumDiscountTypeFilterSchema),z.lazy(() => DiscountTypeSchema) ]).optional(),
  amount: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  usageLimit: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  usedCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  endDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default DiscountScalarWhereInputSchema;
