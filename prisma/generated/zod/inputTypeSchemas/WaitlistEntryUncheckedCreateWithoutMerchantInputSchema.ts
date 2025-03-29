import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistStatusSchema } from './WaitlistStatusSchema';

export const WaitlistEntryUncheckedCreateWithoutMerchantInputSchema: z.ZodType<Prisma.WaitlistEntryUncheckedCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  resourceId: z.string(),
  customerId: z.string().optional().nullable(),
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

export default WaitlistEntryUncheckedCreateWithoutMerchantInputSchema;
