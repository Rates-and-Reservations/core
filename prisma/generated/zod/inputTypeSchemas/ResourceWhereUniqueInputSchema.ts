import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { ResourceTemplateScalarRelationFilterSchema } from './ResourceTemplateScalarRelationFilterSchema';
import { ResourceTemplateWhereInputSchema } from './ResourceTemplateWhereInputSchema';
import { RateListRelationFilterSchema } from './RateListRelationFilterSchema';
import { ResourceBookingConfigListRelationFilterSchema } from './ResourceBookingConfigListRelationFilterSchema';
import { WaitlistEntryListRelationFilterSchema } from './WaitlistEntryListRelationFilterSchema';
import { BookingRequestListRelationFilterSchema } from './BookingRequestListRelationFilterSchema';
import { ResourceAssetListRelationFilterSchema } from './ResourceAssetListRelationFilterSchema';

export const ResourceWhereUniqueInputSchema: z.ZodType<Prisma.ResourceWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => ResourceWhereInputSchema),z.lazy(() => ResourceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResourceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResourceWhereInputSchema),z.lazy(() => ResourceWhereInputSchema).array() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  templateId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  capacity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  tags: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  template: z.union([ z.lazy(() => ResourceTemplateScalarRelationFilterSchema),z.lazy(() => ResourceTemplateWhereInputSchema) ]).optional(),
  Rate: z.lazy(() => RateListRelationFilterSchema).optional(),
  ResourceBookingConfig: z.lazy(() => ResourceBookingConfigListRelationFilterSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryListRelationFilterSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestListRelationFilterSchema).optional(),
  ResourceAsset: z.lazy(() => ResourceAssetListRelationFilterSchema).optional()
}).strict());

export default ResourceWhereUniqueInputSchema;
