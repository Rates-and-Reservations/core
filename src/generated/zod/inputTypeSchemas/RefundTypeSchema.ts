import { z } from 'zod';

export const RefundTypeSchema = z.enum(['FULL','PARTIAL','NONE','SLIDING_SCALE']);

export type RefundTypeType = `${z.infer<typeof RefundTypeSchema>}`

export default RefundTypeSchema;
