import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutRateInputSchema } from './MerchantCreateWithoutRateInputSchema';
import { MerchantUncheckedCreateWithoutRateInputSchema } from './MerchantUncheckedCreateWithoutRateInputSchema';
import { MerchantCreateOrConnectWithoutRateInputSchema } from './MerchantCreateOrConnectWithoutRateInputSchema';
import { MerchantUpsertWithoutRateInputSchema } from './MerchantUpsertWithoutRateInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutRateInputSchema } from './MerchantUpdateToOneWithWhereWithoutRateInputSchema';
import { MerchantUpdateWithoutRateInputSchema } from './MerchantUpdateWithoutRateInputSchema';
import { MerchantUncheckedUpdateWithoutRateInputSchema } from './MerchantUncheckedUpdateWithoutRateInputSchema';

export const MerchantUpdateOneRequiredWithoutRateNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutRateNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutRateInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutRateInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutRateInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutRateInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutRateInputSchema),z.lazy(() => MerchantUpdateWithoutRateInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutRateInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutRateNestedInputSchema;
