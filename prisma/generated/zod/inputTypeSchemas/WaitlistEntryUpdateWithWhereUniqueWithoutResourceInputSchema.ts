import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryWhereUniqueInputSchema } from './WaitlistEntryWhereUniqueInputSchema';
import { WaitlistEntryUpdateWithoutResourceInputSchema } from './WaitlistEntryUpdateWithoutResourceInputSchema';
import { WaitlistEntryUncheckedUpdateWithoutResourceInputSchema } from './WaitlistEntryUncheckedUpdateWithoutResourceInputSchema';

export const WaitlistEntryUpdateWithWhereUniqueWithoutResourceInputSchema: z.ZodType<Prisma.WaitlistEntryUpdateWithWhereUniqueWithoutResourceInput> = z.object({
  where: z.lazy(() => WaitlistEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WaitlistEntryUpdateWithoutResourceInputSchema),z.lazy(() => WaitlistEntryUncheckedUpdateWithoutResourceInputSchema) ]),
}).strict();

export default WaitlistEntryUpdateWithWhereUniqueWithoutResourceInputSchema;
