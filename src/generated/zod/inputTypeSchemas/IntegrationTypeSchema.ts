import { z } from 'zod';

export const IntegrationTypeSchema = z.enum(['GOOGLE_CALENDAR','OUTLOOK_CALENDAR','APPLE_CALENDAR','ZOOM','GOOGLE_MEET','MICROSOFT_TEAMS','STRIPE','PAYPAL','SQUARE','MAILCHIMP','SENDGRID','TWILIO','SLACK','ZAPIER','CUSTOM_WEBHOOK']);

export type IntegrationTypeType = `${z.infer<typeof IntegrationTypeSchema>}`

export default IntegrationTypeSchema;
