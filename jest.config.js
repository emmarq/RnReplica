module.exports = {
  verbose: true,
  setupFilesAfterEnv: [
    './node_modules/react-native-gesture-handler/jestSetup.js',   
  ],
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?@react-native|react-native|react-clone-referenced-element|react-navigation|@react-navigation/.*|native-base))',
  ],
  testEnvironment: 'node',
};
