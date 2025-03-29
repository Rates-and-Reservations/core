import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantContactWhereUniqueInputSchema } from './MerchantContactWhereUniqueInputSchema';
import { MerchantContactUpdateWithoutMerchantInputSchema } from './MerchantContactUpdateWithoutMerchantInputSchema';
import { MerchantContactUncheckedUpdateWithoutMerchantInputSchema } from './MerchantContactUncheckedUpdateWithoutMerchantInputSchema';
import { MerchantContactCreateWithoutMerchantInputSchema } from './MerchantContactCreateWithoutMerchantInputSchema';
import { MerchantContactUncheckedCreateWithoutMerchantInputSchema } from './MerchantContactUncheckedCreateWithoutMerchantInputSchema';

export const MerchantContactUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantContactUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => MerchantContactWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MerchantContactUpdateWithoutMerchantInputSchema),z.lazy(() => MerchantContactUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantContactCreateWithoutMerchantInputSchema),z.lazy(() => MerchantContactUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default MerchantContactUpsertWithWhereUniqueWithoutMerchantInputSchema;
