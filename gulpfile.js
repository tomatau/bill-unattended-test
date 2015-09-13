const
  gulp = require('gulp')
, path = require('path')

const
  { APP, ENTRY, SRC, DIST, port, host } = require('./build/paths')
, makeConfig = require('./build/webpack.makeConfig')

const
  tasks = require('require-dir')(path.join(__dirname, 'build', 'gulp'))
, configs = require('require-dir')(path.join(__dirname, 'build', 'configs'))

// inject task dependencies
tasks.dev()
tasks.clean('dist', [ `${DIST}/*` ])
tasks.build(['clean.dist'], makeConfig(configs['production']))
tasks.deploy(`${DIST}/*`)

gulp.task('default', require('gulp-task-listing'))