import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationRequestCreateWithoutBookingInputSchema } from './CancellationRequestCreateWithoutBookingInputSchema';
import { CancellationRequestUncheckedCreateWithoutBookingInputSchema } from './CancellationRequestUncheckedCreateWithoutBookingInputSchema';
import { CancellationRequestCreateOrConnectWithoutBookingInputSchema } from './CancellationRequestCreateOrConnectWithoutBookingInputSchema';
import { CancellationRequestCreateManyBookingInputEnvelopeSchema } from './CancellationRequestCreateManyBookingInputEnvelopeSchema';
import { CancellationRequestWhereUniqueInputSchema } from './CancellationRequestWhereUniqueInputSchema';

export const CancellationRequestUncheckedCreateNestedManyWithoutBookingInputSchema: z.ZodType<Prisma.CancellationRequestUncheckedCreateNestedManyWithoutBookingInput> = z.object({
  create: z.union([ z.lazy(() => CancellationRequestCreateWithoutBookingInputSchema),z.lazy(() => CancellationRequestCreateWithoutBookingInputSchema).array(),z.lazy(() => CancellationRequestUncheckedCreateWithoutBookingInputSchema),z.lazy(() => CancellationRequestUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CancellationRequestCreateOrConnectWithoutBookingInputSchema),z.lazy(() => CancellationRequestCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CancellationRequestCreateManyBookingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CancellationRequestWhereUniqueInputSchema),z.lazy(() => CancellationRequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CancellationRequestUncheckedCreateNestedManyWithoutBookingInputSchema;
