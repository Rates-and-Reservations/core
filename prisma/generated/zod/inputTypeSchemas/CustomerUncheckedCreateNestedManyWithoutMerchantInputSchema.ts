import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutMerchantInputSchema } from './CustomerCreateWithoutMerchantInputSchema';
import { CustomerUncheckedCreateWithoutMerchantInputSchema } from './CustomerUncheckedCreateWithoutMerchantInputSchema';
import { CustomerCreateOrConnectWithoutMerchantInputSchema } from './CustomerCreateOrConnectWithoutMerchantInputSchema';
import { CustomerCreateManyMerchantInputEnvelopeSchema } from './CustomerCreateManyMerchantInputEnvelopeSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';

export const CustomerUncheckedCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.CustomerUncheckedCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutMerchantInputSchema),z.lazy(() => CustomerCreateWithoutMerchantInputSchema).array(),z.lazy(() => CustomerUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CustomerCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => CustomerCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CustomerCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CustomerWhereUniqueInputSchema),z.lazy(() => CustomerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CustomerUncheckedCreateNestedManyWithoutMerchantInputSchema;
