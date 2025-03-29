import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutBookingAddOnInputSchema } from './BookingCreateWithoutBookingAddOnInputSchema';
import { BookingUncheckedCreateWithoutBookingAddOnInputSchema } from './BookingUncheckedCreateWithoutBookingAddOnInputSchema';
import { BookingCreateOrConnectWithoutBookingAddOnInputSchema } from './BookingCreateOrConnectWithoutBookingAddOnInputSchema';
import { BookingUpsertWithoutBookingAddOnInputSchema } from './BookingUpsertWithoutBookingAddOnInputSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateToOneWithWhereWithoutBookingAddOnInputSchema } from './BookingUpdateToOneWithWhereWithoutBookingAddOnInputSchema';
import { BookingUpdateWithoutBookingAddOnInputSchema } from './BookingUpdateWithoutBookingAddOnInputSchema';
import { BookingUncheckedUpdateWithoutBookingAddOnInputSchema } from './BookingUncheckedUpdateWithoutBookingAddOnInputSchema';

export const BookingUpdateOneRequiredWithoutBookingAddOnNestedInputSchema: z.ZodType<Prisma.BookingUpdateOneRequiredWithoutBookingAddOnNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutBookingAddOnInputSchema),z.lazy(() => BookingUncheckedCreateWithoutBookingAddOnInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutBookingAddOnInputSchema).optional(),
  upsert: z.lazy(() => BookingUpsertWithoutBookingAddOnInputSchema).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingUpdateToOneWithWhereWithoutBookingAddOnInputSchema),z.lazy(() => BookingUpdateWithoutBookingAddOnInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutBookingAddOnInputSchema) ]).optional(),
}).strict();

export default BookingUpdateOneRequiredWithoutBookingAddOnNestedInputSchema;
