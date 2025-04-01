import { z } from 'zod';

export const BusinessTypeSchema = z.enum(['SOLE_TRADER','LIMITED_COMPANY','PARTNERSHIP']);

export type BusinessTypeType = `${z.infer<typeof BusinessTypeSchema>}`

export default BusinessTypeSchema;
