import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppCreateWithoutOAuthTokenInputSchema } from './AppCreateWithoutOAuthTokenInputSchema';
import { AppUncheckedCreateWithoutOAuthTokenInputSchema } from './AppUncheckedCreateWithoutOAuthTokenInputSchema';
import { AppCreateOrConnectWithoutOAuthTokenInputSchema } from './AppCreateOrConnectWithoutOAuthTokenInputSchema';
import { AppUpsertWithoutOAuthTokenInputSchema } from './AppUpsertWithoutOAuthTokenInputSchema';
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema';
import { AppUpdateToOneWithWhereWithoutOAuthTokenInputSchema } from './AppUpdateToOneWithWhereWithoutOAuthTokenInputSchema';
import { AppUpdateWithoutOAuthTokenInputSchema } from './AppUpdateWithoutOAuthTokenInputSchema';
import { AppUncheckedUpdateWithoutOAuthTokenInputSchema } from './AppUncheckedUpdateWithoutOAuthTokenInputSchema';

export const AppUpdateOneRequiredWithoutOAuthTokenNestedInputSchema: z.ZodType<Prisma.AppUpdateOneRequiredWithoutOAuthTokenNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppCreateWithoutOAuthTokenInputSchema),z.lazy(() => AppUncheckedCreateWithoutOAuthTokenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppCreateOrConnectWithoutOAuthTokenInputSchema).optional(),
  upsert: z.lazy(() => AppUpsertWithoutOAuthTokenInputSchema).optional(),
  connect: z.lazy(() => AppWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AppUpdateToOneWithWhereWithoutOAuthTokenInputSchema),z.lazy(() => AppUpdateWithoutOAuthTokenInputSchema),z.lazy(() => AppUncheckedUpdateWithoutOAuthTokenInputSchema) ]).optional(),
}).strict();

export default AppUpdateOneRequiredWithoutOAuthTokenNestedInputSchema;
