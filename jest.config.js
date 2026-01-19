module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  transformIgnorePatterns: [
     'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@react-navigation|@react-navigation/material-top-tabs|@react-navigation/native|@react-navigation/native-stack|@react-navigation/bottom-tabs|react-native-tab-view)/)'
  ],
  setupFiles: [
    './jest.setup.js'
  ],
};

// module.exports = {
//   preset: 'react-native',
// };
