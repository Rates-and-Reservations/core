import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UiTemplateCreateWithoutMerchantInputSchema } from './UiTemplateCreateWithoutMerchantInputSchema';
import { UiTemplateUncheckedCreateWithoutMerchantInputSchema } from './UiTemplateUncheckedCreateWithoutMerchantInputSchema';
import { UiTemplateCreateOrConnectWithoutMerchantInputSchema } from './UiTemplateCreateOrConnectWithoutMerchantInputSchema';
import { UiTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema } from './UiTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { UiTemplateCreateManyMerchantInputEnvelopeSchema } from './UiTemplateCreateManyMerchantInputEnvelopeSchema';
import { UiTemplateWhereUniqueInputSchema } from './UiTemplateWhereUniqueInputSchema';
import { UiTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema } from './UiTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { UiTemplateUpdateManyWithWhereWithoutMerchantInputSchema } from './UiTemplateUpdateManyWithWhereWithoutMerchantInputSchema';
import { UiTemplateScalarWhereInputSchema } from './UiTemplateScalarWhereInputSchema';

export const UiTemplateUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.UiTemplateUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => UiTemplateCreateWithoutMerchantInputSchema),z.lazy(() => UiTemplateCreateWithoutMerchantInputSchema).array(),z.lazy(() => UiTemplateUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => UiTemplateUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UiTemplateCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => UiTemplateCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UiTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => UiTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UiTemplateCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UiTemplateWhereUniqueInputSchema),z.lazy(() => UiTemplateWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UiTemplateWhereUniqueInputSchema),z.lazy(() => UiTemplateWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UiTemplateWhereUniqueInputSchema),z.lazy(() => UiTemplateWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UiTemplateWhereUniqueInputSchema),z.lazy(() => UiTemplateWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UiTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => UiTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UiTemplateUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => UiTemplateUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UiTemplateScalarWhereInputSchema),z.lazy(() => UiTemplateScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default UiTemplateUpdateManyWithoutMerchantNestedInputSchema;
