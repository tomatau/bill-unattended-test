/*
  Needs to run in
    : dev
      - reload
        NODE_ENV=development
    : test
      - reload
        NODE_ENV='flexible'?
    : production?
      - reload?
        NODE_ENV=production
yargs:
  env,
  browser test uses diff entry (mocha!) and output (serve_test)
    maybe different plugins...
 */
const
  path = require('path')
, express = require('express')
, webpack = require('webpack')

const
  { APP, ENTRY, SRC, DIST, port, host } = require('./build/paths')
, makeConfig = require('./build/webpack.makeConfig')
, configs = require('require-dir')(
  path.join(__dirname, 'build', 'configs')
)

const
  app = express()
, compiler = webpack(
    makeConfig(configs.development)
  )
, open = require('open')

app.use(require('webpack-dev-middleware')(compiler, {
  // noInfo: true,
  // publicPath: config.output.publicPath
  stats: {
    colors: true,
    reasons: true,
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, host, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://${host}:${port}`);
  open(`http://${host}:${port}`)
});