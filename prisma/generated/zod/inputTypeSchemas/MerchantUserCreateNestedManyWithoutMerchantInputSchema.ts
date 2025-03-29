import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUserCreateWithoutMerchantInputSchema } from './MerchantUserCreateWithoutMerchantInputSchema';
import { MerchantUserUncheckedCreateWithoutMerchantInputSchema } from './MerchantUserUncheckedCreateWithoutMerchantInputSchema';
import { MerchantUserCreateOrConnectWithoutMerchantInputSchema } from './MerchantUserCreateOrConnectWithoutMerchantInputSchema';
import { MerchantUserCreateManyMerchantInputEnvelopeSchema } from './MerchantUserCreateManyMerchantInputEnvelopeSchema';
import { MerchantUserWhereUniqueInputSchema } from './MerchantUserWhereUniqueInputSchema';

export const MerchantUserCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantUserCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => MerchantUserCreateWithoutMerchantInputSchema),z.lazy(() => MerchantUserCreateWithoutMerchantInputSchema).array(),z.lazy(() => MerchantUserUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => MerchantUserUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MerchantUserCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => MerchantUserCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MerchantUserCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MerchantUserWhereUniqueInputSchema),z.lazy(() => MerchantUserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default MerchantUserCreateNestedManyWithoutMerchantInputSchema;
