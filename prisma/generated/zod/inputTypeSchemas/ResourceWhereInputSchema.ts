import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
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

export const ResourceWhereInputSchema: z.ZodType<Prisma.ResourceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ResourceWhereInputSchema),z.lazy(() => ResourceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResourceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResourceWhereInputSchema),z.lazy(() => ResourceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  templateId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  capacity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  tags: z.lazy(() => StringNullableListFilterSchema).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  template: z.union([ z.lazy(() => ResourceTemplateScalarRelationFilterSchema),z.lazy(() => ResourceTemplateWhereInputSchema) ]).optional(),
  Rate: z.lazy(() => RateListRelationFilterSchema).optional(),
  ResourceBookingConfig: z.lazy(() => ResourceBookingConfigListRelationFilterSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryListRelationFilterSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestListRelationFilterSchema).optional(),
  ResourceAsset: z.lazy(() => ResourceAssetListRelationFilterSchema).optional()
}).strict();

export default ResourceWhereInputSchema;
