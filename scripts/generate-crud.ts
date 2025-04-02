#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1️⃣ Parse CLI arguments
const argv = yargs(hideBin(process.argv))
  .option('model', {
    type: 'string',
    describe: 'Generate CRUD service for a specific model',
  })
  .option('all', {
    type: 'boolean',
    default: false,
    describe: 'Generate services for all models',
  })
  .option('new', {
    type: 'boolean',
    default: false,
    describe: 'Only generate services for models without existing service files',
  })
  .option('output', {
    type: 'string',
    default: 'src/services',
    describe: 'Output directory for generated service files',
  })
  .option('force', {
    type: 'boolean',
    default: false,
    describe: 'Overwrite existing files if they exist',
  })
  .check((argv) => {
    if (!argv.model && !argv.all && !argv.new) {
      throw new Error('You must provide either --model, --all, or --new');
    }
    return true;
  })
  .help()
  .parseSync();

const SERVICES_FOLDER = path.join(__dirname, '..', argv.output);
const SCHEMA_FILE = path.join(__dirname, '../prisma/schema.prisma');

// 2️⃣ Parse model names from schema.prisma
const schema = fs.readFileSync(SCHEMA_FILE, 'utf8');
const modelRegex = /model\s+(\w+)\s+{/g;

const modelNames: string[] = [];
let match;
while ((match = modelRegex.exec(schema)) !== null) {
  modelNames.push(match[1]);
}

// 3️⃣ Template
const generateCrudService = (modelName: string) => {
  const instanceName = modelName.charAt(0).toLowerCase() + modelName.slice(1);
  const createInput = `${modelName}CreateInput`;
  const updateInput = `${modelName}UpdateInput`;

  return `import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type ${createInput} = Prisma.${modelName}CreateInput;
type ${updateInput} = Prisma.${modelName}UpdateInput;

export const create${modelName} = async (data: ${createInput}) => {
  return prisma.${instanceName}.create({ data });
};

export const get${modelName}ById = async (id: string) => {
  return prisma.${instanceName}.findUnique({ where: { id } });
};

export const list${modelName}s = async (filter: any = {}) => {
  return prisma.${instanceName}.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const update${modelName} = async (id: string, data: ${updateInput}) => {
  return prisma.${instanceName}.update({ where: { id }, data });
};

export const delete${modelName} = async (id: string) => {
  return prisma.${instanceName}.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const delete${modelName} = async (id: string) => {
//   return prisma.${instanceName}.delete({ where: { id } });
// };
`;
};

// 4️⃣ Ensure output folder exists
if (!fs.existsSync(SERVICES_FOLDER)) {
  fs.mkdirSync(SERVICES_FOLDER, { recursive: true });
  console.log(`✅ Created folder: ${argv.output}`);
}

// 5️⃣ Generate files
let generatedCount = 0;

const modelsToGenerate =
  argv.model
    ? [argv.model]
    : argv.all
    ? modelNames
    : argv.new
    ? modelNames.filter(
        (model) =>
          !fs.existsSync(path.join(SERVICES_FOLDER, `${model.toLowerCase()}.service.ts`))
      )
    : [];

modelsToGenerate.forEach((modelName) => {
  const fileName = `${modelName.toLowerCase()}.service.ts`;
  const filePath = path.join(SERVICES_FOLDER, fileName);

  const alreadyExists = fs.existsSync(filePath);

  if (alreadyExists && !argv.force) {
    console.log(`⚠️ Skipped ${fileName} (already exists)`);
    return;
  }

  const code = generateCrudService(modelName);
  fs.writeFileSync(filePath, code);
  console.log(`${alreadyExists ? '♻️ Overwrote' : '✅ Created'} ${fileName}`);
  generatedCount++;
});

console.log(`\n✨ ${generatedCount} CRUD service file(s) written to ${argv.output}`);
