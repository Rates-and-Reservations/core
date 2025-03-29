import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateCreateWithoutMerchantInputSchema } from './RateCreateWithoutMerchantInputSchema';
import { RateUncheckedCreateWithoutMerchantInputSchema } from './RateUncheckedCreateWithoutMerchantInputSchema';
import { RateCreateOrConnectWithoutMerchantInputSchema } from './RateCreateOrConnectWithoutMerchantInputSchema';
import { RateCreateManyMerchantInputEnvelopeSchema } from './RateCreateManyMerchantInputEnvelopeSchema';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';

export const RateUncheckedCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.RateUncheckedCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => RateCreateWithoutMerchantInputSchema),z.lazy(() => RateCreateWithoutMerchantInputSchema).array(),z.lazy(() => RateUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => RateUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RateCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => RateCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RateCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RateWhereUniqueInputSchema),z.lazy(() => RateWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RateUncheckedCreateNestedManyWithoutMerchantInputSchema;
