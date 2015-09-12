const
  path = require('path')

const
  ROOT = path.join(__dirname, '..')
, APP = path.join(ROOT, 'app')
, DIST = path.join(ROOT, 'dist')
, SRC = path.join(APP, 'src')
, ENTRY = path.join(SRC, 'index.es6')

const
  port = 9001
, host = `localhost`

module.exports = {
  port, host,
  ROOT,
  APP,
  DIST,
  SRC,
  ENTRY
}