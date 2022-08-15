/* eslint-disable */
export default {
  displayName: '@cmsonfire/cms-types',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/packages/@cmsonfire/cms-types',
};
