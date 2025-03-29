import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemAddOnIncludeSchema } from '../inputTypeSchemas/BookingItemAddOnIncludeSchema'
import { BookingItemAddOnCreateInputSchema } from '../inputTypeSchemas/BookingItemAddOnCreateInputSchema'
import { BookingItemAddOnUncheckedCreateInputSchema } from '../inputTypeSchemas/BookingItemAddOnUncheckedCreateInputSchema'
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

export const BookingItemAddOnCreateArgsSchema: z.ZodType<Prisma.BookingItemAddOnCreateArgs> = z.object({
  select: BookingItemAddOnSelectSchema.optional(),
  include: z.lazy(() => BookingItemAddOnIncludeSchema).optional(),
  data: z.union([ BookingItemAddOnCreateInputSchema,BookingItemAddOnUncheckedCreateInputSchema ]),
}).strict() ;

export default BookingItemAddOnCreateArgsSchema;
