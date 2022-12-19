const { awscdk } = require('projen');

// CDK and alpha package versions need to be in sync
const CDK_VERSION = '2.55.1';
const APPSYNC_ALPHA_VERSION = `${CDK_VERSION}-alpha.0`;

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Mitchell Valine',
  authorAddress: 'mitchellvaline@yahoo.com',
  cdkVersion: CDK_VERSION,
  defaultReleaseBranch: 'main',
  name: 'awscdk-appsync-utils',
  repositoryUrl: 'https://github.com/cdklabs/awscdk-appsync-utils.git',
  description: 'Utilities for creating appsync apis using aws-cdk',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    '@aws-cdk/aws-appsync-alpha',
  ],
  peerDeps: [`@aws-cdk/aws-appsync-alpha@${APPSYNC_ALPHA_VERSION}`],
  publishToMaven: {
    javaPackage: 'io.github.cdklabs.awscdk.appsync.utils',
    mavenGroupId: 'io.github.cdklabs',
    mavenArtifactId: 'awscdk-appsync-utils',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },
  publishToNuget: {
    dotNetNamespace: 'Cdklabs.AwsCdkAppsyncUtils',
    packageId: 'Cdklabs.AwsCdkAppsyncUtils',
  },
  publishToPypi: {
    distName: 'cdklabs.appsync-utils',
    module: 'awscdk.appsync_utils',
  },
  publishToGo: {
    moduleName: 'github.com/cdklabs/awscdk-appsync-utils-go',
  },
});
project.synth();
