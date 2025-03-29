import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateCreateWithoutBookingRequestInputSchema } from './BookingTemplateCreateWithoutBookingRequestInputSchema';
import { BookingTemplateUncheckedCreateWithoutBookingRequestInputSchema } from './BookingTemplateUncheckedCreateWithoutBookingRequestInputSchema';
import { BookingTemplateCreateOrConnectWithoutBookingRequestInputSchema } from './BookingTemplateCreateOrConnectWithoutBookingRequestInputSchema';
import { BookingTemplateUpsertWithoutBookingRequestInputSchema } from './BookingTemplateUpsertWithoutBookingRequestInputSchema';
import { BookingTemplateWhereUniqueInputSchema } from './BookingTemplateWhereUniqueInputSchema';
import { BookingTemplateUpdateToOneWithWhereWithoutBookingRequestInputSchema } from './BookingTemplateUpdateToOneWithWhereWithoutBookingRequestInputSchema';
import { BookingTemplateUpdateWithoutBookingRequestInputSchema } from './BookingTemplateUpdateWithoutBookingRequestInputSchema';
import { BookingTemplateUncheckedUpdateWithoutBookingRequestInputSchema } from './BookingTemplateUncheckedUpdateWithoutBookingRequestInputSchema';

export const BookingTemplateUpdateOneRequiredWithoutBookingRequestNestedInputSchema: z.ZodType<Prisma.BookingTemplateUpdateOneRequiredWithoutBookingRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingTemplateCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingTemplateUncheckedCreateWithoutBookingRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingTemplateCreateOrConnectWithoutBookingRequestInputSchema).optional(),
  upsert: z.lazy(() => BookingTemplateUpsertWithoutBookingRequestInputSchema).optional(),
  connect: z.lazy(() => BookingTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingTemplateUpdateToOneWithWhereWithoutBookingRequestInputSchema),z.lazy(() => BookingTemplateUpdateWithoutBookingRequestInputSchema),z.lazy(() => BookingTemplateUncheckedUpdateWithoutBookingRequestInputSchema) ]).optional(),
}).strict();

export default BookingTemplateUpdateOneRequiredWithoutBookingRequestNestedInputSchema;
