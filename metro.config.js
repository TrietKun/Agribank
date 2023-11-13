const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'), // If needed, customize asset extensions
      sourceExts: [...sourceExts, 'jsx', 'js', 'ts', 'tsx'], // Add any additional source extensions you need
    },
  };
})();
