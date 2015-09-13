const
  { ENTRY, SRC } = require('../paths')
, webpack = require('webpack')

module.exports = {
  entry: {
    main: [
      'webpack-hot-middleware/client',
      'purecss/build/base',
      'purecss/build/grids',
      'purecss/build/grids-responsive',
      'purecss/build/tables',
      `${SRC}/theme`,
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