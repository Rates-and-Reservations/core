import { z } from 'zod';

export const ReportExecutionScalarFieldEnumSchema = z.enum(['id','templateId','status','reportUrl','parameters','errorLog','startedAt','completedAt','createdBy','createdAt']);

export default ReportExecutionScalarFieldEnumSchema;
