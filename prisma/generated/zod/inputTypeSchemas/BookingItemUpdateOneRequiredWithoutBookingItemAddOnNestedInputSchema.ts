import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemCreateWithoutBookingItemAddOnInputSchema } from './BookingItemCreateWithoutBookingItemAddOnInputSchema';
import { BookingItemUncheckedCreateWithoutBookingItemAddOnInputSchema } from './BookingItemUncheckedCreateWithoutBookingItemAddOnInputSchema';
import { BookingItemCreateOrConnectWithoutBookingItemAddOnInputSchema } from './BookingItemCreateOrConnectWithoutBookingItemAddOnInputSchema';
import { BookingItemUpsertWithoutBookingItemAddOnInputSchema } from './BookingItemUpsertWithoutBookingItemAddOnInputSchema';
import { BookingItemWhereUniqueInputSchema } from './BookingItemWhereUniqueInputSchema';
import { BookingItemUpdateToOneWithWhereWithoutBookingItemAddOnInputSchema } from './BookingItemUpdateToOneWithWhereWithoutBookingItemAddOnInputSchema';
import { BookingItemUpdateWithoutBookingItemAddOnInputSchema } from './BookingItemUpdateWithoutBookingItemAddOnInputSchema';
import { BookingItemUncheckedUpdateWithoutBookingItemAddOnInputSchema } from './BookingItemUncheckedUpdateWithoutBookingItemAddOnInputSchema';

export const BookingItemUpdateOneRequiredWithoutBookingItemAddOnNestedInputSchema: z.ZodType<Prisma.BookingItemUpdateOneRequiredWithoutBookingItemAddOnNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingItemCreateWithoutBookingItemAddOnInputSchema),z.lazy(() => BookingItemUncheckedCreateWithoutBookingItemAddOnInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingItemCreateOrConnectWithoutBookingItemAddOnInputSchema).optional(),
  upsert: z.lazy(() => BookingItemUpsertWithoutBookingItemAddOnInputSchema).optional(),
  connect: z.lazy(() => BookingItemWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingItemUpdateToOneWithWhereWithoutBookingItemAddOnInputSchema),z.lazy(() => BookingItemUpdateWithoutBookingItemAddOnInputSchema),z.lazy(() => BookingItemUncheckedUpdateWithoutBookingItemAddOnInputSchema) ]).optional(),
}).strict();

export default BookingItemUpdateOneRequiredWithoutBookingItemAddOnNestedInputSchema;
