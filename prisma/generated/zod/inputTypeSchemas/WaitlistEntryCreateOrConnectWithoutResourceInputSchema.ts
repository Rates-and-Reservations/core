import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryWhereUniqueInputSchema } from './WaitlistEntryWhereUniqueInputSchema';
import { WaitlistEntryCreateWithoutResourceInputSchema } from './WaitlistEntryCreateWithoutResourceInputSchema';
import { WaitlistEntryUncheckedCreateWithoutResourceInputSchema } from './WaitlistEntryUncheckedCreateWithoutResourceInputSchema';

export const WaitlistEntryCreateOrConnectWithoutResourceInputSchema: z.ZodType<Prisma.WaitlistEntryCreateOrConnectWithoutResourceInput> = z.object({
  where: z.lazy(() => WaitlistEntryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WaitlistEntryCreateWithoutResourceInputSchema),z.lazy(() => WaitlistEntryUncheckedCreateWithoutResourceInputSchema) ]),
}).strict();

export default WaitlistEntryCreateOrConnectWithoutResourceInputSchema;
