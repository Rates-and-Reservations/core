import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// ADD ON SCHEMA
/////////////////////////////////////////

/**
 * AddOn: Represents an additional service or item that can be attached to a booking
 * @group Inventory
 */
export const AddOnSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  price: z.instanceof(Prisma.Decimal, { message: "Field 'price' must be a Decimal. Location: ['Models', 'AddOn']"}),
  currency: z.string(),
  showInBooking: z.boolean(),
  isActive: z.boolean(),
  hasInventory: z.boolean(),
  inventoryCount: z.number().int().nullable(),
  lowStockWarning: z.number().int().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type AddOn = z.infer<typeof AddOnSchema>

export default AddOnSchema;
