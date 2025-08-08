import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// REPORT EXECUTION SCHEMA
/////////////////////////////////////////

/**
 * ReportExecution: Track report generation
 * @group Analytics
 */
export const ReportExecutionSchema = z.object({
  id: z.string().cuid(),
  templateId: z.string(),
  status: z.string(),
  reportUrl: z.string().nullable(),
  parameters: JsonValueSchema.nullable(),
  errorLog: z.string().nullable(),
  startedAt: z.coerce.date().nullable(),
  completedAt: z.coerce.date().nullable(),
  createdBy: z.string(),
  createdAt: z.coerce.date(),
})

export type ReportExecution = z.infer<typeof ReportExecutionSchema>

export default ReportExecutionSchema;
