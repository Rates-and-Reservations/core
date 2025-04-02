import { z } from 'zod';

export const RefundStatusSchema = z.enum(['PENDING','SUCCESS','FAILED']);

export type RefundStatusType = `${z.infer<typeof RefundStatusSchema>}`

export default RefundStatusSchema;
