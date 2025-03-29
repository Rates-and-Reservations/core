import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationPolicyCreateWithoutMerchantInputSchema } from './CancellationPolicyCreateWithoutMerchantInputSchema';
import { CancellationPolicyUncheckedCreateWithoutMerchantInputSchema } from './CancellationPolicyUncheckedCreateWithoutMerchantInputSchema';
import { CancellationPolicyCreateOrConnectWithoutMerchantInputSchema } from './CancellationPolicyCreateOrConnectWithoutMerchantInputSchema';
import { CancellationPolicyCreateManyMerchantInputEnvelopeSchema } from './CancellationPolicyCreateManyMerchantInputEnvelopeSchema';
import { CancellationPolicyWhereUniqueInputSchema } from './CancellationPolicyWhereUniqueInputSchema';

export const CancellationPolicyUncheckedCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.CancellationPolicyUncheckedCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => CancellationPolicyCreateWithoutMerchantInputSchema),z.lazy(() => CancellationPolicyCreateWithoutMerchantInputSchema).array(),z.lazy(() => CancellationPolicyUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => CancellationPolicyUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CancellationPolicyCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => CancellationPolicyCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CancellationPolicyCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CancellationPolicyWhereUniqueInputSchema),z.lazy(() => CancellationPolicyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CancellationPolicyUncheckedCreateNestedManyWithoutMerchantInputSchema;
