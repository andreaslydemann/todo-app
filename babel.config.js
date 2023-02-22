module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@screens': './src/components',
            '@hooks': './src/hooks',
            '@api': './src/api',
            '@generated-api': './src/generated-api',
          },
        },
      ],
    ],
  };
};
