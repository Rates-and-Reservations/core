import { z } from 'zod';

export const ImportJobTypeSchema = z.enum(['CUSTOMERS','RESOURCES','BOOKINGS','RATES','AVAILABILITY']);

export type ImportJobTypeType = `${z.infer<typeof ImportJobTypeSchema>}`

export default ImportJobTypeSchema;
