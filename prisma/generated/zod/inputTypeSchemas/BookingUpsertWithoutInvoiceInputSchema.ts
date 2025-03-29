import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingUpdateWithoutInvoiceInputSchema } from './BookingUpdateWithoutInvoiceInputSchema';
import { BookingUncheckedUpdateWithoutInvoiceInputSchema } from './BookingUncheckedUpdateWithoutInvoiceInputSchema';
import { BookingCreateWithoutInvoiceInputSchema } from './BookingCreateWithoutInvoiceInputSchema';
import { BookingUncheckedCreateWithoutInvoiceInputSchema } from './BookingUncheckedCreateWithoutInvoiceInputSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';

export const BookingUpsertWithoutInvoiceInputSchema: z.ZodType<Prisma.BookingUpsertWithoutInvoiceInput> = z.object({
  update: z.union([ z.lazy(() => BookingUpdateWithoutInvoiceInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutInvoiceInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutInvoiceInputSchema),z.lazy(() => BookingUncheckedCreateWithoutInvoiceInputSchema) ]),
  where: z.lazy(() => BookingWhereInputSchema).optional()
}).strict();

export default BookingUpsertWithoutInvoiceInputSchema;
