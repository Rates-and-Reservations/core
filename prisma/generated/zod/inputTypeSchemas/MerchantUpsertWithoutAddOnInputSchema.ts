import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutAddOnInputSchema } from './MerchantUpdateWithoutAddOnInputSchema';
import { MerchantUncheckedUpdateWithoutAddOnInputSchema } from './MerchantUncheckedUpdateWithoutAddOnInputSchema';
import { MerchantCreateWithoutAddOnInputSchema } from './MerchantCreateWithoutAddOnInputSchema';
import { MerchantUncheckedCreateWithoutAddOnInputSchema } from './MerchantUncheckedCreateWithoutAddOnInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutAddOnInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutAddOnInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutAddOnInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutAddOnInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutAddOnInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutAddOnInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutAddOnInputSchema;
