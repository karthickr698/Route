module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    Plugins: [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".js", ".json"],
        alias: {
          "@": "./src",
        },
      },
    ],
  };
};
