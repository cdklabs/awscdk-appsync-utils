import { CdklabsConstructLibrary } from 'cdklabs-projen-project-types';

const project = new CdklabsConstructLibrary({
  author: 'Mitchell Valine',
  authorAddress: 'mitchellvaline@yahoo.com',
  cdkVersion: '2.237.1',
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
  private: false,
  stability: 'stable',
  publishToMaven: {
    javaPackage: 'io.github.cdklabs.awscdk.appsync.utils',
    mavenGroupId: 'io.github.cdklabs',
    mavenArtifactId: 'awscdk-appsync-utils',
    mavenServerId: 'central-ossrh',
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
  enablePRAutoMerge: true,
  setNodeEngineVersion: false,
  rosettaOptions: {
    strict: false,
  },
});

project.testTask.reset();
project.testTask.exec('jest --passWithNoTests --updateSnapshot');
const eslintTask = project.tasks.tryFind('eslint');
if (eslintTask) {
  project.testTask.spawn(eslintTask);
}

project.addDevDeps('@aws-sdk/client-appsync');
project.addDevDeps('@types/aws-lambda');
project.synth();
