import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateWithoutBookingRequestFlowInputSchema } from './BookingRequestCreateWithoutBookingRequestFlowInputSchema';
import { BookingRequestUncheckedCreateWithoutBookingRequestFlowInputSchema } from './BookingRequestUncheckedCreateWithoutBookingRequestFlowInputSchema';
import { BookingRequestCreateOrConnectWithoutBookingRequestFlowInputSchema } from './BookingRequestCreateOrConnectWithoutBookingRequestFlowInputSchema';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';

export const BookingRequestCreateNestedOneWithoutBookingRequestFlowInputSchema: z.ZodType<Prisma.BookingRequestCreateNestedOneWithoutBookingRequestFlowInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutBookingRequestFlowInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutBookingRequestFlowInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingRequestCreateOrConnectWithoutBookingRequestFlowInputSchema).optional(),
  connect: z.lazy(() => BookingRequestWhereUniqueInputSchema).optional()
}).strict();

export default BookingRequestCreateNestedOneWithoutBookingRequestFlowInputSchema;
