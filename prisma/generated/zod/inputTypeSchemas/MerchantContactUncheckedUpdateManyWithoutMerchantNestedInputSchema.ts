import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantContactCreateWithoutMerchantInputSchema } from './MerchantContactCreateWithoutMerchantInputSchema';
import { MerchantContactUncheckedCreateWithoutMerchantInputSchema } from './MerchantContactUncheckedCreateWithoutMerchantInputSchema';
import { MerchantContactCreateOrConnectWithoutMerchantInputSchema } from './MerchantContactCreateOrConnectWithoutMerchantInputSchema';
import { MerchantContactUpsertWithWhereUniqueWithoutMerchantInputSchema } from './MerchantContactUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { MerchantContactCreateManyMerchantInputEnvelopeSchema } from './MerchantContactCreateManyMerchantInputEnvelopeSchema';
import { MerchantContactWhereUniqueInputSchema } from './MerchantContactWhereUniqueInputSchema';
import { MerchantContactUpdateWithWhereUniqueWithoutMerchantInputSchema } from './MerchantContactUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { MerchantContactUpdateManyWithWhereWithoutMerchantInputSchema } from './MerchantContactUpdateManyWithWhereWithoutMerchantInputSchema';
import { MerchantContactScalarWhereInputSchema } from './MerchantContactScalarWhereInputSchema';

export const MerchantContactUncheckedUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.MerchantContactUncheckedUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantContactCreateWithoutMerchantInputSchema),z.lazy(() => MerchantContactCreateWithoutMerchantInputSchema).array(),z.lazy(() => MerchantContactUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => MerchantContactUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MerchantContactCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => MerchantContactCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MerchantContactUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => MerchantContactUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MerchantContactCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MerchantContactWhereUniqueInputSchema),z.lazy(() => MerchantContactWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MerchantContactWhereUniqueInputSchema),z.lazy(() => MerchantContactWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MerchantContactWhereUniqueInputSchema),z.lazy(() => MerchantContactWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MerchantContactWhereUniqueInputSchema),z.lazy(() => MerchantContactWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MerchantContactUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => MerchantContactUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MerchantContactUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => MerchantContactUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MerchantContactScalarWhereInputSchema),z.lazy(() => MerchantContactScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default MerchantContactUncheckedUpdateManyWithoutMerchantNestedInputSchema;
