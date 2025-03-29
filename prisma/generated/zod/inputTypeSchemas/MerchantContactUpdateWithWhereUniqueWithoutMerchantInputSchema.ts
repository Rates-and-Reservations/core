import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantContactWhereUniqueInputSchema } from './MerchantContactWhereUniqueInputSchema';
import { MerchantContactUpdateWithoutMerchantInputSchema } from './MerchantContactUpdateWithoutMerchantInputSchema';
import { MerchantContactUncheckedUpdateWithoutMerchantInputSchema } from './MerchantContactUncheckedUpdateWithoutMerchantInputSchema';

export const MerchantContactUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantContactUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => MerchantContactWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MerchantContactUpdateWithoutMerchantInputSchema),z.lazy(() => MerchantContactUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default MerchantContactUpdateWithWhereUniqueWithoutMerchantInputSchema;
