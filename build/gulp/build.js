const
  gulp = require('gulp')
, log = require('color-util-logs')
, webpack = require('webpack')
, $ = require('gulp-load-plugins')({ camelize: true, lazy: true })

const
  { blue, magenta, yellow } = $.util.colors

module.exports = function(deps, buildConfig){
  gulp.task('build', deps, function(done){
    process.env.NODE_ENV = 'production';
    webpack(buildConfig).run((err, stats) => {
      if (err) {
        log.error(err);
        return;
      }
      log.notice(`Compiled`, stats.toString({ colors: true }));
      done()
    })
  })
}