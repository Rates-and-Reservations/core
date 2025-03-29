import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryCreateWithoutResourceInputSchema } from './WaitlistEntryCreateWithoutResourceInputSchema';
import { WaitlistEntryUncheckedCreateWithoutResourceInputSchema } from './WaitlistEntryUncheckedCreateWithoutResourceInputSchema';
import { WaitlistEntryCreateOrConnectWithoutResourceInputSchema } from './WaitlistEntryCreateOrConnectWithoutResourceInputSchema';
import { WaitlistEntryCreateManyResourceInputEnvelopeSchema } from './WaitlistEntryCreateManyResourceInputEnvelopeSchema';
import { WaitlistEntryWhereUniqueInputSchema } from './WaitlistEntryWhereUniqueInputSchema';

export const WaitlistEntryUncheckedCreateNestedManyWithoutResourceInputSchema: z.ZodType<Prisma.WaitlistEntryUncheckedCreateNestedManyWithoutResourceInput> = z.object({
  create: z.union([ z.lazy(() => WaitlistEntryCreateWithoutResourceInputSchema),z.lazy(() => WaitlistEntryCreateWithoutResourceInputSchema).array(),z.lazy(() => WaitlistEntryUncheckedCreateWithoutResourceInputSchema),z.lazy(() => WaitlistEntryUncheckedCreateWithoutResourceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WaitlistEntryCreateOrConnectWithoutResourceInputSchema),z.lazy(() => WaitlistEntryCreateOrConnectWithoutResourceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WaitlistEntryCreateManyResourceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WaitlistEntryWhereUniqueInputSchema),z.lazy(() => WaitlistEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WaitlistEntryUncheckedCreateNestedManyWithoutResourceInputSchema;
