import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    merchantId?: string;
    role?: string;
  };
  merchant?: {
    id: string;
    name: string;
    ownerId: string;
  };
}

export interface PaginationQuery {
  page?: string;
  limit?: string;
  sort?: string;
  order?: 'asc' | 'desc';
}

export interface SearchQuery extends PaginationQuery {
  search?: string;
  filter?: string;
}
