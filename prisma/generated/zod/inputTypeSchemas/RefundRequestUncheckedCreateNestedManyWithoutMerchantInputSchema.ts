import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestCreateWithoutMerchantInputSchema } from './RefundRequestCreateWithoutMerchantInputSchema';
import { RefundRequestUncheckedCreateWithoutMerchantInputSchema } from './RefundRequestUncheckedCreateWithoutMerchantInputSchema';
import { RefundRequestCreateOrConnectWithoutMerchantInputSchema } from './RefundRequestCreateOrConnectWithoutMerchantInputSchema';
import { RefundRequestCreateManyMerchantInputEnvelopeSchema } from './RefundRequestCreateManyMerchantInputEnvelopeSchema';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';

export const RefundRequestUncheckedCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.RefundRequestUncheckedCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => RefundRequestCreateWithoutMerchantInputSchema),z.lazy(() => RefundRequestCreateWithoutMerchantInputSchema).array(),z.lazy(() => RefundRequestUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => RefundRequestUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RefundRequestCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => RefundRequestCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RefundRequestCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RefundRequestWhereUniqueInputSchema),z.lazy(() => RefundRequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RefundRequestUncheckedCreateNestedManyWithoutMerchantInputSchema;
