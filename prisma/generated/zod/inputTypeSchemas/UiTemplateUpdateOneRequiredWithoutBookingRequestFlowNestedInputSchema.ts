import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UiTemplateCreateWithoutBookingRequestFlowInputSchema } from './UiTemplateCreateWithoutBookingRequestFlowInputSchema';
import { UiTemplateUncheckedCreateWithoutBookingRequestFlowInputSchema } from './UiTemplateUncheckedCreateWithoutBookingRequestFlowInputSchema';
import { UiTemplateCreateOrConnectWithoutBookingRequestFlowInputSchema } from './UiTemplateCreateOrConnectWithoutBookingRequestFlowInputSchema';
import { UiTemplateUpsertWithoutBookingRequestFlowInputSchema } from './UiTemplateUpsertWithoutBookingRequestFlowInputSchema';
import { UiTemplateWhereUniqueInputSchema } from './UiTemplateWhereUniqueInputSchema';
import { UiTemplateUpdateToOneWithWhereWithoutBookingRequestFlowInputSchema } from './UiTemplateUpdateToOneWithWhereWithoutBookingRequestFlowInputSchema';
import { UiTemplateUpdateWithoutBookingRequestFlowInputSchema } from './UiTemplateUpdateWithoutBookingRequestFlowInputSchema';
import { UiTemplateUncheckedUpdateWithoutBookingRequestFlowInputSchema } from './UiTemplateUncheckedUpdateWithoutBookingRequestFlowInputSchema';

export const UiTemplateUpdateOneRequiredWithoutBookingRequestFlowNestedInputSchema: z.ZodType<Prisma.UiTemplateUpdateOneRequiredWithoutBookingRequestFlowNestedInput> = z.object({
  create: z.union([ z.lazy(() => UiTemplateCreateWithoutBookingRequestFlowInputSchema),z.lazy(() => UiTemplateUncheckedCreateWithoutBookingRequestFlowInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UiTemplateCreateOrConnectWithoutBookingRequestFlowInputSchema).optional(),
  upsert: z.lazy(() => UiTemplateUpsertWithoutBookingRequestFlowInputSchema).optional(),
  connect: z.lazy(() => UiTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UiTemplateUpdateToOneWithWhereWithoutBookingRequestFlowInputSchema),z.lazy(() => UiTemplateUpdateWithoutBookingRequestFlowInputSchema),z.lazy(() => UiTemplateUncheckedUpdateWithoutBookingRequestFlowInputSchema) ]).optional(),
}).strict();

export default UiTemplateUpdateOneRequiredWithoutBookingRequestFlowNestedInputSchema;
