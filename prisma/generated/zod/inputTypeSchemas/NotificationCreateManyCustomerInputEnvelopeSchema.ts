import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateManyCustomerInputSchema } from './NotificationCreateManyCustomerInputSchema';

export const NotificationCreateManyCustomerInputEnvelopeSchema: z.ZodType<Prisma.NotificationCreateManyCustomerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => NotificationCreateManyCustomerInputSchema),z.lazy(() => NotificationCreateManyCustomerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default NotificationCreateManyCustomerInputEnvelopeSchema;
