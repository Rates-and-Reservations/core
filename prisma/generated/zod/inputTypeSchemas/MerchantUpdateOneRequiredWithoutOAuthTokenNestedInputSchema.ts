import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutOAuthTokenInputSchema } from './MerchantCreateWithoutOAuthTokenInputSchema';
import { MerchantUncheckedCreateWithoutOAuthTokenInputSchema } from './MerchantUncheckedCreateWithoutOAuthTokenInputSchema';
import { MerchantCreateOrConnectWithoutOAuthTokenInputSchema } from './MerchantCreateOrConnectWithoutOAuthTokenInputSchema';
import { MerchantUpsertWithoutOAuthTokenInputSchema } from './MerchantUpsertWithoutOAuthTokenInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutOAuthTokenInputSchema } from './MerchantUpdateToOneWithWhereWithoutOAuthTokenInputSchema';
import { MerchantUpdateWithoutOAuthTokenInputSchema } from './MerchantUpdateWithoutOAuthTokenInputSchema';
import { MerchantUncheckedUpdateWithoutOAuthTokenInputSchema } from './MerchantUncheckedUpdateWithoutOAuthTokenInputSchema';

export const MerchantUpdateOneRequiredWithoutOAuthTokenNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutOAuthTokenNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutOAuthTokenInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutOAuthTokenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutOAuthTokenInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutOAuthTokenInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutOAuthTokenInputSchema),z.lazy(() => MerchantUpdateWithoutOAuthTokenInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutOAuthTokenInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutOAuthTokenNestedInputSchema;
