import { RateDurationType, TaxType } from '@prisma/client';

export interface CreateRateData {
  resourceId: string;
  name: string;
  description?: string;
  price: number;
  currency?: string;
  durationType: RateDurationType;
  isDefault?: boolean;
  isPublished?: boolean;
  orderIndex?: number;
  validFrom?: Date;
  validTo?: Date;
  taxType?: TaxType;
  taxAmount?: number;
}

export interface UpdateRateData {
  name?: string;
  description?: string;
  price?: number;
  currency?: string;
  durationType?: RateDurationType;
  isDefault?: boolean;
  isPublished?: boolean;
  isActive?: boolean;
  orderIndex?: number;
  validFrom?: Date;
  validTo?: Date;
  taxType?: TaxType;
  taxAmount?: number;
}

export interface RateQueryFilters {
  resourceId?: string;
  isActive?: boolean;
}

export interface CreateAddOnData {
  name: string;
  description?: string;
  price: number;
  currency?: string;
  showInBooking?: boolean;
  hasInventory?: boolean;
  inventoryCount?: number;
  lowStockWarning?: number;
}

export interface UpdateAddOnData {
  name?: string;
  description?: string;
  price?: number;
  currency?: string;
  showInBooking?: boolean;
  isActive?: boolean;
  hasInventory?: boolean;
  inventoryCount?: number;
  lowStockWarning?: number;
}
