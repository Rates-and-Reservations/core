import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppCreateWithoutMerchantInputSchema } from './AppCreateWithoutMerchantInputSchema';
import { AppUncheckedCreateWithoutMerchantInputSchema } from './AppUncheckedCreateWithoutMerchantInputSchema';
import { AppCreateOrConnectWithoutMerchantInputSchema } from './AppCreateOrConnectWithoutMerchantInputSchema';
import { AppCreateManyMerchantInputEnvelopeSchema } from './AppCreateManyMerchantInputEnvelopeSchema';
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema';

export const AppUncheckedCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.AppUncheckedCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => AppCreateWithoutMerchantInputSchema),z.lazy(() => AppCreateWithoutMerchantInputSchema).array(),z.lazy(() => AppUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => AppUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => AppCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppWhereUniqueInputSchema),z.lazy(() => AppWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default AppUncheckedCreateNestedManyWithoutMerchantInputSchema;
