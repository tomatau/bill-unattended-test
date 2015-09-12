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
  env: 'test',
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}