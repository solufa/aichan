import { DeleteObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { S3_ACCESS_KEY, S3_BUCKET, S3_ENDPOINT, S3_REGION, S3_SECRET_KEY } from './envValues';

export type S3PutParams = { key: string; contentType: string; data: Buffer };

const s3Client = new S3Client({
  forcePathStyle: true,
  ...(S3_ACCESS_KEY && S3_ENDPOINT && S3_SECRET_KEY
    ? {
        endpoint: S3_ENDPOINT,
        region: S3_REGION,
        credentials: { accessKeyId: S3_ACCESS_KEY, secretAccessKey: S3_SECRET_KEY },
      }
    : {}),
});

export const s3 = {
  put: async (params: S3PutParams): Promise<void> => {
    const command = new PutObjectCommand({
      Bucket: S3_BUCKET,
      ContentType: params.contentType,
      Key: params.key,
      Body: params.data,
    });

    await s3Client.send(command);
  },
  delete: async (key: string): Promise<void> => {
    const command = new DeleteObjectCommand({ Bucket: S3_BUCKET, Key: key });

    await s3Client.send(command);
  },
};
