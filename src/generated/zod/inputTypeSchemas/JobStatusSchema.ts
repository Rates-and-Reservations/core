import { z } from 'zod';

export const JobStatusSchema = z.enum(['PENDING','PROCESSING','COMPLETED','FAILED','CANCELLED']);

export type JobStatusType = `${z.infer<typeof JobStatusSchema>}`

export default JobStatusSchema;
