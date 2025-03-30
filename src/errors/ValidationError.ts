// errors/ValidationError.ts
import { ApiError } from './ApiError';

export class ValidationError extends ApiError {
  constructor(message = 'Invalid request', details?: unknown) {
    super(message, 400, details);
  }
}
