import { z } from 'zod';

export const CancellationStatusSchema = z.enum(['PENDING','APPROVED','DECLINED','CANCELLED']);

export type CancellationStatusType = `${z.infer<typeof CancellationStatusSchema>}`

export default CancellationStatusSchema;
