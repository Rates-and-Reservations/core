import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutBookingActivityLogInputSchema } from './BookingCreateWithoutBookingActivityLogInputSchema';
import { BookingUncheckedCreateWithoutBookingActivityLogInputSchema } from './BookingUncheckedCreateWithoutBookingActivityLogInputSchema';
import { BookingCreateOrConnectWithoutBookingActivityLogInputSchema } from './BookingCreateOrConnectWithoutBookingActivityLogInputSchema';
import { BookingUpsertWithoutBookingActivityLogInputSchema } from './BookingUpsertWithoutBookingActivityLogInputSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateToOneWithWhereWithoutBookingActivityLogInputSchema } from './BookingUpdateToOneWithWhereWithoutBookingActivityLogInputSchema';
import { BookingUpdateWithoutBookingActivityLogInputSchema } from './BookingUpdateWithoutBookingActivityLogInputSchema';
import { BookingUncheckedUpdateWithoutBookingActivityLogInputSchema } from './BookingUncheckedUpdateWithoutBookingActivityLogInputSchema';

export const BookingUpdateOneRequiredWithoutBookingActivityLogNestedInputSchema: z.ZodType<Prisma.BookingUpdateOneRequiredWithoutBookingActivityLogNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutBookingActivityLogInputSchema),z.lazy(() => BookingUncheckedCreateWithoutBookingActivityLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutBookingActivityLogInputSchema).optional(),
  upsert: z.lazy(() => BookingUpsertWithoutBookingActivityLogInputSchema).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingUpdateToOneWithWhereWithoutBookingActivityLogInputSchema),z.lazy(() => BookingUpdateWithoutBookingActivityLogInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutBookingActivityLogInputSchema) ]).optional(),
}).strict();

export default BookingUpdateOneRequiredWithoutBookingActivityLogNestedInputSchema;
