import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateWithoutTemplateInputSchema } from './BookingRequestCreateWithoutTemplateInputSchema';
import { BookingRequestUncheckedCreateWithoutTemplateInputSchema } from './BookingRequestUncheckedCreateWithoutTemplateInputSchema';
import { BookingRequestCreateOrConnectWithoutTemplateInputSchema } from './BookingRequestCreateOrConnectWithoutTemplateInputSchema';
import { BookingRequestCreateManyTemplateInputEnvelopeSchema } from './BookingRequestCreateManyTemplateInputEnvelopeSchema';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';

export const BookingRequestCreateNestedManyWithoutTemplateInputSchema: z.ZodType<Prisma.BookingRequestCreateNestedManyWithoutTemplateInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutTemplateInputSchema),z.lazy(() => BookingRequestCreateWithoutTemplateInputSchema).array(),z.lazy(() => BookingRequestUncheckedCreateWithoutTemplateInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestCreateOrConnectWithoutTemplateInputSchema),z.lazy(() => BookingRequestCreateOrConnectWithoutTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestCreateManyTemplateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestCreateNestedManyWithoutTemplateInputSchema;
