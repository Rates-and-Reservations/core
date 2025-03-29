import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutInvoiceInputSchema } from './BookingCreateWithoutInvoiceInputSchema';
import { BookingUncheckedCreateWithoutInvoiceInputSchema } from './BookingUncheckedCreateWithoutInvoiceInputSchema';
import { BookingCreateOrConnectWithoutInvoiceInputSchema } from './BookingCreateOrConnectWithoutInvoiceInputSchema';
import { BookingUpsertWithoutInvoiceInputSchema } from './BookingUpsertWithoutInvoiceInputSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateToOneWithWhereWithoutInvoiceInputSchema } from './BookingUpdateToOneWithWhereWithoutInvoiceInputSchema';
import { BookingUpdateWithoutInvoiceInputSchema } from './BookingUpdateWithoutInvoiceInputSchema';
import { BookingUncheckedUpdateWithoutInvoiceInputSchema } from './BookingUncheckedUpdateWithoutInvoiceInputSchema';

export const BookingUpdateOneWithoutInvoiceNestedInputSchema: z.ZodType<Prisma.BookingUpdateOneWithoutInvoiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutInvoiceInputSchema),z.lazy(() => BookingUncheckedCreateWithoutInvoiceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutInvoiceInputSchema).optional(),
  upsert: z.lazy(() => BookingUpsertWithoutInvoiceInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => BookingWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BookingWhereInputSchema) ]).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingUpdateToOneWithWhereWithoutInvoiceInputSchema),z.lazy(() => BookingUpdateWithoutInvoiceInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutInvoiceInputSchema) ]).optional(),
}).strict();

export default BookingUpdateOneWithoutInvoiceNestedInputSchema;
