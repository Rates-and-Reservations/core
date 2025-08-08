import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// CURRENCY SCHEMA
/////////////////////////////////////////

/**
 * Currency: Supported currencies for multi-currency support
 * @group Localization
 */
export const CurrencySchema = z.object({
  id: z.string().cuid(),
  code: z.string(),
  name: z.string(),
  symbol: z.string(),
  exchangeRate: z.instanceof(Prisma.Decimal, { message: "Field 'exchangeRate' must be a Decimal. Location: ['Models', 'Currency']"}),
  isActive: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Currency = z.infer<typeof CurrencySchema>

export default CurrencySchema;
