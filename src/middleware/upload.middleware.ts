import multer from 'multer';

const storage = multer.memoryStorage(); // stores file in memory
export const upload = multer({ storage });