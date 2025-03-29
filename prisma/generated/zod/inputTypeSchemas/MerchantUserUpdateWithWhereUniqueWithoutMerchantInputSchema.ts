import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUserWhereUniqueInputSchema } from './MerchantUserWhereUniqueInputSchema';
import { MerchantUserUpdateWithoutMerchantInputSchema } from './MerchantUserUpdateWithoutMerchantInputSchema';
import { MerchantUserUncheckedUpdateWithoutMerchantInputSchema } from './MerchantUserUncheckedUpdateWithoutMerchantInputSchema';

export const MerchantUserUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantUserUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => MerchantUserWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MerchantUserUpdateWithoutMerchantInputSchema),z.lazy(() => MerchantUserUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default MerchantUserUpdateWithWhereUniqueWithoutMerchantInputSchema;
