import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingAddOnIncludeSchema } from '../inputTypeSchemas/BookingAddOnIncludeSchema'
import { BookingAddOnWhereUniqueInputSchema } from '../inputTypeSchemas/BookingAddOnWhereUniqueInputSchema'
import { BookingArgsSchema } from "../outputTypeSchemas/BookingArgsSchema"
import { AddOnArgsSchema } from "../outputTypeSchemas/AddOnArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BookingAddOnSelectSchema: z.ZodType<Prisma.BookingAddOnSelect> = z.object({
  id: z.boolean().optional(),
  bookingId: z.boolean().optional(),
  addOnId: z.boolean().optional(),
  addOnName: z.boolean().optional(),
  quantity: z.boolean().optional(),
  unitPrice: z.boolean().optional(),
  totalPrice: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  booking: z.union([z.boolean(),z.lazy(() => BookingArgsSchema)]).optional(),
  addOn: z.union([z.boolean(),z.lazy(() => AddOnArgsSchema)]).optional(),
}).strict()

export const BookingAddOnFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BookingAddOnFindUniqueOrThrowArgs> = z.object({
  select: BookingAddOnSelectSchema.optional(),
  include: z.lazy(() => BookingAddOnIncludeSchema).optional(),
  where: BookingAddOnWhereUniqueInputSchema,
}).strict() ;

export default BookingAddOnFindUniqueOrThrowArgsSchema;
