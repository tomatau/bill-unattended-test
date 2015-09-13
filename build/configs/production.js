const
  { ENTRY, SRC } = require('../paths')
, webpack = require('webpack')

module.exports = {
  entry: {
    main: [
      'purecss/build/base',
      'purecss/build/grids',
      'purecss/build/grids-responsive',
      'purecss/build/tables',
      `${SRC}/theme`,
      ENTRY
    ]
  },
  template: `${SRC}/index.html`,
  env: 'production',
  devtool: null,
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
  ]
}