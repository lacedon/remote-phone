var tsConfig = require('./tsconfig.json');

const config = {
  presets: ['@babel/preset-typescript', 'module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: [tsConfig.compilerOptions.baseUrl],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: Object.keys(tsConfig.compilerOptions.paths).reduce(function (result, key) {
          result[key.replace(/\/\*?$/, '')] = `${tsConfig.compilerOptions.baseUrl}/${tsConfig.compilerOptions.paths[
            key
          ][0].replace(/\/\*?$/, '')}`;
          return result;
        }, {}),
      },
    ],
  ],
};

module.exports = config;
