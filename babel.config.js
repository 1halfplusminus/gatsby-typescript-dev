module.exports = function(api) {
  api.cache(true)

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ]
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-runtime",
    "babel-plugin-transform-react-remove-prop-types",
  ]

  return {
    presets,
    plugins,
  }
}
