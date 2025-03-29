import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { BookingUpdateWithoutInvoiceInputSchema } from './BookingUpdateWithoutInvoiceInputSchema';
import { BookingUncheckedUpdateWithoutInvoiceInputSchema } from './BookingUncheckedUpdateWithoutInvoiceInputSchema';

export const BookingUpdateToOneWithWhereWithoutInvoiceInputSchema: z.ZodType<Prisma.BookingUpdateToOneWithWhereWithoutInvoiceInput> = z.object({
  where: z.lazy(() => BookingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingUpdateWithoutInvoiceInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutInvoiceInputSchema) ]),
}).strict();

export default BookingUpdateToOneWithWhereWithoutInvoiceInputSchema;
