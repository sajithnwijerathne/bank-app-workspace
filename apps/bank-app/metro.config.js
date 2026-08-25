const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {makeMetroConfig} = require('@rnx-kit/metro-config');
const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

const config = {
  projectRoot: __dirname,
  watchFolders: [path.resolve(__dirname, '../../')],
  resolver: {
    resolveRequest: MetroSymlinksResolver(),
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
  transformer: {
    babelTransformerPath:
      require.resolve('react-native-svg-transformer/react-native'),
  },
};

module.exports = mergeConfig(defaultConfig, makeMetroConfig(config));
