// Shared TypeScript types across website and backend
// Keep platform-agnostic — no Next.js or NestJS specific imports here

export type Region = 'DOMESTIC' | 'INTERNATIONAL';

export type UserRole = 'ADMIN' | 'AGENT' | 'CUSTOMER';

export type EnquiryStatus =
  | 'NEW'
  | 'CONTACTED'
  | 'IN_PROGRESS'
  | 'QUOTED'
  | 'BOOKED'
  | 'CLOSED'
  | 'SPAM';

export interface ApiResponse<T> {
  data: T;
  meta?: {
    total?: number;
    page?: number;
    pageSize?: number;
  };
}

export interface ApiError {
  statusCode: number;
  message: string;
  error?: string;
}
