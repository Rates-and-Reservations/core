import { Response } from 'express';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: any[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const successResponse = <T>(
  res: Response,
  data: T,
  message?: string,
  statusCode: number = 200
): Response<ApiResponse<T>> => {
  return res.status(statusCode).json({
    success: true,
    data,
    message,
  });
};

export const errorResponse = (
  res: Response,
  message: string,
  statusCode: number = 400,
  errors?: any[]
): Response<ApiResponse> => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};

export const paginatedResponse = <T>(
  res: Response,
  data: T[],
  pagination: {
    page: number;
    limit: number;
    total: number;
  },
  message?: string
): Response<ApiResponse<T[]>> => {
  const totalPages = Math.ceil(pagination.total / pagination.limit);
  
  return res.status(200).json({
    success: true,
    data,
    message,
    pagination: {
      ...pagination,
      totalPages,
    },
  });
};