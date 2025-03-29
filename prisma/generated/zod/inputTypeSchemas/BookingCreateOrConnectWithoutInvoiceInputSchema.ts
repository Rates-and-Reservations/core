import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingCreateWithoutInvoiceInputSchema } from './BookingCreateWithoutInvoiceInputSchema';
import { BookingUncheckedCreateWithoutInvoiceInputSchema } from './BookingUncheckedCreateWithoutInvoiceInputSchema';

export const BookingCreateOrConnectWithoutInvoiceInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutInvoiceInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutInvoiceInputSchema),z.lazy(() => BookingUncheckedCreateWithoutInvoiceInputSchema) ]),
}).strict();

export default BookingCreateOrConnectWithoutInvoiceInputSchema;
