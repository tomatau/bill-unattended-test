const
  gulp = require('gulp')
, log = require("color-util-logs")
, $ = require('gulp-load-plugins')({ camelize: true, lazy: true })

const
  { blue, magenta, yellow } = $.util.colors

module.exports = function(){
  gulp.task('dev', function(){
    log.warn('webpack dev server removed from project')
  })
}