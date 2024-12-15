module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'], // Usa este si estás en Expo
      plugins: ['react-native-reanimated/plugin'], // Agregar este pluging expo start -c
    };
  };
  