import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemAddOnIncludeSchema } from '../inputTypeSchemas/BookingItemAddOnIncludeSchema'
import { BookingItemAddOnWhereUniqueInputSchema } from '../inputTypeSchemas/BookingItemAddOnWhereUniqueInputSchema'
import { BookingItemAddOnCreateInputSchema } from '../inputTypeSchemas/BookingItemAddOnCreateInputSchema'
import { BookingItemAddOnUncheckedCreateInputSchema } from '../inputTypeSchemas/BookingItemAddOnUncheckedCreateInputSchema'
import { BookingItemAddOnUpdateInputSchema } from '../inputTypeSchemas/BookingItemAddOnUpdateInputSchema'
import { BookingItemAddOnUncheckedUpdateInputSchema } from '../inputTypeSchemas/BookingItemAddOnUncheckedUpdateInputSchema'
import { BookingItemArgsSchema } from "../outputTypeSchemas/BookingItemArgsSchema"
import { AddOnArgsSchema } from "../outputTypeSchemas/AddOnArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BookingItemAddOnSelectSchema: z.ZodType<Prisma.BookingItemAddOnSelect> = z.object({
  id: z.boolean().optional(),
  bookingItemId: z.boolean().optional(),
  addOnId: z.boolean().optional(),
  addOnName: z.boolean().optional(),
  unitPrice: z.boolean().optional(),
  quantity: z.boolean().optional(),
  totalPrice: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  bookingItem: z.union([z.boolean(),z.lazy(() => BookingItemArgsSchema)]).optional(),
  addOn: z.union([z.boolean(),z.lazy(() => AddOnArgsSchema)]).optional(),
}).strict()

export const BookingItemAddOnUpsertArgsSchema: z.ZodType<Prisma.BookingItemAddOnUpsertArgs> = z.object({
  select: BookingItemAddOnSelectSchema.optional(),
  include: z.lazy(() => BookingItemAddOnIncludeSchema).optional(),
  where: BookingItemAddOnWhereUniqueInputSchema,
  create: z.union([ BookingItemAddOnCreateInputSchema,BookingItemAddOnUncheckedCreateInputSchema ]),
  update: z.union([ BookingItemAddOnUpdateInputSchema,BookingItemAddOnUncheckedUpdateInputSchema ]),
}).strict() ;

export default BookingItemAddOnUpsertArgsSchema;
