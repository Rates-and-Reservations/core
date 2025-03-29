import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MerchantOrderByWithRelationInputSchema } from './MerchantOrderByWithRelationInputSchema';
import { BookingRequestFlowOrderByRelationAggregateInputSchema } from './BookingRequestFlowOrderByRelationAggregateInputSchema';

export const UiTemplateOrderByWithRelationInputSchema: z.ZodType<Prisma.UiTemplateOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  previewImageUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isSystem: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  config: z.lazy(() => SortOrderSchema).optional(),
  uiTheme: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  merchant: z.lazy(() => MerchantOrderByWithRelationInputSchema).optional(),
  BookingRequestFlow: z.lazy(() => BookingRequestFlowOrderByRelationAggregateInputSchema).optional()
}).strict();

export default UiTemplateOrderByWithRelationInputSchema;
