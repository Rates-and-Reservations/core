import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutResourceInputSchema } from './MerchantUpdateWithoutResourceInputSchema';
import { MerchantUncheckedUpdateWithoutResourceInputSchema } from './MerchantUncheckedUpdateWithoutResourceInputSchema';
import { MerchantCreateWithoutResourceInputSchema } from './MerchantCreateWithoutResourceInputSchema';
import { MerchantUncheckedCreateWithoutResourceInputSchema } from './MerchantUncheckedCreateWithoutResourceInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutResourceInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutResourceInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutResourceInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutResourceInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutResourceInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutResourceInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutResourceInputSchema;
