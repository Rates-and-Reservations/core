import { z } from 'zod';

export const RefundRequestStatusSchema = z.enum(['PENDING','APPROVED','REJECTED','PROCESSED']);

export type RefundRequestStatusType = `${z.infer<typeof RefundRequestStatusSchema>}`

export default RefundRequestStatusSchema;
