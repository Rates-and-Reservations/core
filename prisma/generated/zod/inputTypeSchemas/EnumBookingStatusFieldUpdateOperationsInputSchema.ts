import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingStatusSchema } from './BookingStatusSchema';

export const EnumBookingStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumBookingStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => BookingStatusSchema).optional()
}).strict();

export default EnumBookingStatusFieldUpdateOperationsInputSchema;
