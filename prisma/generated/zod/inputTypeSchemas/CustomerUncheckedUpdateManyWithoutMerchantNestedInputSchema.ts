import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutMerchantInputSchema } from './CustomerCreateWithoutMerchantInputSchema';
import { CustomerUncheckedCreateWithoutMerchantInputSchema } from './CustomerUncheckedCreateWithoutMerchantInputSchema';
import { CustomerCreateOrConnectWithoutMerchantInputSchema } from './CustomerCreateOrConnectWithoutMerchantInputSchema';
import { CustomerUpsertWithWhereUniqueWithoutMerchantInputSchema } from './CustomerUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { CustomerCreateManyMerchantInputEnvelopeSchema } from './CustomerCreateManyMerchantInputEnvelopeSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerUpdateWithWhereUniqueWithoutMerchantInputSchema } from './CustomerUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { CustomerUpdateManyWithWhereWithoutMerchantInputSchema } from './CustomerUpdateManyWithWhereWithoutMerchantInputSchema';
import { CustomerScalarWhereInputSchema } from './CustomerScalarWhereInputSchema';

export const CustomerUncheckedUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.CustomerUncheckedUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutMerchantInputSchema),z.lazy(() => CustomerCreateWithoutMerchantInputSchema).array(),z.lazy(() => CustomerUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CustomerCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => CustomerCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CustomerUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => CustomerUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CustomerCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CustomerWhereUniqueInputSchema),z.lazy(() => CustomerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CustomerWhereUniqueInputSchema),z.lazy(() => CustomerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CustomerWhereUniqueInputSchema),z.lazy(() => CustomerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CustomerWhereUniqueInputSchema),z.lazy(() => CustomerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CustomerUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => CustomerUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CustomerUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => CustomerUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CustomerScalarWhereInputSchema),z.lazy(() => CustomerScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CustomerUncheckedUpdateManyWithoutMerchantNestedInputSchema;
