import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const S3_ENDPOINT = z.string().parse(process.env.S3_ENDPOINT ?? '');
const S3_BUCKET = z.string().parse(process.env.S3_BUCKET ?? '');
const S3_ACCESS_KEY = z.string().parse(process.env.S3_ACCESS_KEY ?? '');
const S3_SECRET_KEY = z.string().parse(process.env.S3_SECRET_KEY ?? '');
const S3_REGION = z.string().parse(process.env.S3_REGION ?? '');

export { S3_ACCESS_KEY, S3_BUCKET, S3_ENDPOINT, S3_REGION, S3_SECRET_KEY };
