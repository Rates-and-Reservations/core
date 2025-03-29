import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestStatusSchema } from './BookingRequestStatusSchema';

export const EnumBookingRequestStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumBookingRequestStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => BookingRequestStatusSchema).optional()
}).strict();

export default EnumBookingRequestStatusFieldUpdateOperationsInputSchema;
