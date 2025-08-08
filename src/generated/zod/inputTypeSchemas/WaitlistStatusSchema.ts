import { z } from 'zod';

export const WaitlistStatusSchema = z.enum(['ACTIVE','CANCELLED','NOTIFIED','PROMOTED','EXPIRED']);

export type WaitlistStatusType = `${z.infer<typeof WaitlistStatusSchema>}`

export default WaitlistStatusSchema;
