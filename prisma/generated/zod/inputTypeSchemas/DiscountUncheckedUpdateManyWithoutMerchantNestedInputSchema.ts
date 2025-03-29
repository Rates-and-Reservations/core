import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountCreateWithoutMerchantInputSchema } from './DiscountCreateWithoutMerchantInputSchema';
import { DiscountUncheckedCreateWithoutMerchantInputSchema } from './DiscountUncheckedCreateWithoutMerchantInputSchema';
import { DiscountCreateOrConnectWithoutMerchantInputSchema } from './DiscountCreateOrConnectWithoutMerchantInputSchema';
import { DiscountUpsertWithWhereUniqueWithoutMerchantInputSchema } from './DiscountUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { DiscountCreateManyMerchantInputEnvelopeSchema } from './DiscountCreateManyMerchantInputEnvelopeSchema';
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema';
import { DiscountUpdateWithWhereUniqueWithoutMerchantInputSchema } from './DiscountUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { DiscountUpdateManyWithWhereWithoutMerchantInputSchema } from './DiscountUpdateManyWithWhereWithoutMerchantInputSchema';
import { DiscountScalarWhereInputSchema } from './DiscountScalarWhereInputSchema';

export const DiscountUncheckedUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.DiscountUncheckedUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => DiscountCreateWithoutMerchantInputSchema),z.lazy(() => DiscountCreateWithoutMerchantInputSchema).array(),z.lazy(() => DiscountUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => DiscountUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DiscountCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => DiscountCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DiscountUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => DiscountUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DiscountCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DiscountWhereUniqueInputSchema),z.lazy(() => DiscountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DiscountWhereUniqueInputSchema),z.lazy(() => DiscountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DiscountWhereUniqueInputSchema),z.lazy(() => DiscountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DiscountWhereUniqueInputSchema),z.lazy(() => DiscountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DiscountUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => DiscountUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DiscountUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => DiscountUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DiscountScalarWhereInputSchema),z.lazy(() => DiscountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DiscountUncheckedUpdateManyWithoutMerchantNestedInputSchema;
