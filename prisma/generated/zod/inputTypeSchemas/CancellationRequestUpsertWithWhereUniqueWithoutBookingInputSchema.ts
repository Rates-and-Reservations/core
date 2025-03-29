import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationRequestWhereUniqueInputSchema } from './CancellationRequestWhereUniqueInputSchema';
import { CancellationRequestUpdateWithoutBookingInputSchema } from './CancellationRequestUpdateWithoutBookingInputSchema';
import { CancellationRequestUncheckedUpdateWithoutBookingInputSchema } from './CancellationRequestUncheckedUpdateWithoutBookingInputSchema';
import { CancellationRequestCreateWithoutBookingInputSchema } from './CancellationRequestCreateWithoutBookingInputSchema';
import { CancellationRequestUncheckedCreateWithoutBookingInputSchema } from './CancellationRequestUncheckedCreateWithoutBookingInputSchema';

export const CancellationRequestUpsertWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.CancellationRequestUpsertWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => CancellationRequestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CancellationRequestUpdateWithoutBookingInputSchema),z.lazy(() => CancellationRequestUncheckedUpdateWithoutBookingInputSchema) ]),
  create: z.union([ z.lazy(() => CancellationRequestCreateWithoutBookingInputSchema),z.lazy(() => CancellationRequestUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default CancellationRequestUpsertWithWhereUniqueWithoutBookingInputSchema;
