import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppUpdateWithoutOAuthTokenInputSchema } from './AppUpdateWithoutOAuthTokenInputSchema';
import { AppUncheckedUpdateWithoutOAuthTokenInputSchema } from './AppUncheckedUpdateWithoutOAuthTokenInputSchema';
import { AppCreateWithoutOAuthTokenInputSchema } from './AppCreateWithoutOAuthTokenInputSchema';
import { AppUncheckedCreateWithoutOAuthTokenInputSchema } from './AppUncheckedCreateWithoutOAuthTokenInputSchema';
import { AppWhereInputSchema } from './AppWhereInputSchema';

export const AppUpsertWithoutOAuthTokenInputSchema: z.ZodType<Prisma.AppUpsertWithoutOAuthTokenInput> = z.object({
  update: z.union([ z.lazy(() => AppUpdateWithoutOAuthTokenInputSchema),z.lazy(() => AppUncheckedUpdateWithoutOAuthTokenInputSchema) ]),
  create: z.union([ z.lazy(() => AppCreateWithoutOAuthTokenInputSchema),z.lazy(() => AppUncheckedCreateWithoutOAuthTokenInputSchema) ]),
  where: z.lazy(() => AppWhereInputSchema).optional()
}).strict();

export default AppUpsertWithoutOAuthTokenInputSchema;
