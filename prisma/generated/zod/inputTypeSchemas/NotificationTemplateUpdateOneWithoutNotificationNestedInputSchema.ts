import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTemplateCreateWithoutNotificationInputSchema } from './NotificationTemplateCreateWithoutNotificationInputSchema';
import { NotificationTemplateUncheckedCreateWithoutNotificationInputSchema } from './NotificationTemplateUncheckedCreateWithoutNotificationInputSchema';
import { NotificationTemplateCreateOrConnectWithoutNotificationInputSchema } from './NotificationTemplateCreateOrConnectWithoutNotificationInputSchema';
import { NotificationTemplateUpsertWithoutNotificationInputSchema } from './NotificationTemplateUpsertWithoutNotificationInputSchema';
import { NotificationTemplateWhereInputSchema } from './NotificationTemplateWhereInputSchema';
import { NotificationTemplateWhereUniqueInputSchema } from './NotificationTemplateWhereUniqueInputSchema';
import { NotificationTemplateUpdateToOneWithWhereWithoutNotificationInputSchema } from './NotificationTemplateUpdateToOneWithWhereWithoutNotificationInputSchema';
import { NotificationTemplateUpdateWithoutNotificationInputSchema } from './NotificationTemplateUpdateWithoutNotificationInputSchema';
import { NotificationTemplateUncheckedUpdateWithoutNotificationInputSchema } from './NotificationTemplateUncheckedUpdateWithoutNotificationInputSchema';

export const NotificationTemplateUpdateOneWithoutNotificationNestedInputSchema: z.ZodType<Prisma.NotificationTemplateUpdateOneWithoutNotificationNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationTemplateCreateWithoutNotificationInputSchema),z.lazy(() => NotificationTemplateUncheckedCreateWithoutNotificationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NotificationTemplateCreateOrConnectWithoutNotificationInputSchema).optional(),
  upsert: z.lazy(() => NotificationTemplateUpsertWithoutNotificationInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => NotificationTemplateWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => NotificationTemplateWhereInputSchema) ]).optional(),
  connect: z.lazy(() => NotificationTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => NotificationTemplateUpdateToOneWithWhereWithoutNotificationInputSchema),z.lazy(() => NotificationTemplateUpdateWithoutNotificationInputSchema),z.lazy(() => NotificationTemplateUncheckedUpdateWithoutNotificationInputSchema) ]).optional(),
}).strict();

export default NotificationTemplateUpdateOneWithoutNotificationNestedInputSchema;
