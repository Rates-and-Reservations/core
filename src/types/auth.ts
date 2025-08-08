export interface JWTPayload {
  sub: string;
  email: string;
  merchantId?: string;
  role?: string;
  iat: number;
  exp: number;
}

export interface ClerkUser {
  id: string;
  email_addresses: Array<{
    email_address: string;
    id: string;
  }>;
  first_name?: string;
  last_name?: string;
  username?: string;
  image_url?: string;
  created_at: number;
  updated_at: number;
}

export interface ApiKeyPayload {
  keyId: string;
  merchantId: string;
  scopes: string[];
}

export interface CreateApiKeyData {
  label: string;
  description?: string;
  scopes?: string[];
}

export interface UpdateApiKeyData {
  label?: string;
  description?: string;
  scopes?: string[];
  isActive?: boolean;
}
