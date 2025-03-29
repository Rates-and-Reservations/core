import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestCreateWithoutCustomerInputSchema } from './BookingRequestCreateWithoutCustomerInputSchema';
import { BookingRequestUncheckedCreateWithoutCustomerInputSchema } from './BookingRequestUncheckedCreateWithoutCustomerInputSchema';

export const BookingRequestCreateOrConnectWithoutCustomerInputSchema: z.ZodType<Prisma.BookingRequestCreateOrConnectWithoutCustomerInput> = z.object({
  where: z.lazy(() => BookingRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutCustomerInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutCustomerInputSchema) ]),
}).strict();

export default BookingRequestCreateOrConnectWithoutCustomerInputSchema;
