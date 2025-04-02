const fs = require('fs');
const path = require('path');

// PATHS
const SERVICES_FOLDER = path.join(__dirname, '../src/services');
const SCHEMA_FILE = path.join(__dirname, '../prisma/schema.prisma');

// 1️⃣ Parse model names from schema.prisma
const schema = fs.readFileSync(SCHEMA_FILE, 'utf8');
const modelRegex = /model\s+(\w+)\s+{/g;

const modelNames: string[] = [];
let match;
while ((match = modelRegex.exec(schema)) !== null) {
  modelNames.push(match[1]);
}

// 2️⃣ Template for CRUD service
const generateCrudService = (modelName: string) => {
  const instanceName = modelName.charAt(0).toLowerCase() + modelName.slice(1);
  const createInput = `${modelName}CreateInput`;
  const updateInput = `${modelName}UpdateInput`;

  return `import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type ${createInput} = Prisma.${modelName}CreateInput;
type ${updateInput} = Prisma.${modelName}UpdateInput;

// Create ${modelName}
export const create${modelName} = async (data: ${createInput}) => {
  return prisma.${instanceName}.create({
    data,
  });
};

// Get ${modelName} by ID
export const get${modelName}ById = async (id: string) => {
  return prisma.${instanceName}.findUnique({
    where: { id },
  });
};

// List ${modelName}s
export const list${modelName}s = async (filter: any = {}) => {
  return prisma.${instanceName}.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update ${modelName}
export const update${modelName} = async (id: string, data: ${updateInput}) => {
  return prisma.${instanceName}.update({
    where: { id },
    data,
  });
};

// Delete ${modelName}
export const delete${modelName} = async (id: string) => {
  return prisma.${instanceName}.delete({
    where: { id },
  });
};
`;
};


// Ensure SERVICES_FOLDER exists
if (!fs.existsSync(SERVICES_FOLDER)) {
  fs.mkdirSync(SERVICES_FOLDER, { recursive: true });
  console.log('✅ Created folder: src/services');
}

let count = 0;
// 3️⃣ Generate service files
modelNames.forEach(modelName => {
  
  // Skip if the service file already exists
  const serviceFilePath = path.join(SERVICES_FOLDER, `${modelName.toLowerCase()}.service.ts`);
  if (fs.existsSync(serviceFilePath)) {
    return;
  }
  count++;
  const serviceCode = generateCrudService(modelName);
  const fileName = `${modelName.toLowerCase()}.service.ts`;
  const filePath = path.join(SERVICES_FOLDER, fileName);

  fs.writeFileSync(filePath, serviceCode);
  console.log(`✅ Created CRUD service: ${fileName}`);
});

console.log(`\n✅ ${count} CRUD service files generated successfully!`);