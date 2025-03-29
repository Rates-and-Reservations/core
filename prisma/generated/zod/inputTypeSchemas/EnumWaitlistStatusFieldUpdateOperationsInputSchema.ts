import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistStatusSchema } from './WaitlistStatusSchema';

export const EnumWaitlistStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumWaitlistStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => WaitlistStatusSchema).optional()
}).strict();

export default EnumWaitlistStatusFieldUpdateOperationsInputSchema;
