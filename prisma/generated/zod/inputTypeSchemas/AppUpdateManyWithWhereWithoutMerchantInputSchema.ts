import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppScalarWhereInputSchema } from './AppScalarWhereInputSchema';
import { AppUpdateManyMutationInputSchema } from './AppUpdateManyMutationInputSchema';
import { AppUncheckedUpdateManyWithoutMerchantInputSchema } from './AppUncheckedUpdateManyWithoutMerchantInputSchema';

export const AppUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.AppUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => AppScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AppUpdateManyMutationInputSchema),z.lazy(() => AppUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default AppUpdateManyWithWhereWithoutMerchantInputSchema;
