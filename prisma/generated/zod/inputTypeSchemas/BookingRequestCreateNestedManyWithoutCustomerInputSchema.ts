import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateWithoutCustomerInputSchema } from './BookingRequestCreateWithoutCustomerInputSchema';
import { BookingRequestUncheckedCreateWithoutCustomerInputSchema } from './BookingRequestUncheckedCreateWithoutCustomerInputSchema';
import { BookingRequestCreateOrConnectWithoutCustomerInputSchema } from './BookingRequestCreateOrConnectWithoutCustomerInputSchema';
import { BookingRequestCreateManyCustomerInputEnvelopeSchema } from './BookingRequestCreateManyCustomerInputEnvelopeSchema';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';

export const BookingRequestCreateNestedManyWithoutCustomerInputSchema: z.ZodType<Prisma.BookingRequestCreateNestedManyWithoutCustomerInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutCustomerInputSchema),z.lazy(() => BookingRequestCreateWithoutCustomerInputSchema).array(),z.lazy(() => BookingRequestUncheckedCreateWithoutCustomerInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutCustomerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestCreateOrConnectWithoutCustomerInputSchema),z.lazy(() => BookingRequestCreateOrConnectWithoutCustomerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestCreateManyCustomerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestCreateNestedManyWithoutCustomerInputSchema;
