import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { ImportJobTypeSchema } from '../inputTypeSchemas/ImportJobTypeSchema'
import { JobStatusSchema } from '../inputTypeSchemas/JobStatusSchema'

/////////////////////////////////////////
// IMPORT JOB SCHEMA
/////////////////////////////////////////

/**
 * ImportJob: Track data import operations
 * @group Import
 */
export const ImportJobSchema = z.object({
  jobType: ImportJobTypeSchema,
  status: JobStatusSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  fileName: z.string(),
  totalRows: z.number().int().nullable(),
  processedRows: z.number().int(),
  errorRows: z.number().int(),
  errors: JsonValueSchema.nullable(),
  startedAt: z.coerce.date().nullable(),
  completedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ImportJob = z.infer<typeof ImportJobSchema>

export default ImportJobSchema;
