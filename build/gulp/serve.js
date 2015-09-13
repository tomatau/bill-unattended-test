const
  gulp = require('gulp')
, log = require("color-util-logs")
, $ = require('gulp-load-plugins')({ camelize: true, lazy: true })

const
  { blue, magenta, yellow } = $.util.colors

module.exports = function(name, {root, port, host}){
  log.notice(`Serving from ${root}`)
  log.notice(`http://${host}:${port}`)
  gulp.task(`serve.${name}`, function(done){
    $.connect.server({
      root, port, host
    })
    done()
  })
}