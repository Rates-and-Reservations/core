import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppCreateWithoutOAuthTokenInputSchema } from './AppCreateWithoutOAuthTokenInputSchema';
import { AppUncheckedCreateWithoutOAuthTokenInputSchema } from './AppUncheckedCreateWithoutOAuthTokenInputSchema';
import { AppCreateOrConnectWithoutOAuthTokenInputSchema } from './AppCreateOrConnectWithoutOAuthTokenInputSchema';
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema';

export const AppCreateNestedOneWithoutOAuthTokenInputSchema: z.ZodType<Prisma.AppCreateNestedOneWithoutOAuthTokenInput> = z.object({
  create: z.union([ z.lazy(() => AppCreateWithoutOAuthTokenInputSchema),z.lazy(() => AppUncheckedCreateWithoutOAuthTokenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppCreateOrConnectWithoutOAuthTokenInputSchema).optional(),
  connect: z.lazy(() => AppWhereUniqueInputSchema).optional()
}).strict();

export default AppCreateNestedOneWithoutOAuthTokenInputSchema;
