import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UiTemplateWhereInputSchema } from './UiTemplateWhereInputSchema';
import { UiTemplateUpdateWithoutBookingRequestFlowInputSchema } from './UiTemplateUpdateWithoutBookingRequestFlowInputSchema';
import { UiTemplateUncheckedUpdateWithoutBookingRequestFlowInputSchema } from './UiTemplateUncheckedUpdateWithoutBookingRequestFlowInputSchema';

export const UiTemplateUpdateToOneWithWhereWithoutBookingRequestFlowInputSchema: z.ZodType<Prisma.UiTemplateUpdateToOneWithWhereWithoutBookingRequestFlowInput> = z.object({
  where: z.lazy(() => UiTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UiTemplateUpdateWithoutBookingRequestFlowInputSchema),z.lazy(() => UiTemplateUncheckedUpdateWithoutBookingRequestFlowInputSchema) ]),
}).strict();

export default UiTemplateUpdateToOneWithWhereWithoutBookingRequestFlowInputSchema;
