import { awscdk } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Mitchell Valine',
  authorAddress: 'mitchellvaline@yahoo.com',
  cdkVersion: '2.60.0',
  defaultReleaseBranch: 'main',
  name: 'awscdk-appsync-utils',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/cdklabs/awscdk-appsync-utils.git',
  description: 'Utilities for creating appsync apis using aws-cdk',
  // Auto approve PRs by our bot
  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,

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
