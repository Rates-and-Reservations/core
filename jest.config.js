// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/generated/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testTimeout: 30000,
};

// tests/setup.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

beforeAll(async () => {
  // Connect to test database
  await prisma.$connect();
});

afterAll(async () => {
  // Clean up test database
  await prisma.$disconnect();
});

// tests/helpers.ts
import request from 'supertest';
import app from '../src/app';

export const testRequest = request(app);

export const createTestMerchant = async (authToken) => {
  const response = await testRequest
    .post('/api/merchants')
    .set('Authorization', `Bearer ${authToken}`)
    .send({
      name: 'Test Merchant',
      tradingName: 'Test Trading',
      country: 'US',
      businessType: 'LIMITED_COMPANY',
      industry: 'Technology',
      category: 'Software',
    });
  
  return response.body.data;
};

// Mock Clerk authentication for testing
export const mockClerkAuth = () => {
  jest.mock('@clerk/backend', () => ({
    clerkClient: {
      users: {
        getUser: jest.fn().mockResolvedValue({
          id: 'test-user-id',
          emailAddresses: [
            {
              emailAddress: 'test@example.com',
              id: 'email-id',
            },
          ],
          primaryEmailAddressId: 'email-id',
        }),
      },
    },
    verifyToken: jest.fn().mockResolvedValue({
      sub: 'test-user-id',
    }),
  }));
};

// tests/health.test.ts
import { testRequest } from './helpers';

describe('Health Check', () => {
  it('should return health status', async () => {
    const response = await testRequest.get('/health');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'ok');
    expect(response.body).toHaveProperty('timestamp');
  });
});

// tests/auth.test.ts
import { testRequest, mockClerkAuth } from './helpers';

describe('Authentication', () => {
  beforeAll(() => {
    mockClerkAuth();
  });

  it('should get current user info', async () => {
    const response = await testRequest
      .get('/api/auth/me')
      .set('Authorization', 'Bearer test-token');
    
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it('should fail without authentication token', async () => {
    const response = await testRequest.get('/api/auth/me');
    
    expect(response.status).toBe(401);
    expect(response.body.success).toBe(false);
  });
});

// tests/merchants.test.ts
import { testRequest, mockClerkAuth, createTestMerchant } from './helpers';

describe('Merchants', () => {
  beforeAll(() => {
    mockClerkAuth();
  });

  it('should create a merchant', async () => {
    const response = await testRequest
      .post('/api/merchants')
      .set('Authorization', 'Bearer test-token')
      .send({
        name: 'Test Merchant',
        tradingName: 'Test Trading',
        country: 'US',
        businessType: 'LIMITED_COMPANY',
        industry: 'Technology',
        category: 'Software',
      });
    
    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data.name).toBe('Test Merchant');
  });

  it('should get merchant information', async () => {
    // First create a merchant
    await createTestMerchant('test-token');
    
    const response = await testRequest
      .get('/api/merchants')
      .set('Authorization', 'Bearer test-token');
    
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveProperty('id');
  });

  it('should validate required fields', async () => {
    const response = await testRequest
      .post('/api/merchants')
      .set('Authorization', 'Bearer test-token')
      .send({
        name: 'Test Merchant',
        // Missing required fields
      });
    
    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.errors).toBeDefined();
  });
});
