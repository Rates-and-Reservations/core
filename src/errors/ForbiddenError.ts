// errors/ForbiddenError.ts
import { ApiError } from './ApiError';

export class ForbiddenError extends ApiError {
  constructor(message = 'Forbidden') {
    super(message, 403);
  }
}
