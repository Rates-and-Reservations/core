import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutWaitlistEntryInputSchema } from './MerchantCreateWithoutWaitlistEntryInputSchema';
import { MerchantUncheckedCreateWithoutWaitlistEntryInputSchema } from './MerchantUncheckedCreateWithoutWaitlistEntryInputSchema';
import { MerchantCreateOrConnectWithoutWaitlistEntryInputSchema } from './MerchantCreateOrConnectWithoutWaitlistEntryInputSchema';
import { MerchantUpsertWithoutWaitlistEntryInputSchema } from './MerchantUpsertWithoutWaitlistEntryInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutWaitlistEntryInputSchema } from './MerchantUpdateToOneWithWhereWithoutWaitlistEntryInputSchema';
import { MerchantUpdateWithoutWaitlistEntryInputSchema } from './MerchantUpdateWithoutWaitlistEntryInputSchema';
import { MerchantUncheckedUpdateWithoutWaitlistEntryInputSchema } from './MerchantUncheckedUpdateWithoutWaitlistEntryInputSchema';

export const MerchantUpdateOneRequiredWithoutWaitlistEntryNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutWaitlistEntryNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutWaitlistEntryInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutWaitlistEntryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutWaitlistEntryInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutWaitlistEntryInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutWaitlistEntryInputSchema),z.lazy(() => MerchantUpdateWithoutWaitlistEntryInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutWaitlistEntryInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutWaitlistEntryNestedInputSchema;
