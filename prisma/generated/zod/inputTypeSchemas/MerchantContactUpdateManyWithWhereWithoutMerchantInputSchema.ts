import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantContactScalarWhereInputSchema } from './MerchantContactScalarWhereInputSchema';
import { MerchantContactUpdateManyMutationInputSchema } from './MerchantContactUpdateManyMutationInputSchema';
import { MerchantContactUncheckedUpdateManyWithoutMerchantInputSchema } from './MerchantContactUncheckedUpdateManyWithoutMerchantInputSchema';

export const MerchantContactUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantContactUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => MerchantContactScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MerchantContactUpdateManyMutationInputSchema),z.lazy(() => MerchantContactUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default MerchantContactUpdateManyWithWhereWithoutMerchantInputSchema;
