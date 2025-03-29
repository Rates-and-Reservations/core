import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerUpdateWithoutMerchantInputSchema } from './CustomerUpdateWithoutMerchantInputSchema';
import { CustomerUncheckedUpdateWithoutMerchantInputSchema } from './CustomerUncheckedUpdateWithoutMerchantInputSchema';
import { CustomerCreateWithoutMerchantInputSchema } from './CustomerCreateWithoutMerchantInputSchema';
import { CustomerUncheckedCreateWithoutMerchantInputSchema } from './CustomerUncheckedCreateWithoutMerchantInputSchema';

export const CustomerUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.CustomerUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => CustomerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CustomerUpdateWithoutMerchantInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => CustomerCreateWithoutMerchantInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default CustomerUpsertWithWhereUniqueWithoutMerchantInputSchema;
