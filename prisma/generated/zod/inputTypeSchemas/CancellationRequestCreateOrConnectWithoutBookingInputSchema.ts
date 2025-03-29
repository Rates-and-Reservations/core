import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationRequestWhereUniqueInputSchema } from './CancellationRequestWhereUniqueInputSchema';
import { CancellationRequestCreateWithoutBookingInputSchema } from './CancellationRequestCreateWithoutBookingInputSchema';
import { CancellationRequestUncheckedCreateWithoutBookingInputSchema } from './CancellationRequestUncheckedCreateWithoutBookingInputSchema';

export const CancellationRequestCreateOrConnectWithoutBookingInputSchema: z.ZodType<Prisma.CancellationRequestCreateOrConnectWithoutBookingInput> = z.object({
  where: z.lazy(() => CancellationRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CancellationRequestCreateWithoutBookingInputSchema),z.lazy(() => CancellationRequestUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default CancellationRequestCreateOrConnectWithoutBookingInputSchema;
