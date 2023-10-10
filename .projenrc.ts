import { awscdk } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Mitchell Valine',
  authorAddress: 'mitchellvaline@yahoo.com',
  cdkVersion: '2.99.0',
  defaultReleaseBranch: 'main',
  name: 'awscdk-appsync-utils',
  projenrcTs: true,
  eslintOptions: {
    dirs: ['src'],
    ignorePatterns: ['*.js',
      '*.d.ts',
      'node_modules/',
      '*.generated.ts',
      'coverage',
      'src/mergeSourceApiSchemaHandler/'],
  },
  tsconfig: {
    compilerOptions: {},
    exclude: ['src/mergeSourceApiSchemaHandler/index.ts'],
  },
  repositoryUrl: 'https://github.com/cdklabs/awscdk-appsync-utils.git',
  description: 'Utilities for creating appsync apis using aws-cdk',
  // Auto approve PRs by our bot
  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
  excludeTypescript: ['src/mergeSourceApiSchemaHandler/index.ts'],
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

project.compileTask.prependExec(
  'esbuild ./src/mergeSourceApiSchemaHandler/index.ts --bundle --outfile=./lib/mergeSourceApiSchemaHandler/index.js --platform=node --format=cjs',
);

project.addDevDeps('esbuild');
project.addDevDeps('@aws-sdk/client-appsync');
project.addDevDeps('@types/aws-lambda');
project.synth();
