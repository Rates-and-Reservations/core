import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutMerchantContactInputSchema } from './MerchantCreateWithoutMerchantContactInputSchema';
import { MerchantUncheckedCreateWithoutMerchantContactInputSchema } from './MerchantUncheckedCreateWithoutMerchantContactInputSchema';
import { MerchantCreateOrConnectWithoutMerchantContactInputSchema } from './MerchantCreateOrConnectWithoutMerchantContactInputSchema';
import { MerchantUpsertWithoutMerchantContactInputSchema } from './MerchantUpsertWithoutMerchantContactInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutMerchantContactInputSchema } from './MerchantUpdateToOneWithWhereWithoutMerchantContactInputSchema';
import { MerchantUpdateWithoutMerchantContactInputSchema } from './MerchantUpdateWithoutMerchantContactInputSchema';
import { MerchantUncheckedUpdateWithoutMerchantContactInputSchema } from './MerchantUncheckedUpdateWithoutMerchantContactInputSchema';

export const MerchantUpdateOneRequiredWithoutMerchantContactNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutMerchantContactNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutMerchantContactInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutMerchantContactInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutMerchantContactInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutMerchantContactInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutMerchantContactInputSchema),z.lazy(() => MerchantUpdateWithoutMerchantContactInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutMerchantContactInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutMerchantContactNestedInputSchema;
