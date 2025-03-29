import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationRequestCreateWithoutBookingItemInputSchema } from './CancellationRequestCreateWithoutBookingItemInputSchema';
import { CancellationRequestUncheckedCreateWithoutBookingItemInputSchema } from './CancellationRequestUncheckedCreateWithoutBookingItemInputSchema';
import { CancellationRequestCreateOrConnectWithoutBookingItemInputSchema } from './CancellationRequestCreateOrConnectWithoutBookingItemInputSchema';
import { CancellationRequestCreateManyBookingItemInputEnvelopeSchema } from './CancellationRequestCreateManyBookingItemInputEnvelopeSchema';
import { CancellationRequestWhereUniqueInputSchema } from './CancellationRequestWhereUniqueInputSchema';

export const CancellationRequestUncheckedCreateNestedManyWithoutBookingItemInputSchema: z.ZodType<Prisma.CancellationRequestUncheckedCreateNestedManyWithoutBookingItemInput> = z.object({
  create: z.union([ z.lazy(() => CancellationRequestCreateWithoutBookingItemInputSchema),z.lazy(() => CancellationRequestCreateWithoutBookingItemInputSchema).array(),z.lazy(() => CancellationRequestUncheckedCreateWithoutBookingItemInputSchema),z.lazy(() => CancellationRequestUncheckedCreateWithoutBookingItemInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CancellationRequestCreateOrConnectWithoutBookingItemInputSchema),z.lazy(() => CancellationRequestCreateOrConnectWithoutBookingItemInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CancellationRequestCreateManyBookingItemInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CancellationRequestWhereUniqueInputSchema),z.lazy(() => CancellationRequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CancellationRequestUncheckedCreateNestedManyWithoutBookingItemInputSchema;
