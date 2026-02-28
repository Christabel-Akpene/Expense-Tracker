module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-p'reset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
