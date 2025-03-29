import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionCreateWithoutBookingTemplateInputSchema } from './BookingActionCreateWithoutBookingTemplateInputSchema';
import { BookingActionUncheckedCreateWithoutBookingTemplateInputSchema } from './BookingActionUncheckedCreateWithoutBookingTemplateInputSchema';
import { BookingActionCreateOrConnectWithoutBookingTemplateInputSchema } from './BookingActionCreateOrConnectWithoutBookingTemplateInputSchema';
import { BookingActionCreateManyBookingTemplateInputEnvelopeSchema } from './BookingActionCreateManyBookingTemplateInputEnvelopeSchema';
import { BookingActionWhereUniqueInputSchema } from './BookingActionWhereUniqueInputSchema';

export const BookingActionCreateNestedManyWithoutBookingTemplateInputSchema: z.ZodType<Prisma.BookingActionCreateNestedManyWithoutBookingTemplateInput> = z.object({
  create: z.union([ z.lazy(() => BookingActionCreateWithoutBookingTemplateInputSchema),z.lazy(() => BookingActionCreateWithoutBookingTemplateInputSchema).array(),z.lazy(() => BookingActionUncheckedCreateWithoutBookingTemplateInputSchema),z.lazy(() => BookingActionUncheckedCreateWithoutBookingTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingActionCreateOrConnectWithoutBookingTemplateInputSchema),z.lazy(() => BookingActionCreateOrConnectWithoutBookingTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingActionCreateManyBookingTemplateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingActionWhereUniqueInputSchema),z.lazy(() => BookingActionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingActionCreateNestedManyWithoutBookingTemplateInputSchema;
