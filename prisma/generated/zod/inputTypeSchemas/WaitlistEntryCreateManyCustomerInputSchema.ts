import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistStatusSchema } from './WaitlistStatusSchema';

export const WaitlistEntryCreateManyCustomerInputSchema: z.ZodType<Prisma.WaitlistEntryCreateManyCustomerInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  resourceId: z.string(),
  desiredStartTime: z.coerce.date().optional().nullable(),
  desiredEndTime: z.coerce.date().optional().nullable(),
  notes: z.string().optional().nullable(),
  status: z.lazy(() => WaitlistStatusSchema).optional(),
  priority: z.number().int().optional(),
  notifiedAt: z.coerce.date().optional().nullable(),
  promotedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default WaitlistEntryCreateManyCustomerInputSchema;
