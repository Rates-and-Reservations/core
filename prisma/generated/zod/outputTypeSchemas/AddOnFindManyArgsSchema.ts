import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddOnIncludeSchema } from '../inputTypeSchemas/AddOnIncludeSchema'
import { AddOnWhereInputSchema } from '../inputTypeSchemas/AddOnWhereInputSchema'
import { AddOnOrderByWithRelationInputSchema } from '../inputTypeSchemas/AddOnOrderByWithRelationInputSchema'
import { AddOnWhereUniqueInputSchema } from '../inputTypeSchemas/AddOnWhereUniqueInputSchema'
import { AddOnScalarFieldEnumSchema } from '../inputTypeSchemas/AddOnScalarFieldEnumSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { RateAddOnFindManyArgsSchema } from "../outputTypeSchemas/RateAddOnFindManyArgsSchema"
import { BookingItemAddOnFindManyArgsSchema } from "../outputTypeSchemas/BookingItemAddOnFindManyArgsSchema"
import { BookingAddOnFindManyArgsSchema } from "../outputTypeSchemas/BookingAddOnFindManyArgsSchema"
import { AddOnCountOutputTypeArgsSchema } from "../outputTypeSchemas/AddOnCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AddOnSelectSchema: z.ZodType<Prisma.AddOnSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  price: z.boolean().optional(),
  currency: z.boolean().optional(),
  showInBooking: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  RateAddOn: z.union([z.boolean(),z.lazy(() => RateAddOnFindManyArgsSchema)]).optional(),
  BookingItemAddOn: z.union([z.boolean(),z.lazy(() => BookingItemAddOnFindManyArgsSchema)]).optional(),
  BookingAddOn: z.union([z.boolean(),z.lazy(() => BookingAddOnFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AddOnCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AddOnFindManyArgsSchema: z.ZodType<Prisma.AddOnFindManyArgs> = z.object({
  select: AddOnSelectSchema.optional(),
  include: z.lazy(() => AddOnIncludeSchema).optional(),
  where: AddOnWhereInputSchema.optional(),
  orderBy: z.union([ AddOnOrderByWithRelationInputSchema.array(),AddOnOrderByWithRelationInputSchema ]).optional(),
  cursor: AddOnWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AddOnScalarFieldEnumSchema,AddOnScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default AddOnFindManyArgsSchema;
