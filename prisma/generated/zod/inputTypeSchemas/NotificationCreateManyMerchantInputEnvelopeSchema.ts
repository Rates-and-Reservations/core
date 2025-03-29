import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateManyMerchantInputSchema } from './NotificationCreateManyMerchantInputSchema';

export const NotificationCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.NotificationCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => NotificationCreateManyMerchantInputSchema),z.lazy(() => NotificationCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default NotificationCreateManyMerchantInputEnvelopeSchema;
