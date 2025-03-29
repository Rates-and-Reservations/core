import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateCreateWithoutMerchantInputSchema } from './RateCreateWithoutMerchantInputSchema';
import { RateUncheckedCreateWithoutMerchantInputSchema } from './RateUncheckedCreateWithoutMerchantInputSchema';
import { RateCreateOrConnectWithoutMerchantInputSchema } from './RateCreateOrConnectWithoutMerchantInputSchema';
import { RateUpsertWithWhereUniqueWithoutMerchantInputSchema } from './RateUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { RateCreateManyMerchantInputEnvelopeSchema } from './RateCreateManyMerchantInputEnvelopeSchema';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';
import { RateUpdateWithWhereUniqueWithoutMerchantInputSchema } from './RateUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { RateUpdateManyWithWhereWithoutMerchantInputSchema } from './RateUpdateManyWithWhereWithoutMerchantInputSchema';
import { RateScalarWhereInputSchema } from './RateScalarWhereInputSchema';

export const RateUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.RateUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => RateCreateWithoutMerchantInputSchema),z.lazy(() => RateCreateWithoutMerchantInputSchema).array(),z.lazy(() => RateUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => RateUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RateCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => RateCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RateUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => RateUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RateCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RateWhereUniqueInputSchema),z.lazy(() => RateWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RateWhereUniqueInputSchema),z.lazy(() => RateWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RateWhereUniqueInputSchema),z.lazy(() => RateWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RateWhereUniqueInputSchema),z.lazy(() => RateWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RateUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => RateUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RateUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => RateUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RateScalarWhereInputSchema),z.lazy(() => RateScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RateUpdateManyWithoutMerchantNestedInputSchema;
