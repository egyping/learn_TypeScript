#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ProjCdkStarterStack } from '../lib/proj_cdk_starter-stack';

const app = new cdk.App();

new ProjCdkStarterStack(app, 'ProjCdkStarterStack');