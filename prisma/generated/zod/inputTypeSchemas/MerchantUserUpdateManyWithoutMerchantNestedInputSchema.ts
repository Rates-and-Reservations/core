import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUserCreateWithoutMerchantInputSchema } from './MerchantUserCreateWithoutMerchantInputSchema';
import { MerchantUserUncheckedCreateWithoutMerchantInputSchema } from './MerchantUserUncheckedCreateWithoutMerchantInputSchema';
import { MerchantUserCreateOrConnectWithoutMerchantInputSchema } from './MerchantUserCreateOrConnectWithoutMerchantInputSchema';
import { MerchantUserUpsertWithWhereUniqueWithoutMerchantInputSchema } from './MerchantUserUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { MerchantUserCreateManyMerchantInputEnvelopeSchema } from './MerchantUserCreateManyMerchantInputEnvelopeSchema';
import { MerchantUserWhereUniqueInputSchema } from './MerchantUserWhereUniqueInputSchema';
import { MerchantUserUpdateWithWhereUniqueWithoutMerchantInputSchema } from './MerchantUserUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { MerchantUserUpdateManyWithWhereWithoutMerchantInputSchema } from './MerchantUserUpdateManyWithWhereWithoutMerchantInputSchema';
import { MerchantUserScalarWhereInputSchema } from './MerchantUserScalarWhereInputSchema';

export const MerchantUserUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.MerchantUserUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantUserCreateWithoutMerchantInputSchema),z.lazy(() => MerchantUserCreateWithoutMerchantInputSchema).array(),z.lazy(() => MerchantUserUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => MerchantUserUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MerchantUserCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => MerchantUserCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MerchantUserUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => MerchantUserUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MerchantUserCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MerchantUserWhereUniqueInputSchema),z.lazy(() => MerchantUserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MerchantUserWhereUniqueInputSchema),z.lazy(() => MerchantUserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MerchantUserWhereUniqueInputSchema),z.lazy(() => MerchantUserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MerchantUserWhereUniqueInputSchema),z.lazy(() => MerchantUserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MerchantUserUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => MerchantUserUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MerchantUserUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => MerchantUserUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MerchantUserScalarWhereInputSchema),z.lazy(() => MerchantUserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default MerchantUserUpdateManyWithoutMerchantNestedInputSchema;
