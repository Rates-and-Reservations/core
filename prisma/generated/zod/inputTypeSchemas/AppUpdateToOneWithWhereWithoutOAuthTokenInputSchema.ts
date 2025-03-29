import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppWhereInputSchema } from './AppWhereInputSchema';
import { AppUpdateWithoutOAuthTokenInputSchema } from './AppUpdateWithoutOAuthTokenInputSchema';
import { AppUncheckedUpdateWithoutOAuthTokenInputSchema } from './AppUncheckedUpdateWithoutOAuthTokenInputSchema';

export const AppUpdateToOneWithWhereWithoutOAuthTokenInputSchema: z.ZodType<Prisma.AppUpdateToOneWithWhereWithoutOAuthTokenInput> = z.object({
  where: z.lazy(() => AppWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AppUpdateWithoutOAuthTokenInputSchema),z.lazy(() => AppUncheckedUpdateWithoutOAuthTokenInputSchema) ]),
}).strict();

export default AppUpdateToOneWithWhereWithoutOAuthTokenInputSchema;
