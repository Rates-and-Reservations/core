import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutApiKeyInputSchema } from './MerchantCreateWithoutApiKeyInputSchema';
import { MerchantUncheckedCreateWithoutApiKeyInputSchema } from './MerchantUncheckedCreateWithoutApiKeyInputSchema';
import { MerchantCreateOrConnectWithoutApiKeyInputSchema } from './MerchantCreateOrConnectWithoutApiKeyInputSchema';
import { MerchantUpsertWithoutApiKeyInputSchema } from './MerchantUpsertWithoutApiKeyInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutApiKeyInputSchema } from './MerchantUpdateToOneWithWhereWithoutApiKeyInputSchema';
import { MerchantUpdateWithoutApiKeyInputSchema } from './MerchantUpdateWithoutApiKeyInputSchema';
import { MerchantUncheckedUpdateWithoutApiKeyInputSchema } from './MerchantUncheckedUpdateWithoutApiKeyInputSchema';

export const MerchantUpdateOneRequiredWithoutApiKeyNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutApiKeyNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutApiKeyInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutApiKeyInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutApiKeyInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutApiKeyInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutApiKeyInputSchema),z.lazy(() => MerchantUpdateWithoutApiKeyInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutApiKeyInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutApiKeyNestedInputSchema;
