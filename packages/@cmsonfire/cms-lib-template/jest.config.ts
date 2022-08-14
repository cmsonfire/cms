/* eslint-disable */
export default {
  displayName: '@cmsonfire-cms-lib-template',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/packages/@cmsonfire/cms-lib-template',
};
