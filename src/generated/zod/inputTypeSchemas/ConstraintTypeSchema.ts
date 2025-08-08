import { z } from 'zod';

export const ConstraintTypeSchema = z.enum(['MIN_ADVANCE_BOOKING','MAX_ADVANCE_BOOKING','MAX_BOOKINGS_PER_DAY','MAX_BOOKINGS_PER_WEEK','BUFFER_TIME','CAPACITY_LIMIT','BLACKOUT_DATES','MINIMUM_PARTY_SIZE','MAXIMUM_PARTY_SIZE']);

export type ConstraintTypeType = `${z.infer<typeof ConstraintTypeSchema>}`

export default ConstraintTypeSchema;
