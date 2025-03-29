import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnWhereUniqueInputSchema } from './AddOnWhereUniqueInputSchema';
import { AddOnCreateWithoutMerchantInputSchema } from './AddOnCreateWithoutMerchantInputSchema';
import { AddOnUncheckedCreateWithoutMerchantInputSchema } from './AddOnUncheckedCreateWithoutMerchantInputSchema';

export const AddOnCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.AddOnCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => AddOnWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AddOnCreateWithoutMerchantInputSchema),z.lazy(() => AddOnUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default AddOnCreateOrConnectWithoutMerchantInputSchema;
