const { awscdk } = require('projen');

// CDK and alpha package versions need to be in sync
const CDK_VERSION = '2.51.1';
const APPSYNC_ALPHA_VERSION = `${CDK_VERSION}-alpha.0`;

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Mitchell Valine',
  authorAddress: 'mitchellvaline@yahoo.com',
  cdkVersion: CDK_VERSION,
  defaultReleaseBranch: 'main',
  name: 'awscdk-appsync-utils',
  repositoryUrl: 'https://github.com/cdklabs/awscdk-appsync-utils.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    '@aws-cdk/aws-appsync-alpha',
  ],
  peerDeps: [`@aws-cdk/aws-appsync-alpha@${APPSYNC_ALPHA_VERSION}`],
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
