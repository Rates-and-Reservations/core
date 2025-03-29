import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateManyBookingInputSchema } from './NotificationCreateManyBookingInputSchema';

export const NotificationCreateManyBookingInputEnvelopeSchema: z.ZodType<Prisma.NotificationCreateManyBookingInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => NotificationCreateManyBookingInputSchema),z.lazy(() => NotificationCreateManyBookingInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default NotificationCreateManyBookingInputEnvelopeSchema;
