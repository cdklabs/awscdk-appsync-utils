const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Mitchell Valine',
  authorAddress: 'mitchellvaline@yahoo.com',
  cdkVersion: '2.51.1',
  defaultReleaseBranch: 'main',
  name: 'awscdk-appsync-utils',
  repositoryUrl: 'https://github.com/cdklabs/awscdk-appsync-utils.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    '@aws-cdk/aws-appsync-alpha',
  ],
  peerDeps: ['@aws-cdk/aws-appsync-alpha'],
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
