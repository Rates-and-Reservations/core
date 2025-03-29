import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryScalarWhereInputSchema } from './WaitlistEntryScalarWhereInputSchema';
import { WaitlistEntryUpdateManyMutationInputSchema } from './WaitlistEntryUpdateManyMutationInputSchema';
import { WaitlistEntryUncheckedUpdateManyWithoutCustomerInputSchema } from './WaitlistEntryUncheckedUpdateManyWithoutCustomerInputSchema';

export const WaitlistEntryUpdateManyWithWhereWithoutCustomerInputSchema: z.ZodType<Prisma.WaitlistEntryUpdateManyWithWhereWithoutCustomerInput> = z.object({
  where: z.lazy(() => WaitlistEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WaitlistEntryUpdateManyMutationInputSchema),z.lazy(() => WaitlistEntryUncheckedUpdateManyWithoutCustomerInputSchema) ]),
}).strict();

export default WaitlistEntryUpdateManyWithWhereWithoutCustomerInputSchema;
