import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationPolicyCreateWithoutMerchantInputSchema } from './CancellationPolicyCreateWithoutMerchantInputSchema';
import { CancellationPolicyUncheckedCreateWithoutMerchantInputSchema } from './CancellationPolicyUncheckedCreateWithoutMerchantInputSchema';
import { CancellationPolicyCreateOrConnectWithoutMerchantInputSchema } from './CancellationPolicyCreateOrConnectWithoutMerchantInputSchema';
import { CancellationPolicyUpsertWithWhereUniqueWithoutMerchantInputSchema } from './CancellationPolicyUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { CancellationPolicyCreateManyMerchantInputEnvelopeSchema } from './CancellationPolicyCreateManyMerchantInputEnvelopeSchema';
import { CancellationPolicyWhereUniqueInputSchema } from './CancellationPolicyWhereUniqueInputSchema';
import { CancellationPolicyUpdateWithWhereUniqueWithoutMerchantInputSchema } from './CancellationPolicyUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { CancellationPolicyUpdateManyWithWhereWithoutMerchantInputSchema } from './CancellationPolicyUpdateManyWithWhereWithoutMerchantInputSchema';
import { CancellationPolicyScalarWhereInputSchema } from './CancellationPolicyScalarWhereInputSchema';

export const CancellationPolicyUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.CancellationPolicyUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => CancellationPolicyCreateWithoutMerchantInputSchema),z.lazy(() => CancellationPolicyCreateWithoutMerchantInputSchema).array(),z.lazy(() => CancellationPolicyUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => CancellationPolicyUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CancellationPolicyCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => CancellationPolicyCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CancellationPolicyUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => CancellationPolicyUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CancellationPolicyCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CancellationPolicyWhereUniqueInputSchema),z.lazy(() => CancellationPolicyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CancellationPolicyWhereUniqueInputSchema),z.lazy(() => CancellationPolicyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CancellationPolicyWhereUniqueInputSchema),z.lazy(() => CancellationPolicyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CancellationPolicyWhereUniqueInputSchema),z.lazy(() => CancellationPolicyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CancellationPolicyUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => CancellationPolicyUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CancellationPolicyUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => CancellationPolicyUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CancellationPolicyScalarWhereInputSchema),z.lazy(() => CancellationPolicyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CancellationPolicyUpdateManyWithoutMerchantNestedInputSchema;
