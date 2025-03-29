import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryWhereInputSchema } from './WaitlistEntryWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { EnumWaitlistStatusFilterSchema } from './EnumWaitlistStatusFilterSchema';
import { WaitlistStatusSchema } from './WaitlistStatusSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { ResourceScalarRelationFilterSchema } from './ResourceScalarRelationFilterSchema';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';
import { CustomerNullableScalarRelationFilterSchema } from './CustomerNullableScalarRelationFilterSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';

export const WaitlistEntryWhereUniqueInputSchema: z.ZodType<Prisma.WaitlistEntryWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => WaitlistEntryWhereInputSchema),z.lazy(() => WaitlistEntryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WaitlistEntryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WaitlistEntryWhereInputSchema),z.lazy(() => WaitlistEntryWhereInputSchema).array() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  resourceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  customerId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  desiredStartTime: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  desiredEndTime: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumWaitlistStatusFilterSchema),z.lazy(() => WaitlistStatusSchema) ]).optional(),
  priority: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  notifiedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  promotedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  resource: z.union([ z.lazy(() => ResourceScalarRelationFilterSchema),z.lazy(() => ResourceWhereInputSchema) ]).optional(),
  customer: z.union([ z.lazy(() => CustomerNullableScalarRelationFilterSchema),z.lazy(() => CustomerWhereInputSchema) ]).optional().nullable(),
}).strict());

export default WaitlistEntryWhereUniqueInputSchema;
