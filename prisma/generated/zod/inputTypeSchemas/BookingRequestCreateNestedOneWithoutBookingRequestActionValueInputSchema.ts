import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateWithoutBookingRequestActionValueInputSchema } from './BookingRequestCreateWithoutBookingRequestActionValueInputSchema';
import { BookingRequestUncheckedCreateWithoutBookingRequestActionValueInputSchema } from './BookingRequestUncheckedCreateWithoutBookingRequestActionValueInputSchema';
import { BookingRequestCreateOrConnectWithoutBookingRequestActionValueInputSchema } from './BookingRequestCreateOrConnectWithoutBookingRequestActionValueInputSchema';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';

export const BookingRequestCreateNestedOneWithoutBookingRequestActionValueInputSchema: z.ZodType<Prisma.BookingRequestCreateNestedOneWithoutBookingRequestActionValueInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutBookingRequestActionValueInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutBookingRequestActionValueInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingRequestCreateOrConnectWithoutBookingRequestActionValueInputSchema).optional(),
  connect: z.lazy(() => BookingRequestWhereUniqueInputSchema).optional()
}).strict();

export default BookingRequestCreateNestedOneWithoutBookingRequestActionValueInputSchema;
