import { z } from 'zod';

export const RateDurationTypeSchema = z.enum(['PER_HOUR','PER_DAY','PER_NIGHT','PER_WEEK','PER_MONTH','FIXED_PRICE']);

export type RateDurationTypeType = `${z.infer<typeof RateDurationTypeSchema>}`

export default RateDurationTypeSchema;
