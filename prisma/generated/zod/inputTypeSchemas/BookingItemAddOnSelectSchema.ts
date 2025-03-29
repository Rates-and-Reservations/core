import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemArgsSchema } from "../outputTypeSchemas/BookingItemArgsSchema"
import { AddOnArgsSchema } from "../outputTypeSchemas/AddOnArgsSchema"

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

export default BookingItemAddOnSelectSchema;
