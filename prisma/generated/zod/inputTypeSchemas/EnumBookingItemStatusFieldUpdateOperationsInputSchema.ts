import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemStatusSchema } from './BookingItemStatusSchema';

export const EnumBookingItemStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumBookingItemStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => BookingItemStatusSchema).optional()
}).strict();

export default EnumBookingItemStatusFieldUpdateOperationsInputSchema;
