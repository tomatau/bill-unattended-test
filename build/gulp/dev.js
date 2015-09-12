const
  gulp = require('gulp')
, $ = require('gulp-load-plugins')({ camelize: true, lazy: true })

const
  { blue, magenta, yellow } = $.util.colors

module.exports = function(){
  gulp.task('dev', function(){
    $.util.log(yellow('webpack dev server removed from project'))
  })
}