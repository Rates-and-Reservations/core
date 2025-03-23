import crypto from 'crypto';
import bcrypt from 'bcrypt';

export const generateApiKey = async () => {
  const apiKey = crypto.randomBytes(32).toString('hex');
  const keyHash = await bcrypt.hash(apiKey, 10);

  return { apiKey, keyHash };
};
