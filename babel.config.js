module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@styles': './src/styles',
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@components': './src/components',
          '@store': './src/store',
          '@screens': './src/screens',
          '@services': './src/services',
          '@shared': './src/interfaces',
          '@models': './src/models',
          '@types': './src/types',
          '@hooks': './src/hooks',
          '@helpers': './src/helpers',
          '@navigation': './src/navigation',
          '@functions': './src/functions',
          '@utils': './src/utils'
        },
      },
    ],
    'jest-hoist',
    'react-native-reanimated/plugin'
  ],
};
