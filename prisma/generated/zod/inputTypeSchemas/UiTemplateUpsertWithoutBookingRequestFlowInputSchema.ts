import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UiTemplateUpdateWithoutBookingRequestFlowInputSchema } from './UiTemplateUpdateWithoutBookingRequestFlowInputSchema';
import { UiTemplateUncheckedUpdateWithoutBookingRequestFlowInputSchema } from './UiTemplateUncheckedUpdateWithoutBookingRequestFlowInputSchema';
import { UiTemplateCreateWithoutBookingRequestFlowInputSchema } from './UiTemplateCreateWithoutBookingRequestFlowInputSchema';
import { UiTemplateUncheckedCreateWithoutBookingRequestFlowInputSchema } from './UiTemplateUncheckedCreateWithoutBookingRequestFlowInputSchema';
import { UiTemplateWhereInputSchema } from './UiTemplateWhereInputSchema';

export const UiTemplateUpsertWithoutBookingRequestFlowInputSchema: z.ZodType<Prisma.UiTemplateUpsertWithoutBookingRequestFlowInput> = z.object({
  update: z.union([ z.lazy(() => UiTemplateUpdateWithoutBookingRequestFlowInputSchema),z.lazy(() => UiTemplateUncheckedUpdateWithoutBookingRequestFlowInputSchema) ]),
  create: z.union([ z.lazy(() => UiTemplateCreateWithoutBookingRequestFlowInputSchema),z.lazy(() => UiTemplateUncheckedCreateWithoutBookingRequestFlowInputSchema) ]),
  where: z.lazy(() => UiTemplateWhereInputSchema).optional()
}).strict();

export default UiTemplateUpsertWithoutBookingRequestFlowInputSchema;
