import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryWhereUniqueInputSchema } from './WaitlistEntryWhereUniqueInputSchema';
import { WaitlistEntryUpdateWithoutCustomerInputSchema } from './WaitlistEntryUpdateWithoutCustomerInputSchema';
import { WaitlistEntryUncheckedUpdateWithoutCustomerInputSchema } from './WaitlistEntryUncheckedUpdateWithoutCustomerInputSchema';
import { WaitlistEntryCreateWithoutCustomerInputSchema } from './WaitlistEntryCreateWithoutCustomerInputSchema';
import { WaitlistEntryUncheckedCreateWithoutCustomerInputSchema } from './WaitlistEntryUncheckedCreateWithoutCustomerInputSchema';

export const WaitlistEntryUpsertWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.WaitlistEntryUpsertWithWhereUniqueWithoutCustomerInput> = z.object({
  where: z.lazy(() => WaitlistEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WaitlistEntryUpdateWithoutCustomerInputSchema),z.lazy(() => WaitlistEntryUncheckedUpdateWithoutCustomerInputSchema) ]),
  create: z.union([ z.lazy(() => WaitlistEntryCreateWithoutCustomerInputSchema),z.lazy(() => WaitlistEntryUncheckedCreateWithoutCustomerInputSchema) ]),
}).strict();

export default WaitlistEntryUpsertWithWhereUniqueWithoutCustomerInputSchema;
