import { z } from 'zod';

export const TaxTypeSchema = z.enum(['NONE','PERCENTAGE','FIXED']);

export type TaxTypeType = `${z.infer<typeof TaxTypeSchema>}`

export default TaxTypeSchema;
