import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingAddOnIncludeSchema } from '../inputTypeSchemas/BookingAddOnIncludeSchema'
import { BookingAddOnWhereInputSchema } from '../inputTypeSchemas/BookingAddOnWhereInputSchema'
import { BookingAddOnOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookingAddOnOrderByWithRelationInputSchema'
import { BookingAddOnWhereUniqueInputSchema } from '../inputTypeSchemas/BookingAddOnWhereUniqueInputSchema'
import { BookingAddOnScalarFieldEnumSchema } from '../inputTypeSchemas/BookingAddOnScalarFieldEnumSchema'
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

export const BookingAddOnFindFirstArgsSchema: z.ZodType<Prisma.BookingAddOnFindFirstArgs> = z.object({
  select: BookingAddOnSelectSchema.optional(),
  include: z.lazy(() => BookingAddOnIncludeSchema).optional(),
  where: BookingAddOnWhereInputSchema.optional(),
  orderBy: z.union([ BookingAddOnOrderByWithRelationInputSchema.array(),BookingAddOnOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingAddOnWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BookingAddOnScalarFieldEnumSchema,BookingAddOnScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default BookingAddOnFindFirstArgsSchema;
