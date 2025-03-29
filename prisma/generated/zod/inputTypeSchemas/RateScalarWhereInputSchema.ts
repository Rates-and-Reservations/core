import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { EnumRateDurationTypeFilterSchema } from './EnumRateDurationTypeFilterSchema';
import { RateDurationTypeSchema } from './RateDurationTypeSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { EnumTaxTypeFilterSchema } from './EnumTaxTypeFilterSchema';
import { TaxTypeSchema } from './TaxTypeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const RateScalarWhereInputSchema: z.ZodType<Prisma.RateScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RateScalarWhereInputSchema),z.lazy(() => RateScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RateScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RateScalarWhereInputSchema),z.lazy(() => RateScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  resourceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  currency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  durationType: z.union([ z.lazy(() => EnumRateDurationTypeFilterSchema),z.lazy(() => RateDurationTypeSchema) ]).optional(),
  isDefault: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isPublished: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  orderIndex: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bookingStartDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  bookingEndDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  usageStartDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  usageEndDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  taxType: z.union([ z.lazy(() => EnumTaxTypeFilterSchema),z.lazy(() => TaxTypeSchema) ]).optional(),
  taxAmount: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default RateScalarWhereInputSchema;
