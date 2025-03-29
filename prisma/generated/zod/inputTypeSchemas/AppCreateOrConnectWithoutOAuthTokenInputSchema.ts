import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema';
import { AppCreateWithoutOAuthTokenInputSchema } from './AppCreateWithoutOAuthTokenInputSchema';
import { AppUncheckedCreateWithoutOAuthTokenInputSchema } from './AppUncheckedCreateWithoutOAuthTokenInputSchema';

export const AppCreateOrConnectWithoutOAuthTokenInputSchema: z.ZodType<Prisma.AppCreateOrConnectWithoutOAuthTokenInput> = z.object({
  where: z.lazy(() => AppWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppCreateWithoutOAuthTokenInputSchema),z.lazy(() => AppUncheckedCreateWithoutOAuthTokenInputSchema) ]),
}).strict();

export default AppCreateOrConnectWithoutOAuthTokenInputSchema;
