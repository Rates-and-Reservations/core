import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutBookingRequestInputSchema } from './BookingCreateWithoutBookingRequestInputSchema';
import { BookingUncheckedCreateWithoutBookingRequestInputSchema } from './BookingUncheckedCreateWithoutBookingRequestInputSchema';
import { BookingCreateOrConnectWithoutBookingRequestInputSchema } from './BookingCreateOrConnectWithoutBookingRequestInputSchema';
import { BookingCreateManyBookingRequestInputEnvelopeSchema } from './BookingCreateManyBookingRequestInputEnvelopeSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';

export const BookingUncheckedCreateNestedManyWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingUncheckedCreateNestedManyWithoutBookingRequestInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingCreateWithoutBookingRequestInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingUncheckedCreateWithoutBookingRequestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutBookingRequestInputSchema),z.lazy(() => BookingCreateOrConnectWithoutBookingRequestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyBookingRequestInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingUncheckedCreateNestedManyWithoutBookingRequestInputSchema;
