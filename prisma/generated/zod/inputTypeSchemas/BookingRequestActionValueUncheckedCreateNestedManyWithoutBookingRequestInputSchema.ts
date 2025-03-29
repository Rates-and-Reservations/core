import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestActionValueCreateWithoutBookingRequestInputSchema } from './BookingRequestActionValueCreateWithoutBookingRequestInputSchema';
import { BookingRequestActionValueUncheckedCreateWithoutBookingRequestInputSchema } from './BookingRequestActionValueUncheckedCreateWithoutBookingRequestInputSchema';
import { BookingRequestActionValueCreateOrConnectWithoutBookingRequestInputSchema } from './BookingRequestActionValueCreateOrConnectWithoutBookingRequestInputSchema';
import { BookingRequestActionValueCreateManyBookingRequestInputEnvelopeSchema } from './BookingRequestActionValueCreateManyBookingRequestInputEnvelopeSchema';
import { BookingRequestActionValueWhereUniqueInputSchema } from './BookingRequestActionValueWhereUniqueInputSchema';

export const BookingRequestActionValueUncheckedCreateNestedManyWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingRequestActionValueUncheckedCreateNestedManyWithoutBookingRequestInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestActionValueCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestActionValueCreateWithoutBookingRequestInputSchema).array(),z.lazy(() => BookingRequestActionValueUncheckedCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestActionValueUncheckedCreateWithoutBookingRequestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestActionValueCreateOrConnectWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestActionValueCreateOrConnectWithoutBookingRequestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestActionValueCreateManyBookingRequestInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema),z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestActionValueUncheckedCreateNestedManyWithoutBookingRequestInputSchema;
