import { z } from 'zod';

/////////////////////////////////////////
// DATA RETENTION POLICY SCHEMA
/////////////////////////////////////////

/**
 * DataRetentionPolicy: Data retention and deletion policies
 * @group Compliance
 */
export const DataRetentionPolicySchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  dataType: z.string(),
  retentionPeriod: z.number().int(),
  isActive: z.boolean(),
  lastRunAt: z.coerce.date().nullable(),
  nextRunAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type DataRetentionPolicy = z.infer<typeof DataRetentionPolicySchema>

export default DataRetentionPolicySchema;
