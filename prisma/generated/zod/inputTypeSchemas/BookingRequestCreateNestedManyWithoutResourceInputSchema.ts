import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateWithoutResourceInputSchema } from './BookingRequestCreateWithoutResourceInputSchema';
import { BookingRequestUncheckedCreateWithoutResourceInputSchema } from './BookingRequestUncheckedCreateWithoutResourceInputSchema';
import { BookingRequestCreateOrConnectWithoutResourceInputSchema } from './BookingRequestCreateOrConnectWithoutResourceInputSchema';
import { BookingRequestCreateManyResourceInputEnvelopeSchema } from './BookingRequestCreateManyResourceInputEnvelopeSchema';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';

export const BookingRequestCreateNestedManyWithoutResourceInputSchema: z.ZodType<Prisma.BookingRequestCreateNestedManyWithoutResourceInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutResourceInputSchema),z.lazy(() => BookingRequestCreateWithoutResourceInputSchema).array(),z.lazy(() => BookingRequestUncheckedCreateWithoutResourceInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutResourceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestCreateOrConnectWithoutResourceInputSchema),z.lazy(() => BookingRequestCreateOrConnectWithoutResourceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestCreateManyResourceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestCreateNestedManyWithoutResourceInputSchema;
