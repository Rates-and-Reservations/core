import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UiTemplateWhereUniqueInputSchema } from './UiTemplateWhereUniqueInputSchema';
import { UiTemplateCreateWithoutBookingRequestFlowInputSchema } from './UiTemplateCreateWithoutBookingRequestFlowInputSchema';
import { UiTemplateUncheckedCreateWithoutBookingRequestFlowInputSchema } from './UiTemplateUncheckedCreateWithoutBookingRequestFlowInputSchema';

export const UiTemplateCreateOrConnectWithoutBookingRequestFlowInputSchema: z.ZodType<Prisma.UiTemplateCreateOrConnectWithoutBookingRequestFlowInput> = z.object({
  where: z.lazy(() => UiTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UiTemplateCreateWithoutBookingRequestFlowInputSchema),z.lazy(() => UiTemplateUncheckedCreateWithoutBookingRequestFlowInputSchema) ]),
}).strict();

export default UiTemplateCreateOrConnectWithoutBookingRequestFlowInputSchema;
