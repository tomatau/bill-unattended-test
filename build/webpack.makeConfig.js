const
  webpack = require('webpack')
, paths = require('./paths')
, HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = makeConfig;

function makeConfig({entry, env, devtool, template, plugins}){
  return {
    entry,
    devtool: devtool || 'cheap-source-map',
    output: {
      path: paths.DIST,
      filename: '[name].[hash].js',
    },
    resolve: {
      root: paths.APP,
      extensions: [
        '', '.js', '.jsx', '.es6', '.css', '.less'
      ]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(env)
        }
      }),
      new HtmlWebpackPlugin({
        template: template,
        favicon: `${paths.SRC}/favicon.ico`
      })
    ].concat(plugins || []),
    module: {
      loaders: [{
        test: /.*\.(gif|png|jpe?g|svg|ico)$/i,
        loader: "file"
      },{
        test: /\.json$/,
        loader: "json"
      },{
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract('style', 'css')
      // },{
      //   test: /\.less$/,
      //   loader: ExtractTextPlugin.extract('style', 'css!less')
      // },{
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&minetype=application/font-woff"
      },{
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&minetype=application/octet-stream"
      },{
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },{
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&minetype=image/svg+xml"
      },{
        test: /\.es6$/,
        include: [/app\/src/],
        loaders: [ 'babel' ]
      }]
    },
  }
}