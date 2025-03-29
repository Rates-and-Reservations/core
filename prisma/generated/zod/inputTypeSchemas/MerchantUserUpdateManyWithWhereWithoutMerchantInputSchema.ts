import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUserScalarWhereInputSchema } from './MerchantUserScalarWhereInputSchema';
import { MerchantUserUpdateManyMutationInputSchema } from './MerchantUserUpdateManyMutationInputSchema';
import { MerchantUserUncheckedUpdateManyWithoutMerchantInputSchema } from './MerchantUserUncheckedUpdateManyWithoutMerchantInputSchema';

export const MerchantUserUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantUserUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => MerchantUserScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MerchantUserUpdateManyMutationInputSchema),z.lazy(() => MerchantUserUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default MerchantUserUpdateManyWithWhereWithoutMerchantInputSchema;
