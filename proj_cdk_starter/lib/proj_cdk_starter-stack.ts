import * as cdk from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ProjCdkStarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // L2 create s3 bucket
    new Bucket(this, 'MyL2Bucket', {
      // props? optional props to the bucket .. lets define 2 days duration
      lifecycleRules: [{
        expiration: Duration.days(2)
      }]
    

    
    })


  }
}
