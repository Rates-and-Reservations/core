import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutMerchantUserInputSchema } from './MerchantCreateWithoutMerchantUserInputSchema';
import { MerchantUncheckedCreateWithoutMerchantUserInputSchema } from './MerchantUncheckedCreateWithoutMerchantUserInputSchema';
import { MerchantCreateOrConnectWithoutMerchantUserInputSchema } from './MerchantCreateOrConnectWithoutMerchantUserInputSchema';
import { MerchantUpsertWithoutMerchantUserInputSchema } from './MerchantUpsertWithoutMerchantUserInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutMerchantUserInputSchema } from './MerchantUpdateToOneWithWhereWithoutMerchantUserInputSchema';
import { MerchantUpdateWithoutMerchantUserInputSchema } from './MerchantUpdateWithoutMerchantUserInputSchema';
import { MerchantUncheckedUpdateWithoutMerchantUserInputSchema } from './MerchantUncheckedUpdateWithoutMerchantUserInputSchema';

export const MerchantUpdateOneRequiredWithoutMerchantUserNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutMerchantUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutMerchantUserInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutMerchantUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutMerchantUserInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutMerchantUserInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutMerchantUserInputSchema),z.lazy(() => MerchantUpdateWithoutMerchantUserInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutMerchantUserInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutMerchantUserNestedInputSchema;
