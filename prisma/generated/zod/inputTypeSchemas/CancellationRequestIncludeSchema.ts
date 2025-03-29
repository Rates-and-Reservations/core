import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingArgsSchema } from "../outputTypeSchemas/BookingArgsSchema"
import { BookingItemArgsSchema } from "../outputTypeSchemas/BookingItemArgsSchema"

export const CancellationRequestIncludeSchema: z.ZodType<Prisma.CancellationRequestInclude> = z.object({
  booking: z.union([z.boolean(),z.lazy(() => BookingArgsSchema)]).optional(),
  bookingItem: z.union([z.boolean(),z.lazy(() => BookingItemArgsSchema)]).optional(),
}).strict()

export default CancellationRequestIncludeSchema;
