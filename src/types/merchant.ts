import { BusinessType } from '@prisma/client';

export interface CreateMerchantData {
  name: string;
  tradingName: string;
  country: string;
  businessType: BusinessType;
  industry: string;
  category: string;
  vatNumber?: string;
  description?: string;
  timezone?: string;
  locale?: string;
  currency?: string;
  dateFormat?: string;
  timeFormat?: string;
}

export interface UpdateMerchantData {
  name?: string;
  tradingName?: string;
  country?: string;
  businessType?: BusinessType;
  industry?: string;
  category?: string;
  vatNumber?: string;
  description?: string;
  logo?: string;
  timezone?: string;
  locale?: string;
  currency?: string;
  dateFormat?: string;
  timeFormat?: string;
}