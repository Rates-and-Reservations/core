import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingCreateWithoutCustomerInputSchema } from './BookingCreateWithoutCustomerInputSchema';
import { BookingUncheckedCreateWithoutCustomerInputSchema } from './BookingUncheckedCreateWithoutCustomerInputSchema';

export const BookingCreateOrConnectWithoutCustomerInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutCustomerInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutCustomerInputSchema),z.lazy(() => BookingUncheckedCreateWithoutCustomerInputSchema) ]),
}).strict();

export default BookingCreateOrConnectWithoutCustomerInputSchema;
