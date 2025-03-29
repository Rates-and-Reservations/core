import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountCreateWithoutMerchantInputSchema } from './DiscountCreateWithoutMerchantInputSchema';
import { DiscountUncheckedCreateWithoutMerchantInputSchema } from './DiscountUncheckedCreateWithoutMerchantInputSchema';
import { DiscountCreateOrConnectWithoutMerchantInputSchema } from './DiscountCreateOrConnectWithoutMerchantInputSchema';
import { DiscountCreateManyMerchantInputEnvelopeSchema } from './DiscountCreateManyMerchantInputEnvelopeSchema';
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema';

export const DiscountCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.DiscountCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => DiscountCreateWithoutMerchantInputSchema),z.lazy(() => DiscountCreateWithoutMerchantInputSchema).array(),z.lazy(() => DiscountUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => DiscountUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DiscountCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => DiscountCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DiscountCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DiscountWhereUniqueInputSchema),z.lazy(() => DiscountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DiscountCreateNestedManyWithoutMerchantInputSchema;
