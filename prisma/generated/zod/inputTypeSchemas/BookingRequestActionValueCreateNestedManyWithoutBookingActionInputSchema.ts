import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestActionValueCreateWithoutBookingActionInputSchema } from './BookingRequestActionValueCreateWithoutBookingActionInputSchema';
import { BookingRequestActionValueUncheckedCreateWithoutBookingActionInputSchema } from './BookingRequestActionValueUncheckedCreateWithoutBookingActionInputSchema';
import { BookingRequestActionValueCreateOrConnectWithoutBookingActionInputSchema } from './BookingRequestActionValueCreateOrConnectWithoutBookingActionInputSchema';
import { BookingRequestActionValueCreateManyBookingActionInputEnvelopeSchema } from './BookingRequestActionValueCreateManyBookingActionInputEnvelopeSchema';
import { BookingRequestActionValueWhereUniqueInputSchema } from './BookingRequestActionValueWhereUniqueInputSchema';

export const BookingRequestActionValueCreateNestedManyWithoutBookingActionInputSchema: z.ZodType<Prisma.BookingRequestActionValueCreateNestedManyWithoutBookingActionInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestActionValueCreateWithoutBookingActionInputSchema),z.lazy(() => BookingRequestActionValueCreateWithoutBookingActionInputSchema).array(),z.lazy(() => BookingRequestActionValueUncheckedCreateWithoutBookingActionInputSchema),z.lazy(() => BookingRequestActionValueUncheckedCreateWithoutBookingActionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestActionValueCreateOrConnectWithoutBookingActionInputSchema),z.lazy(() => BookingRequestActionValueCreateOrConnectWithoutBookingActionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestActionValueCreateManyBookingActionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema),z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestActionValueCreateNestedManyWithoutBookingActionInputSchema;
