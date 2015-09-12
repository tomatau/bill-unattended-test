const
  gulp = require('gulp')
, path = require('path')

const
  { APP, ENTRY, SRC, port, host } = require('./build/paths')
, makeConfig = require('./build/webpack.makeConfig')

const tasks = require('require-dir')(
  path.join(__dirname, 'build', 'gulp')
)
// inject task dependencies
tasks.dev()

gulp.task('default', require('gulp-task-listing'))