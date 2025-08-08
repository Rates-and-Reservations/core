import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// REPORT TEMPLATE SCHEMA
/////////////////////////////////////////

/**
 * ReportTemplate: Custom report templates
 * @group Analytics
 */
export const ReportTemplateSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  reportType: z.string(),
  config: JsonValueSchema,
  schedule: JsonValueSchema.nullable(),
  isActive: z.boolean(),
  createdBy: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ReportTemplate = z.infer<typeof ReportTemplateSchema>

export default ReportTemplateSchema;
