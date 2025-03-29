import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionTypeSchema } from './BookingActionTypeSchema';

export const EnumBookingActionTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumBookingActionTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => BookingActionTypeSchema).optional()
}).strict();

export default EnumBookingActionTypeFieldUpdateOperationsInputSchema;
