const
  gulp = require('gulp')
, log = require("color-util-logs")
, $ = require('gulp-load-plugins')({ camelize: true, lazy: true })

const
  { blue, magenta, yellow } = $.util.colors

module.exports = function(glob){
  gulp.task(`deploy`, function(){
    return gulp.src(glob)
      .pipe($.ghPages());
  })
}