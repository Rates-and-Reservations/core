import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistStatusSchema } from './WaitlistStatusSchema';
import { ResourceCreateNestedOneWithoutWaitlistEntryInputSchema } from './ResourceCreateNestedOneWithoutWaitlistEntryInputSchema';
import { CustomerCreateNestedOneWithoutWaitlistEntryInputSchema } from './CustomerCreateNestedOneWithoutWaitlistEntryInputSchema';

export const WaitlistEntryCreateWithoutMerchantInputSchema: z.ZodType<Prisma.WaitlistEntryCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  desiredStartTime: z.coerce.date().optional().nullable(),
  desiredEndTime: z.coerce.date().optional().nullable(),
  notes: z.string().optional().nullable(),
  status: z.lazy(() => WaitlistStatusSchema).optional(),
  priority: z.number().int().optional(),
  notifiedAt: z.coerce.date().optional().nullable(),
  promotedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  resource: z.lazy(() => ResourceCreateNestedOneWithoutWaitlistEntryInputSchema),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutWaitlistEntryInputSchema).optional()
}).strict();

export default WaitlistEntryCreateWithoutMerchantInputSchema;
