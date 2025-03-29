import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemAddOnCreateWithoutBookingItemInputSchema } from './BookingItemAddOnCreateWithoutBookingItemInputSchema';
import { BookingItemAddOnUncheckedCreateWithoutBookingItemInputSchema } from './BookingItemAddOnUncheckedCreateWithoutBookingItemInputSchema';
import { BookingItemAddOnCreateOrConnectWithoutBookingItemInputSchema } from './BookingItemAddOnCreateOrConnectWithoutBookingItemInputSchema';
import { BookingItemAddOnCreateManyBookingItemInputEnvelopeSchema } from './BookingItemAddOnCreateManyBookingItemInputEnvelopeSchema';
import { BookingItemAddOnWhereUniqueInputSchema } from './BookingItemAddOnWhereUniqueInputSchema';

export const BookingItemAddOnUncheckedCreateNestedManyWithoutBookingItemInputSchema: z.ZodType<Prisma.BookingItemAddOnUncheckedCreateNestedManyWithoutBookingItemInput> = z.object({
  create: z.union([ z.lazy(() => BookingItemAddOnCreateWithoutBookingItemInputSchema),z.lazy(() => BookingItemAddOnCreateWithoutBookingItemInputSchema).array(),z.lazy(() => BookingItemAddOnUncheckedCreateWithoutBookingItemInputSchema),z.lazy(() => BookingItemAddOnUncheckedCreateWithoutBookingItemInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingItemAddOnCreateOrConnectWithoutBookingItemInputSchema),z.lazy(() => BookingItemAddOnCreateOrConnectWithoutBookingItemInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingItemAddOnCreateManyBookingItemInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingItemAddOnWhereUniqueInputSchema),z.lazy(() => BookingItemAddOnWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingItemAddOnUncheckedCreateNestedManyWithoutBookingItemInputSchema;
