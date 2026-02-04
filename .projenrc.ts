import { CdklabsConstructLibrary } from 'cdklabs-projen-project-types';
import { DependencyType } from 'projen';

const project = new CdklabsConstructLibrary({
  author: 'Mitchell Valine',
  authorAddress: 'mitchellvaline@yahoo.com',
  cdkVersion: '2.110.0',
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
// Override peer dependencies to use exact versions for jsii Maven resolution
project.deps.removeDependency('aws-cdk-lib', DependencyType.PEER);
project.deps.removeDependency('constructs', DependencyType.PEER);
project.deps.addDependency('aws-cdk-lib@2.110.0', DependencyType.PEER);
project.deps.addDependency('constructs@10.0.5', DependencyType.PEER);

project.addDevDeps('@aws-sdk/client-appsync');
project.addDevDeps('@types/aws-lambda');
project.synth();
