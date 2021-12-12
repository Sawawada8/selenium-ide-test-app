import { S3Client, ListBucketsCommand } from '@aws-sdk/client-s3';
require('dotenv').config()

const accessKey = process.env.S3_ACCESS_KEY_ID as string
const secretKey = process.env.S3_SECRET_ACCESS_KEY as string

// ~/.aws/credentials に書かれている
const s3 = new S3Client({
    region: 'ap-northeast-1',
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretKey,
    },
});


// // 下記でどこ使っているか確認できる
const s3_ = new S3Client({});
(async () => {
  console.log(await s3_.config.credentials());
  console.log(await s3_.config.endpoint());
})();
