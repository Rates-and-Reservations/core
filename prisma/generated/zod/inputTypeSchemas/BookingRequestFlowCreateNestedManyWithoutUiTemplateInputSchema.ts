import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowCreateWithoutUiTemplateInputSchema } from './BookingRequestFlowCreateWithoutUiTemplateInputSchema';
import { BookingRequestFlowUncheckedCreateWithoutUiTemplateInputSchema } from './BookingRequestFlowUncheckedCreateWithoutUiTemplateInputSchema';
import { BookingRequestFlowCreateOrConnectWithoutUiTemplateInputSchema } from './BookingRequestFlowCreateOrConnectWithoutUiTemplateInputSchema';
import { BookingRequestFlowCreateManyUiTemplateInputEnvelopeSchema } from './BookingRequestFlowCreateManyUiTemplateInputEnvelopeSchema';
import { BookingRequestFlowWhereUniqueInputSchema } from './BookingRequestFlowWhereUniqueInputSchema';

export const BookingRequestFlowCreateNestedManyWithoutUiTemplateInputSchema: z.ZodType<Prisma.BookingRequestFlowCreateNestedManyWithoutUiTemplateInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestFlowCreateWithoutUiTemplateInputSchema),z.lazy(() => BookingRequestFlowCreateWithoutUiTemplateInputSchema).array(),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutUiTemplateInputSchema),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutUiTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestFlowCreateOrConnectWithoutUiTemplateInputSchema),z.lazy(() => BookingRequestFlowCreateOrConnectWithoutUiTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestFlowCreateManyUiTemplateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),z.lazy(() => BookingRequestFlowWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestFlowCreateNestedManyWithoutUiTemplateInputSchema;
