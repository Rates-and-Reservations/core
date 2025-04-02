import { z } from 'zod';

export const RateDurationTypeSchema = z.enum(['PER_HOUR','PER_DAY','PER_NIGHT']);

export type RateDurationTypeType = `${z.infer<typeof RateDurationTypeSchema>}`

export default RateDurationTypeSchema;
