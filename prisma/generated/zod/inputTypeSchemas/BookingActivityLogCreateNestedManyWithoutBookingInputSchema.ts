import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActivityLogCreateWithoutBookingInputSchema } from './BookingActivityLogCreateWithoutBookingInputSchema';
import { BookingActivityLogUncheckedCreateWithoutBookingInputSchema } from './BookingActivityLogUncheckedCreateWithoutBookingInputSchema';
import { BookingActivityLogCreateOrConnectWithoutBookingInputSchema } from './BookingActivityLogCreateOrConnectWithoutBookingInputSchema';
import { BookingActivityLogCreateManyBookingInputEnvelopeSchema } from './BookingActivityLogCreateManyBookingInputEnvelopeSchema';
import { BookingActivityLogWhereUniqueInputSchema } from './BookingActivityLogWhereUniqueInputSchema';

export const BookingActivityLogCreateNestedManyWithoutBookingInputSchema: z.ZodType<Prisma.BookingActivityLogCreateNestedManyWithoutBookingInput> = z.object({
  create: z.union([ z.lazy(() => BookingActivityLogCreateWithoutBookingInputSchema),z.lazy(() => BookingActivityLogCreateWithoutBookingInputSchema).array(),z.lazy(() => BookingActivityLogUncheckedCreateWithoutBookingInputSchema),z.lazy(() => BookingActivityLogUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingActivityLogCreateOrConnectWithoutBookingInputSchema),z.lazy(() => BookingActivityLogCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingActivityLogCreateManyBookingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingActivityLogWhereUniqueInputSchema),z.lazy(() => BookingActivityLogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingActivityLogCreateNestedManyWithoutBookingInputSchema;
