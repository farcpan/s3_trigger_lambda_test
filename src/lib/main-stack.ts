import { Duration, Stack, StackProps } from "aws-cdk-lib";
import { Runtime, Tracing } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { Bucket, EventType } from "aws-cdk-lib/aws-s3";
import { LambdaDestination } from "aws-cdk-lib/aws-s3-notifications";
import { Construct } from "constructs";
import { join } from "path";

interface MainStackProps extends StackProps {}

export class MainStack extends Stack {
  constructor(scope: Construct, id: string, props: MainStackProps) {
    super(scope, id, props);

    // S3
    const bucket = new Bucket(this, "image-trigger-bucket", {
      bucketName: "s3-trigger-lambda-test-image",
    });

    // Lambda
    const path = join(__dirname, "/../lambdas/index.ts");
    const lambdaFunction = new NodejsFunction(
      this,
      "s3-triggered-lambda-function",
      {
        functionName: "s3-triggered-lambda-function",
        entry: path,
        runtime: Runtime.NODEJS_20_X,
        timeout: Duration.seconds(60),
        reservedConcurrentExecutions: 1, // 同時実行数=1
        logRetention: RetentionDays.ONE_DAY, // ログは最大1日保持
        tracing: Tracing.ACTIVE, // X-ray
      }
    );

    // S3 -> Lambda
    bucket.addEventNotification(
      EventType.OBJECT_CREATED_PUT,
      new LambdaDestination(lambdaFunction)
    );
    bucket.grantReadWrite(lambdaFunction);
  }
}
