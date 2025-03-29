import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationRequestWhereUniqueInputSchema } from './CancellationRequestWhereUniqueInputSchema';
import { CancellationRequestCreateWithoutBookingItemInputSchema } from './CancellationRequestCreateWithoutBookingItemInputSchema';
import { CancellationRequestUncheckedCreateWithoutBookingItemInputSchema } from './CancellationRequestUncheckedCreateWithoutBookingItemInputSchema';

export const CancellationRequestCreateOrConnectWithoutBookingItemInputSchema: z.ZodType<Prisma.CancellationRequestCreateOrConnectWithoutBookingItemInput> = z.object({
  where: z.lazy(() => CancellationRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CancellationRequestCreateWithoutBookingItemInputSchema),z.lazy(() => CancellationRequestUncheckedCreateWithoutBookingItemInputSchema) ]),
}).strict();

export default CancellationRequestCreateOrConnectWithoutBookingItemInputSchema;
