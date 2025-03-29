import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BookingRequestOrderByWithRelationInputSchema } from './BookingRequestOrderByWithRelationInputSchema';
import { MerchantOrderByWithRelationInputSchema } from './MerchantOrderByWithRelationInputSchema';
import { UiTemplateOrderByWithRelationInputSchema } from './UiTemplateOrderByWithRelationInputSchema';

export const BookingRequestFlowOrderByWithRelationInputSchema: z.ZodType<Prisma.BookingRequestFlowOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bookingRequestId: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  uiTemplateId: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  usageLimit: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  usageCount: z.lazy(() => SortOrderSchema).optional(),
  webhookUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  webhookEvents: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  bookingRequest: z.lazy(() => BookingRequestOrderByWithRelationInputSchema).optional(),
  merchant: z.lazy(() => MerchantOrderByWithRelationInputSchema).optional(),
  uiTemplate: z.lazy(() => UiTemplateOrderByWithRelationInputSchema).optional()
}).strict();

export default BookingRequestFlowOrderByWithRelationInputSchema;
