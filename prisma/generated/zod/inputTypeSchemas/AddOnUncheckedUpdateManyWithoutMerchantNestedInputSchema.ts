import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnCreateWithoutMerchantInputSchema } from './AddOnCreateWithoutMerchantInputSchema';
import { AddOnUncheckedCreateWithoutMerchantInputSchema } from './AddOnUncheckedCreateWithoutMerchantInputSchema';
import { AddOnCreateOrConnectWithoutMerchantInputSchema } from './AddOnCreateOrConnectWithoutMerchantInputSchema';
import { AddOnUpsertWithWhereUniqueWithoutMerchantInputSchema } from './AddOnUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { AddOnCreateManyMerchantInputEnvelopeSchema } from './AddOnCreateManyMerchantInputEnvelopeSchema';
import { AddOnWhereUniqueInputSchema } from './AddOnWhereUniqueInputSchema';
import { AddOnUpdateWithWhereUniqueWithoutMerchantInputSchema } from './AddOnUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { AddOnUpdateManyWithWhereWithoutMerchantInputSchema } from './AddOnUpdateManyWithWhereWithoutMerchantInputSchema';
import { AddOnScalarWhereInputSchema } from './AddOnScalarWhereInputSchema';

export const AddOnUncheckedUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.AddOnUncheckedUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => AddOnCreateWithoutMerchantInputSchema),z.lazy(() => AddOnCreateWithoutMerchantInputSchema).array(),z.lazy(() => AddOnUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => AddOnUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AddOnCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => AddOnCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AddOnUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => AddOnUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AddOnCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AddOnWhereUniqueInputSchema),z.lazy(() => AddOnWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AddOnWhereUniqueInputSchema),z.lazy(() => AddOnWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AddOnWhereUniqueInputSchema),z.lazy(() => AddOnWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AddOnWhereUniqueInputSchema),z.lazy(() => AddOnWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AddOnUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => AddOnUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AddOnUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => AddOnUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AddOnScalarWhereInputSchema),z.lazy(() => AddOnScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AddOnUncheckedUpdateManyWithoutMerchantNestedInputSchema;
