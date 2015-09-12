const
  path = require('path')
, { argv } = require('yargs')
, express = require('express')
, webpack = require('webpack')
, log = require("color-util-logs")

const
  { APP, ENTRY, SRC, DIST, port, host } = require('./build/paths')
, makeConfig = require('./build/webpack.makeConfig')
, configs = require('require-dir')(
  path.join(__dirname, 'build', 'configs')
)

const
  app = express()
, compiler = webpack(
    makeConfig(configs[argv.config || 'development'])
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
    log.error(err);
    return;
  }
  log.notice(`Listening at http://${host}:${port}`);
  open(`http://${host}:${port}`)
});