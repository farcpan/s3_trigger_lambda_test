export const handler = async (event: any, context: any) => {
  const s3Info = event.Records[0].s3;
  const bucketName = s3Info.bucket.name;
  const objectKey = s3Info.object.key;

  await sleep(30 * 1000);
  console.info(`${bucketName}/${objectKey}`);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World!" }),
  };
};

const sleep = (ms: number) => {
  return new Promise((res) => {
    return setTimeout(res, ms);
  });
};
