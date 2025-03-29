import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryWhereUniqueInputSchema } from './WaitlistEntryWhereUniqueInputSchema';
import { WaitlistEntryUpdateWithoutResourceInputSchema } from './WaitlistEntryUpdateWithoutResourceInputSchema';
import { WaitlistEntryUncheckedUpdateWithoutResourceInputSchema } from './WaitlistEntryUncheckedUpdateWithoutResourceInputSchema';
import { WaitlistEntryCreateWithoutResourceInputSchema } from './WaitlistEntryCreateWithoutResourceInputSchema';
import { WaitlistEntryUncheckedCreateWithoutResourceInputSchema } from './WaitlistEntryUncheckedCreateWithoutResourceInputSchema';

export const WaitlistEntryUpsertWithWhereUniqueWithoutResourceInputSchema: z.ZodType<Prisma.WaitlistEntryUpsertWithWhereUniqueWithoutResourceInput> = z.object({
  where: z.lazy(() => WaitlistEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WaitlistEntryUpdateWithoutResourceInputSchema),z.lazy(() => WaitlistEntryUncheckedUpdateWithoutResourceInputSchema) ]),
  create: z.union([ z.lazy(() => WaitlistEntryCreateWithoutResourceInputSchema),z.lazy(() => WaitlistEntryUncheckedCreateWithoutResourceInputSchema) ]),
}).strict();

export default WaitlistEntryUpsertWithWhereUniqueWithoutResourceInputSchema;
