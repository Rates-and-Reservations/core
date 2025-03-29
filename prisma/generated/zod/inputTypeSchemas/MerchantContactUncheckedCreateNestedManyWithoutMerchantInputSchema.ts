import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantContactCreateWithoutMerchantInputSchema } from './MerchantContactCreateWithoutMerchantInputSchema';
import { MerchantContactUncheckedCreateWithoutMerchantInputSchema } from './MerchantContactUncheckedCreateWithoutMerchantInputSchema';
import { MerchantContactCreateOrConnectWithoutMerchantInputSchema } from './MerchantContactCreateOrConnectWithoutMerchantInputSchema';
import { MerchantContactCreateManyMerchantInputEnvelopeSchema } from './MerchantContactCreateManyMerchantInputEnvelopeSchema';
import { MerchantContactWhereUniqueInputSchema } from './MerchantContactWhereUniqueInputSchema';

export const MerchantContactUncheckedCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantContactUncheckedCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => MerchantContactCreateWithoutMerchantInputSchema),z.lazy(() => MerchantContactCreateWithoutMerchantInputSchema).array(),z.lazy(() => MerchantContactUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => MerchantContactUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MerchantContactCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => MerchantContactCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MerchantContactCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MerchantContactWhereUniqueInputSchema),z.lazy(() => MerchantContactWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default MerchantContactUncheckedCreateNestedManyWithoutMerchantInputSchema;
