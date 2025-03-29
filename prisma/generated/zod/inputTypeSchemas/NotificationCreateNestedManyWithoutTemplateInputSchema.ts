import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutTemplateInputSchema } from './NotificationCreateWithoutTemplateInputSchema';
import { NotificationUncheckedCreateWithoutTemplateInputSchema } from './NotificationUncheckedCreateWithoutTemplateInputSchema';
import { NotificationCreateOrConnectWithoutTemplateInputSchema } from './NotificationCreateOrConnectWithoutTemplateInputSchema';
import { NotificationCreateManyTemplateInputEnvelopeSchema } from './NotificationCreateManyTemplateInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';

export const NotificationCreateNestedManyWithoutTemplateInputSchema: z.ZodType<Prisma.NotificationCreateNestedManyWithoutTemplateInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutTemplateInputSchema),z.lazy(() => NotificationCreateWithoutTemplateInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutTemplateInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutTemplateInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyTemplateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default NotificationCreateNestedManyWithoutTemplateInputSchema;
