import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowCreateWithoutBookingRequestInputSchema } from './BookingRequestFlowCreateWithoutBookingRequestInputSchema';
import { BookingRequestFlowUncheckedCreateWithoutBookingRequestInputSchema } from './BookingRequestFlowUncheckedCreateWithoutBookingRequestInputSchema';
import { BookingRequestFlowCreateOrConnectWithoutBookingRequestInputSchema } from './BookingRequestFlowCreateOrConnectWithoutBookingRequestInputSchema';
import { BookingRequestFlowCreateManyBookingRequestInputEnvelopeSchema } from './BookingRequestFlowCreateManyBookingRequestInputEnvelopeSchema';
import { BookingRequestFlowWhereUniqueInputSchema } from './BookingRequestFlowWhereUniqueInputSchema';

export const BookingRequestFlowUncheckedCreateNestedManyWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingRequestFlowUncheckedCreateNestedManyWithoutBookingRequestInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestFlowCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestFlowCreateWithoutBookingRequestInputSchema).array(),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutBookingRequestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestFlowCreateOrConnectWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestFlowCreateOrConnectWithoutBookingRequestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestFlowCreateManyBookingRequestInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),z.lazy(() => BookingRequestFlowWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestFlowUncheckedCreateNestedManyWithoutBookingRequestInputSchema;
