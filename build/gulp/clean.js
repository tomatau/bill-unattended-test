const
  gulp = require('gulp')
, log = require("color-util-logs")
, del = require("del")
, $ = require('gulp-load-plugins')({ camelize: true, lazy: true })

const
  { blue, magenta, yellow } = $.util.colors

module.exports = function(name, dirs){
  gulp.task(`clean.${name}`, function(){
    del(dirs)
  })
}