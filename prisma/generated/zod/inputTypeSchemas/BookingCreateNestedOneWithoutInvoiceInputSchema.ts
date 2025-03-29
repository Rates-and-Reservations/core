import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutInvoiceInputSchema } from './BookingCreateWithoutInvoiceInputSchema';
import { BookingUncheckedCreateWithoutInvoiceInputSchema } from './BookingUncheckedCreateWithoutInvoiceInputSchema';
import { BookingCreateOrConnectWithoutInvoiceInputSchema } from './BookingCreateOrConnectWithoutInvoiceInputSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';

export const BookingCreateNestedOneWithoutInvoiceInputSchema: z.ZodType<Prisma.BookingCreateNestedOneWithoutInvoiceInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutInvoiceInputSchema),z.lazy(() => BookingUncheckedCreateWithoutInvoiceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutInvoiceInputSchema).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional()
}).strict();

export default BookingCreateNestedOneWithoutInvoiceInputSchema;
