import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingTemplateArgsSchema } from "../outputTypeSchemas/BookingTemplateArgsSchema"
import { BookingRequestActionValueFindManyArgsSchema } from "../outputTypeSchemas/BookingRequestActionValueFindManyArgsSchema"
import { BookingActionCountOutputTypeArgsSchema } from "../outputTypeSchemas/BookingActionCountOutputTypeArgsSchema"

export const BookingActionIncludeSchema: z.ZodType<Prisma.BookingActionInclude> = z.object({
  bookingTemplate: z.union([z.boolean(),z.lazy(() => BookingTemplateArgsSchema)]).optional(),
  BookingRequestActionValue: z.union([z.boolean(),z.lazy(() => BookingRequestActionValueFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BookingActionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default BookingActionIncludeSchema;
