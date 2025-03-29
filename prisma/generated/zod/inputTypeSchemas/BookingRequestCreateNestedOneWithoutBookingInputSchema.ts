import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateWithoutBookingInputSchema } from './BookingRequestCreateWithoutBookingInputSchema';
import { BookingRequestUncheckedCreateWithoutBookingInputSchema } from './BookingRequestUncheckedCreateWithoutBookingInputSchema';
import { BookingRequestCreateOrConnectWithoutBookingInputSchema } from './BookingRequestCreateOrConnectWithoutBookingInputSchema';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';

export const BookingRequestCreateNestedOneWithoutBookingInputSchema: z.ZodType<Prisma.BookingRequestCreateNestedOneWithoutBookingInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutBookingInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutBookingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingRequestCreateOrConnectWithoutBookingInputSchema).optional(),
  connect: z.lazy(() => BookingRequestWhereUniqueInputSchema).optional()
}).strict();

export default BookingRequestCreateNestedOneWithoutBookingInputSchema;
