import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingAddOnCreateWithoutBookingInputSchema } from './BookingAddOnCreateWithoutBookingInputSchema';
import { BookingAddOnUncheckedCreateWithoutBookingInputSchema } from './BookingAddOnUncheckedCreateWithoutBookingInputSchema';
import { BookingAddOnCreateOrConnectWithoutBookingInputSchema } from './BookingAddOnCreateOrConnectWithoutBookingInputSchema';
import { BookingAddOnCreateManyBookingInputEnvelopeSchema } from './BookingAddOnCreateManyBookingInputEnvelopeSchema';
import { BookingAddOnWhereUniqueInputSchema } from './BookingAddOnWhereUniqueInputSchema';

export const BookingAddOnUncheckedCreateNestedManyWithoutBookingInputSchema: z.ZodType<Prisma.BookingAddOnUncheckedCreateNestedManyWithoutBookingInput> = z.object({
  create: z.union([ z.lazy(() => BookingAddOnCreateWithoutBookingInputSchema),z.lazy(() => BookingAddOnCreateWithoutBookingInputSchema).array(),z.lazy(() => BookingAddOnUncheckedCreateWithoutBookingInputSchema),z.lazy(() => BookingAddOnUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingAddOnCreateOrConnectWithoutBookingInputSchema),z.lazy(() => BookingAddOnCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingAddOnCreateManyBookingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingAddOnWhereUniqueInputSchema),z.lazy(() => BookingAddOnWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingAddOnUncheckedCreateNestedManyWithoutBookingInputSchema;
