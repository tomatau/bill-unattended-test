const
  { ENTRY, SRC } = require('../paths')
, webpack = require('webpack')

module.exports = {
  entry: {
    main: [
      'webpack-hot-middleware/client',
      ENTRY
    ]
  },
  template: `${SRC}/index.html`,
  env: 'development',
  devtool: 'eval',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}