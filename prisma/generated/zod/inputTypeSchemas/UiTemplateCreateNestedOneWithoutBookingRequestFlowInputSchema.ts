import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UiTemplateCreateWithoutBookingRequestFlowInputSchema } from './UiTemplateCreateWithoutBookingRequestFlowInputSchema';
import { UiTemplateUncheckedCreateWithoutBookingRequestFlowInputSchema } from './UiTemplateUncheckedCreateWithoutBookingRequestFlowInputSchema';
import { UiTemplateCreateOrConnectWithoutBookingRequestFlowInputSchema } from './UiTemplateCreateOrConnectWithoutBookingRequestFlowInputSchema';
import { UiTemplateWhereUniqueInputSchema } from './UiTemplateWhereUniqueInputSchema';

export const UiTemplateCreateNestedOneWithoutBookingRequestFlowInputSchema: z.ZodType<Prisma.UiTemplateCreateNestedOneWithoutBookingRequestFlowInput> = z.object({
  create: z.union([ z.lazy(() => UiTemplateCreateWithoutBookingRequestFlowInputSchema),z.lazy(() => UiTemplateUncheckedCreateWithoutBookingRequestFlowInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UiTemplateCreateOrConnectWithoutBookingRequestFlowInputSchema).optional(),
  connect: z.lazy(() => UiTemplateWhereUniqueInputSchema).optional()
}).strict();

export default UiTemplateCreateNestedOneWithoutBookingRequestFlowInputSchema;
