import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScalarWhereInputSchema } from './AppInstallScalarWhereInputSchema';
import { AppInstallUpdateManyMutationInputSchema } from './AppInstallUpdateManyMutationInputSchema';
import { AppInstallUncheckedUpdateManyWithoutMerchantInputSchema } from './AppInstallUncheckedUpdateManyWithoutMerchantInputSchema';

export const AppInstallUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.AppInstallUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => AppInstallScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AppInstallUpdateManyMutationInputSchema),z.lazy(() => AppInstallUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default AppInstallUpdateManyWithWhereWithoutMerchantInputSchema;
