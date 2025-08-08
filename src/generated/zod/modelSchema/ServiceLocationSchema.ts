import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// SERVICE LOCATION SCHEMA
/////////////////////////////////////////

/**
 * ServiceLocation: Physical locations where services are provided
 * @group Location
 */
export const ServiceLocationSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  name: z.string(),
  address: z.string(),
  city: z.string(),
  country: z.string(),
  postcode: z.string().nullable(),
  latitude: z.instanceof(Prisma.Decimal, { message: "Field 'latitude' must be a Decimal. Location: ['Models', 'ServiceLocation']"}).nullable(),
  longitude: z.instanceof(Prisma.Decimal, { message: "Field 'longitude' must be a Decimal. Location: ['Models', 'ServiceLocation']"}).nullable(),
  timezone: z.string().nullable(),
  isActive: z.boolean(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ServiceLocation = z.infer<typeof ServiceLocationSchema>

export default ServiceLocationSchema;
