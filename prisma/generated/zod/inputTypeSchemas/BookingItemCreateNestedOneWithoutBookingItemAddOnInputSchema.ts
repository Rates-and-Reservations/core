import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemCreateWithoutBookingItemAddOnInputSchema } from './BookingItemCreateWithoutBookingItemAddOnInputSchema';
import { BookingItemUncheckedCreateWithoutBookingItemAddOnInputSchema } from './BookingItemUncheckedCreateWithoutBookingItemAddOnInputSchema';
import { BookingItemCreateOrConnectWithoutBookingItemAddOnInputSchema } from './BookingItemCreateOrConnectWithoutBookingItemAddOnInputSchema';
import { BookingItemWhereUniqueInputSchema } from './BookingItemWhereUniqueInputSchema';

export const BookingItemCreateNestedOneWithoutBookingItemAddOnInputSchema: z.ZodType<Prisma.BookingItemCreateNestedOneWithoutBookingItemAddOnInput> = z.object({
  create: z.union([ z.lazy(() => BookingItemCreateWithoutBookingItemAddOnInputSchema),z.lazy(() => BookingItemUncheckedCreateWithoutBookingItemAddOnInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingItemCreateOrConnectWithoutBookingItemAddOnInputSchema).optional(),
  connect: z.lazy(() => BookingItemWhereUniqueInputSchema).optional()
}).strict();

export default BookingItemCreateNestedOneWithoutBookingItemAddOnInputSchema;
