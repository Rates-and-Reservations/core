import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutWaitlistEntryInputSchema } from './MerchantCreateWithoutWaitlistEntryInputSchema';
import { MerchantUncheckedCreateWithoutWaitlistEntryInputSchema } from './MerchantUncheckedCreateWithoutWaitlistEntryInputSchema';
import { MerchantCreateOrConnectWithoutWaitlistEntryInputSchema } from './MerchantCreateOrConnectWithoutWaitlistEntryInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutWaitlistEntryInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutWaitlistEntryInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutWaitlistEntryInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutWaitlistEntryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutWaitlistEntryInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutWaitlistEntryInputSchema;
