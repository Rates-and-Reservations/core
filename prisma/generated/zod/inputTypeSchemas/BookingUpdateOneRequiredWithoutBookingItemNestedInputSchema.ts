import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutBookingItemInputSchema } from './BookingCreateWithoutBookingItemInputSchema';
import { BookingUncheckedCreateWithoutBookingItemInputSchema } from './BookingUncheckedCreateWithoutBookingItemInputSchema';
import { BookingCreateOrConnectWithoutBookingItemInputSchema } from './BookingCreateOrConnectWithoutBookingItemInputSchema';
import { BookingUpsertWithoutBookingItemInputSchema } from './BookingUpsertWithoutBookingItemInputSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateToOneWithWhereWithoutBookingItemInputSchema } from './BookingUpdateToOneWithWhereWithoutBookingItemInputSchema';
import { BookingUpdateWithoutBookingItemInputSchema } from './BookingUpdateWithoutBookingItemInputSchema';
import { BookingUncheckedUpdateWithoutBookingItemInputSchema } from './BookingUncheckedUpdateWithoutBookingItemInputSchema';

export const BookingUpdateOneRequiredWithoutBookingItemNestedInputSchema: z.ZodType<Prisma.BookingUpdateOneRequiredWithoutBookingItemNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutBookingItemInputSchema),z.lazy(() => BookingUncheckedCreateWithoutBookingItemInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutBookingItemInputSchema).optional(),
  upsert: z.lazy(() => BookingUpsertWithoutBookingItemInputSchema).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingUpdateToOneWithWhereWithoutBookingItemInputSchema),z.lazy(() => BookingUpdateWithoutBookingItemInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutBookingItemInputSchema) ]).optional(),
}).strict();

export default BookingUpdateOneRequiredWithoutBookingItemNestedInputSchema;
