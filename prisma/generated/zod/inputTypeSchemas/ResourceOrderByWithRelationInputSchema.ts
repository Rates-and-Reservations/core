import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MerchantOrderByWithRelationInputSchema } from './MerchantOrderByWithRelationInputSchema';
import { ResourceTemplateOrderByWithRelationInputSchema } from './ResourceTemplateOrderByWithRelationInputSchema';
import { RateOrderByRelationAggregateInputSchema } from './RateOrderByRelationAggregateInputSchema';
import { ResourceBookingConfigOrderByRelationAggregateInputSchema } from './ResourceBookingConfigOrderByRelationAggregateInputSchema';
import { WaitlistEntryOrderByRelationAggregateInputSchema } from './WaitlistEntryOrderByRelationAggregateInputSchema';
import { BookingRequestOrderByRelationAggregateInputSchema } from './BookingRequestOrderByRelationAggregateInputSchema';
import { ResourceAssetOrderByRelationAggregateInputSchema } from './ResourceAssetOrderByRelationAggregateInputSchema';

export const ResourceOrderByWithRelationInputSchema: z.ZodType<Prisma.ResourceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  templateId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  capacity: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  merchant: z.lazy(() => MerchantOrderByWithRelationInputSchema).optional(),
  template: z.lazy(() => ResourceTemplateOrderByWithRelationInputSchema).optional(),
  Rate: z.lazy(() => RateOrderByRelationAggregateInputSchema).optional(),
  ResourceBookingConfig: z.lazy(() => ResourceBookingConfigOrderByRelationAggregateInputSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryOrderByRelationAggregateInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestOrderByRelationAggregateInputSchema).optional(),
  ResourceAsset: z.lazy(() => ResourceAssetOrderByRelationAggregateInputSchema).optional()
}).strict();

export default ResourceOrderByWithRelationInputSchema;
