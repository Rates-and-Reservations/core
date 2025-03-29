import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryScalarWhereInputSchema } from './WaitlistEntryScalarWhereInputSchema';
import { WaitlistEntryUpdateManyMutationInputSchema } from './WaitlistEntryUpdateManyMutationInputSchema';
import { WaitlistEntryUncheckedUpdateManyWithoutResourceInputSchema } from './WaitlistEntryUncheckedUpdateManyWithoutResourceInputSchema';

export const WaitlistEntryUpdateManyWithWhereWithoutResourceInputSchema: z.ZodType<Prisma.WaitlistEntryUpdateManyWithWhereWithoutResourceInput> = z.object({
  where: z.lazy(() => WaitlistEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WaitlistEntryUpdateManyMutationInputSchema),z.lazy(() => WaitlistEntryUncheckedUpdateManyWithoutResourceInputSchema) ]),
}).strict();

export default WaitlistEntryUpdateManyWithWhereWithoutResourceInputSchema;
