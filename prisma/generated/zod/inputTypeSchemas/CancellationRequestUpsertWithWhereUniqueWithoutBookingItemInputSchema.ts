import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationRequestWhereUniqueInputSchema } from './CancellationRequestWhereUniqueInputSchema';
import { CancellationRequestUpdateWithoutBookingItemInputSchema } from './CancellationRequestUpdateWithoutBookingItemInputSchema';
import { CancellationRequestUncheckedUpdateWithoutBookingItemInputSchema } from './CancellationRequestUncheckedUpdateWithoutBookingItemInputSchema';
import { CancellationRequestCreateWithoutBookingItemInputSchema } from './CancellationRequestCreateWithoutBookingItemInputSchema';
import { CancellationRequestUncheckedCreateWithoutBookingItemInputSchema } from './CancellationRequestUncheckedCreateWithoutBookingItemInputSchema';

export const CancellationRequestUpsertWithWhereUniqueWithoutBookingItemInputSchema: z.ZodType<Prisma.CancellationRequestUpsertWithWhereUniqueWithoutBookingItemInput> = z.object({
  where: z.lazy(() => CancellationRequestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CancellationRequestUpdateWithoutBookingItemInputSchema),z.lazy(() => CancellationRequestUncheckedUpdateWithoutBookingItemInputSchema) ]),
  create: z.union([ z.lazy(() => CancellationRequestCreateWithoutBookingItemInputSchema),z.lazy(() => CancellationRequestUncheckedCreateWithoutBookingItemInputSchema) ]),
}).strict();

export default CancellationRequestUpsertWithWhereUniqueWithoutBookingItemInputSchema;
