import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutTemplateInputSchema } from './NotificationCreateWithoutTemplateInputSchema';
import { NotificationUncheckedCreateWithoutTemplateInputSchema } from './NotificationUncheckedCreateWithoutTemplateInputSchema';
import { NotificationCreateOrConnectWithoutTemplateInputSchema } from './NotificationCreateOrConnectWithoutTemplateInputSchema';
import { NotificationUpsertWithWhereUniqueWithoutTemplateInputSchema } from './NotificationUpsertWithWhereUniqueWithoutTemplateInputSchema';
import { NotificationCreateManyTemplateInputEnvelopeSchema } from './NotificationCreateManyTemplateInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithWhereUniqueWithoutTemplateInputSchema } from './NotificationUpdateWithWhereUniqueWithoutTemplateInputSchema';
import { NotificationUpdateManyWithWhereWithoutTemplateInputSchema } from './NotificationUpdateManyWithWhereWithoutTemplateInputSchema';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';

export const NotificationUncheckedUpdateManyWithoutTemplateNestedInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutTemplateNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutTemplateInputSchema),z.lazy(() => NotificationCreateWithoutTemplateInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutTemplateInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutTemplateInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutTemplateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationUpsertWithWhereUniqueWithoutTemplateInputSchema),z.lazy(() => NotificationUpsertWithWhereUniqueWithoutTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyTemplateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateWithWhereUniqueWithoutTemplateInputSchema),z.lazy(() => NotificationUpdateWithWhereUniqueWithoutTemplateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationUpdateManyWithWhereWithoutTemplateInputSchema),z.lazy(() => NotificationUpdateManyWithWhereWithoutTemplateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default NotificationUncheckedUpdateManyWithoutTemplateNestedInputSchema;
