import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUserWhereUniqueInputSchema } from './MerchantUserWhereUniqueInputSchema';
import { MerchantUserUpdateWithoutMerchantInputSchema } from './MerchantUserUpdateWithoutMerchantInputSchema';
import { MerchantUserUncheckedUpdateWithoutMerchantInputSchema } from './MerchantUserUncheckedUpdateWithoutMerchantInputSchema';
import { MerchantUserCreateWithoutMerchantInputSchema } from './MerchantUserCreateWithoutMerchantInputSchema';
import { MerchantUserUncheckedCreateWithoutMerchantInputSchema } from './MerchantUserUncheckedCreateWithoutMerchantInputSchema';

export const MerchantUserUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantUserUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => MerchantUserWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MerchantUserUpdateWithoutMerchantInputSchema),z.lazy(() => MerchantUserUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantUserCreateWithoutMerchantInputSchema),z.lazy(() => MerchantUserUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default MerchantUserUpsertWithWhereUniqueWithoutMerchantInputSchema;
