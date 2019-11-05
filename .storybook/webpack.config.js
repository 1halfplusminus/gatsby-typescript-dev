module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]],
        },
      },
      {
        loader: require.resolve("react-docgen-typescript-loader"),
      },
    ],
  })
  config.module.rules.push({
    test: /cssmodules\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true
        }
      }
    ]
  });
  config.module.rules[2].exclude = /cssmodules\.css$/
  config.resolve.extensions.push(".ts", ".tsx")
  return config
}
